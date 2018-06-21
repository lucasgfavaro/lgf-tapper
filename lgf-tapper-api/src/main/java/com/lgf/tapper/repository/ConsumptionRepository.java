package com.lgf.tapper.repository;

import com.lgf.tapper.domain.Consumption;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface ConsumptionRepository extends MongoRepository<Consumption, String> {

    public List<Consumption> findAll();
}
