package com.lgf.tapper.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.lgf.tapper.domain.IndexFace;

@Service
public class RecognitionService {

	@Autowired
	public RecognitionService() {
	}

	public String indexFace(IndexFace indexFace) {
		String faceId = "faceId1";

		return faceId;
	}

}
