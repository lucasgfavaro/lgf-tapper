package com.lgf.tapper.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.amazonaws.services.rekognition.AmazonRekognition;
import com.amazonaws.services.rekognition.AmazonRekognitionClientBuilder;
import com.amazonaws.services.rekognition.model.FaceMatch;
import com.amazonaws.services.rekognition.model.Image;
import com.amazonaws.services.rekognition.model.IndexFacesRequest;
import com.amazonaws.services.rekognition.model.IndexFacesResult;
import com.amazonaws.services.rekognition.model.SearchFacesByImageRequest;
import com.amazonaws.services.rekognition.model.SearchFacesByImageResult;
import com.lgf.tapper.domain.ClubMember;
import com.lgf.tapper.domain.IndexFace;
import com.lgf.tapper.domain.IndexFaceResults;
import com.lgf.tapper.domain.RecognFace;
import com.lgf.tapper.domain.RecognFaceResults;
import com.lgf.tapper.util.ImageUtil;

@Service
public class RecognitionService {

	private static final String COLLECTION_ID = "tapper-club-members";
	private static final int INDEX_REQ_TIME_OUT = 10000;
	private static final float CONFIDENCE_FACE_INDEX_DETECTION = 80;
	private static final float CONFIDENCE_FACE_RECOG_DETECTION = 70;

	ClubMemberService clubMemberService;
	AmazonRekognition rekognitionClient;

	@Autowired
	public RecognitionService(ClubMemberService clubMemberService) {
		this.clubMemberService = clubMemberService;
		this.rekognitionClient = AmazonRekognitionClientBuilder.defaultClient();
	}

	// TODO:
	// * Revisar cómo se comporta si hubiera varias caras y ver qué hacer con el
	// resto de los atributos analizados
	// * Programar contra una interfaz para abstraer el servicio de reconocimiento
	// de AWS
	// * Move parameters to application properties

	public IndexFaceResults indexFace(IndexFace indexFace) {
		IndexFaceResults indexFaceResults = new IndexFaceResults();

		// Transforms String Base64 image to AWS Image Object
		Image image = ImageUtil.convertStringToImage(indexFace.getPhotoBase64Encoded());
		// Prepares Face Index parameters
		IndexFacesRequest indexFacesRequest = new IndexFacesRequest().withImage(image).withCollectionId(COLLECTION_ID)
				.withExternalImageId(indexFace.getClubMember().getId()).withDetectionAttributes("DEFAULT")
				.withSdkRequestTimeout(INDEX_REQ_TIME_OUT);
		// Request AWS Rekognition service to Index Face
		IndexFacesResult indexFacesResult = this.rekognitionClient.indexFaces(indexFacesRequest);
		// If a Face was detected in the Photo and its confidence is acceptable
		if (!indexFacesResult.getFaceRecords().isEmpty() && indexFacesResult.getFaceRecords().get(0).getFace()
				.getConfidence() >= CONFIDENCE_FACE_INDEX_DETECTION) {
			// Proceed to link the index Face Id with Club Member.
			indexFaceResults.setFaceId(indexFacesResult.getFaceRecords().get(0).getFace().getFaceId());
			ClubMember clubMember = this.clubMemberService.get(indexFace.getClubMember().getId()).get();
			clubMember.setMainBase64Photo(indexFace.getPhotoBase64Encoded());
			clubMember.setAWSRekognFaceId(indexFacesResult.getFaceRecords().get(0).getFace().getFaceId());
			this.clubMemberService.update(clubMember);
		}
		return indexFaceResults;
	}

	public RecognFaceResults recognFace(RecognFace searchFace) {

		RecognFaceResults recognFaceResults = new RecognFaceResults();
		// Transforms String Base64 image to AWS Image Object
		Image image = ImageUtil.convertStringToImage(searchFace.getPhotoBase64Encoded());
		// Prepare Face Recogn parameters
		SearchFacesByImageRequest searchFacesByImageRequest = new SearchFacesByImageRequest()
				.withCollectionId(COLLECTION_ID).withImage(image).withFaceMatchThreshold(70F).withMaxFaces(2);
		
		try {
		// Request AWS Rekognition service to Index Face
		SearchFacesByImageResult searchFacesByImageResult = rekognitionClient
				.searchFacesByImage(searchFacesByImageRequest);

		if (!searchFacesByImageResult.getFaceMatches().isEmpty()) {
			// Get the first match
			FaceMatch faceMatch = searchFacesByImageResult.getFaceMatches().get(0);
			// If a Face was detected in the Photo and its confidence is acceptable
			if (faceMatch.getSimilarity() >= CONFIDENCE_FACE_INDEX_DETECTION) {
				ClubMember clubMember = this.clubMemberService.get(faceMatch.getFace().getExternalImageId()).get();
				recognFaceResults.setClubMember(clubMember);
			}
		}
		}
		catch (Exception e)
		{
			
		}
		return recognFaceResults;
	}
}
