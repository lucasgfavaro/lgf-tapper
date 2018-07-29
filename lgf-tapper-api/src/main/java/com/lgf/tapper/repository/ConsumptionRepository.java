package com.lgf.tapper.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.lgf.tapper.domain.Consumption;

public interface ConsumptionRepository extends MongoRepository<Consumption, String> {


}
