package com.lgf.tapper.resources.v1;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.amazonaws.services.rekognition.model.Face;
import com.amazonaws.services.rekognition.model.ListFacesResult;
import com.lgf.tapper.domain.IndexFace;
import com.lgf.tapper.domain.IndexFaceResults;
import com.lgf.tapper.services.RecognitionService;

@RestController
@RequestMapping(value = "/faceIndex")
public class FaceIndexResource {

	private RecognitionService service;

	@Autowired
	public FaceIndexResource(RecognitionService recognitionService) {
		this.service = recognitionService;
	}

	@RequestMapping(method = RequestMethod.GET)
	@ResponseBody
	public ListFacesResult list() {
		ListFacesResult listFacesResult = service.listAll();
		return listFacesResult;
	}

	@RequestMapping(value = "/{id}", method = RequestMethod.GET)
	@ResponseBody
	public Face get(@PathVariable String id) {
		Face face = service.get(id);
		return face;
	}

	@RequestMapping(method = RequestMethod.POST)
	@ResponseBody
	public IndexFaceResults indexFace(@RequestBody IndexFace indexFace) {
		IndexFaceResults indexFaceResults = service.indexFace(indexFace);
		return indexFaceResults;
	}

	@RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
	@ResponseBody
	public void removeFace(@PathVariable String id) {
		service.removeFace(id);
	}
}
