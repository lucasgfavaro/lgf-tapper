package com.lgf.tapper.resources.v1;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.lgf.tapper.domain.RecognFace;
import com.lgf.tapper.domain.RecognFaceResults;
import com.lgf.tapper.services.RecognitionService;

@RestController
@RequestMapping(value = "/faceRecogn")
public class FaceRecognResource {

	private RecognitionService service;

	@Autowired
	public FaceRecognResource(RecognitionService recognitionService) {
		this.service = recognitionService;
	}

	@RequestMapping(method = RequestMethod.POST)
	@ResponseBody
	public RecognFaceResults recognFace(@RequestBody RecognFace recognFace) {
		RecognFaceResults recognFaceResults = service.recognFace(recognFace);
		recognFaceResults.setFaceId("blabala");
		return recognFaceResults;
	}
}
