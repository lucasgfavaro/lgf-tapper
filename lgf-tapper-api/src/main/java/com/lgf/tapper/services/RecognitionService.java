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
import com.amazonaws.services.rekognition.model.FaceRecord;
import com.amazonaws.services.rekognition.model.Image;
import com.amazonaws.services.rekognition.model.IndexFacesRequest;
import com.amazonaws.services.rekognition.model.IndexFacesResult;
import com.amazonaws.util.Base64;
import com.lgf.tapper.domain.IndexFace;

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

	public String indexFace(IndexFace indexFace) {
		String faceId = "faceId1";

		AmazonRekognition rekognitionClient = AmazonRekognitionClientBuilder.defaultClient();
		Image image = this.convertStringToImage(indexFace.getPhotoBase64Encoded());
		IndexFacesRequest indexFacesRequest = new IndexFacesRequest().withImage(image).withCollectionId(COLLECTION_ID)
				.withExternalImageId("LucasFavaro").withDetectionAttributes("ALL");

		IndexFacesResult indexFacesResult = rekognitionClient.indexFaces(indexFacesRequest);

		System.out.println(" added");
		List<FaceRecord> faceRecords = indexFacesResult.getFaceRecords();
		for (FaceRecord faceRecord : faceRecords) {
			System.out.println("Face detected: Faceid is " + faceRecord.getFace().getFaceId());
		}

		return faceId;
	}

}
