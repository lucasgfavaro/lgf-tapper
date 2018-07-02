package com.lgf.tapper.resources.v1;

import java.util.HashMap;
import java.util.Map;

import org.apache.http.HttpStatus;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.lgf.tapper.domain.IndexFace;
import com.lgf.tapper.services.RecognitionService;

@RestController
@RequestMapping(value = "/recognitions")
public class RecognitionResource {

	private RecognitionService service;

	@Autowired
	public RecognitionResource(RecognitionService recognitionService) {
		this.service = recognitionService;
	}

	@RequestMapping(method = RequestMethod.POST)
	@ResponseBody
	public ResponseEntity<Map<String, String>> indexFace(@RequestBody IndexFace indexFace) {
		String faceId = service.indexFace(indexFace);
		Map<String, String> response = new HashMap<>();
		response.put("faceId", faceId);
		ResponseEntity<Map<String, String>> responseEntity = new ResponseEntity<Map<String, String>>(response,
				org.springframework.http.HttpStatus.OK);

		return responseEntity;
	}
}
