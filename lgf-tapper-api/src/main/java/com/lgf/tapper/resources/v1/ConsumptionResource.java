package com.lgf.tapper.resources.v1;

import com.lgf.tapper.domain.Consumption;
import com.lgf.tapper.services.ConsumptionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/")
public class ConsumptionResource {

    private ConsumptionService service;

    @Autowired
    public ConsumptionResource(ConsumptionService consumptionService) {
         this.service = consumptionService;
    }

    @RequestMapping(value = "/consumptions", method = RequestMethod.POST)
    public void create(@RequestBody Consumption consumption) {

        service.save(consumption);

    }
}
