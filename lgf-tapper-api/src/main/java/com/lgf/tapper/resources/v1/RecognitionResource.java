package com.lgf.tapper.resources.v1;

import org.springframework.beans.factory.annotation.Autowired;
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
	public String indexFace( @RequestBody IndexFace indexFace ) {
		String faceId = service.indexFace(indexFace);
		
		return faceId;
	}
}
