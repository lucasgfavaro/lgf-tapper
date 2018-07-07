package com.lgf.tapper.resources.v1;

import com.lgf.tapper.domain.Consumption;
import com.lgf.tapper.services.ConsumptionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/consumptions")
public class ConsumptionResource {

	private ConsumptionService service;

	@Autowired
	public ConsumptionResource(ConsumptionService consumptionService) {
		this.service = consumptionService;
	}

	@RequestMapping(method = RequestMethod.GET)
	@ResponseBody
	public List<Consumption> findAll() {
		List<Consumption> consumptions = service.findAll();
		return consumptions;
	}

	@RequestMapping(method = RequestMethod.POST)
	public void create(@RequestBody Consumption consumption) {

		service.save(consumption);
	}

}
