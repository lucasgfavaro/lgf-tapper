package com.lgf.tapper.services;

import com.lgf.tapper.domain.Consumption;
import com.lgf.tapper.repository.ConsumptionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.sql.Timestamp;
import java.time.LocalDateTime;
import java.time.ZoneId;
import java.util.List;

@Service
public class ConsumptionService {

    private ConsumptionRepository repository;

    @Autowired
    public ConsumptionService(ConsumptionRepository repository) {
        this.repository = repository;
    }

    public List<Consumption> findAll() {

        return repository.findAll();
    }

    public void save(Consumption consumption) {

        LocalDateTime createdOn = LocalDateTime.now();
        consumption.setCreatedOn(createdOn);
        repository.save(consumption);
    }

}
