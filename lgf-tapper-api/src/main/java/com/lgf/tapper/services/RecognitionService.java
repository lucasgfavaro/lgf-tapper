package com.lgf.tapper.services;

import java.awt.image.BufferedImage;
import java.io.ByteArrayInputStream;
import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.io.UnsupportedEncodingException;
import java.nio.ByteBuffer;
import java.util.List;

import javax.imageio.ImageIO;
import javax.imageio.stream.ImageOutputStream;

import org.apache.logging.log4j.util.Strings;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.amazonaws.services.rekognition.AmazonRekognition;
import com.amazonaws.services.rekognition.AmazonRekognitionClientBuilder;
import com.amazonaws.services.rekognition.model.FaceMatch;
import com.amazonaws.services.rekognition.model.FaceRecord;
import com.amazonaws.services.rekognition.model.Image;
import com.amazonaws.services.rekognition.model.IndexFacesRequest;
import com.amazonaws.services.rekognition.model.IndexFacesResult;
import com.amazonaws.services.rekognition.model.SearchFacesByImageRequest;
import com.amazonaws.services.rekognition.model.SearchFacesByImageResult;
import com.amazonaws.util.Base64;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.lgf.tapper.domain.IndexFace;
import com.lgf.tapper.domain.IndexFaceResults;
import com.lgf.tapper.domain.RecognFace;
import com.lgf.tapper.domain.RecognFaceResults;

@Service
public class RecognitionService {

	private static final String COLLECTION_ID = "tapper-club-members";

	@Autowired
	public RecognitionService() {
	}

	public Image convertStringToImage(String image) {

		ByteBuffer byteBuffer = null;

		try {
			byte[] imageByte = Base64.decode(image.split(",")[1]);
			ByteArrayInputStream bis = new ByteArrayInputStream(imageByte);
			BufferedImage bufferedImage = ImageIO.read(bis);
			bis.close();
			ByteArrayOutputStream baos = new ByteArrayOutputStream();
			ImageIO.write(bufferedImage, "png", baos);
			byteBuffer = ByteBuffer.wrap(baos.toByteArray());
		} catch (Exception e) {
			e.printStackTrace();
		}

		return new Image().withBytes(byteBuffer);
	}

	public IndexFaceResults indexFace(IndexFace indexFace) {
		IndexFaceResults indexFaceResults = new IndexFaceResults();

		AmazonRekognition rekognitionClient = AmazonRekognitionClientBuilder.defaultClient();
		Image image = this.convertStringToImage(indexFace.getPhotoBase64Encoded());
		IndexFacesRequest indexFacesRequest = new IndexFacesRequest()
				.withImage(image).withCollectionId(COLLECTION_ID).withExternalImageId(indexFace.getClubMember()
						.getFirstName().concat("-").concat(indexFace.getClubMember().getLastName().replace(" ", "-")))
				.withDetectionAttributes("ALL");

		IndexFacesResult indexFacesResult = rekognitionClient.indexFaces(indexFacesRequest);

		System.out.println(" added");
		List<FaceRecord> faceRecords = indexFacesResult.getFaceRecords();
		for (FaceRecord faceRecord : faceRecords) {
			System.out.println("Face detected: Faceid is " + faceRecord.getFace().getFaceId());
		}
		// TODO: Ver cómo hacer para procesar sólo una cara
		indexFaceResults.setFaceId(indexFacesResult.getFaceRecords().get(0).getFace().getFaceId());
		return indexFaceResults;
	}

	public RecognFaceResults recognFace(RecognFace searchFace) {

		RecognFaceResults recognFaceResults = new RecognFaceResults();
		AmazonRekognition rekognitionClient = AmazonRekognitionClientBuilder.defaultClient();
		ObjectMapper objectMapper = new ObjectMapper();
		// Get an image object from S3 bucket.
		Image image = this.convertStringToImage(searchFace.getPhotoBase64Encoded());
		// Search collection for faces similar to the largest face in the image.
		SearchFacesByImageRequest searchFacesByImageRequest = new SearchFacesByImageRequest()
				.withCollectionId(COLLECTION_ID).withImage(image).withFaceMatchThreshold(70F).withMaxFaces(2);
		SearchFacesByImageResult searchFacesByImageResult = rekognitionClient
				.searchFacesByImage(searchFacesByImageRequest);
		System.out.println("Faces matching largest face in image from");
		List<FaceMatch> faceImageMatches = searchFacesByImageResult.getFaceMatches();
		for (FaceMatch face : faceImageMatches) {
			try {
				System.out.println(objectMapper.writerWithDefaultPrettyPrinter().writeValueAsString(face));
			} catch (JsonProcessingException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
			System.out.println();
		}
		return recognFaceResults;
	}

}
