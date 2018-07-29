package com.lgf.tapper.resources.v1;

import com.lgf.tapper.domain.Consumption;
import com.lgf.tapper.services.ConsumptionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
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

	@RequestMapping(method = RequestMethod.GET, params = { "pageNumber", "pageSize" })
	@ResponseBody
	public Page<Consumption> findAll(@RequestParam("pageNumber") int pageNumber,
			@RequestParam("pageSize") int pageSize) {
		Page<Consumption> consumptions = service.findAll(pageNumber, pageSize);
		return consumptions;
	}

	@RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
	public void delete(@PathVariable String id) {
		service.delete(id);
	}

	@RequestMapping(method = RequestMethod.POST)
	public void create(@RequestBody Consumption consumption) {

		service.save(consumption);
	}
}
