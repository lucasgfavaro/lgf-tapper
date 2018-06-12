package com.lgf.tapper.repository;


import com.lgf.tapper.domain.Consumption;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface ConsumptionRepository extends MongoRepository<Consumption, String> {
}
