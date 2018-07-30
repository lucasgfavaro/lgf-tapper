package com.lgf.tapper.services;

import com.lgf.tapper.domain.Consumption;
import com.lgf.tapper.repository.ConsumptionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
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

	public Page<Consumption> findAll(int pageNumber, int pageSize) {
		
		Pageable pageable = PageRequest.of(pageNumber, pageSize);

		return repository.findAll(pageable);
	}

	public void save(Consumption consumption) {

		LocalDateTime createdOn = LocalDateTime.now();
		consumption.setCreatedOn(createdOn);
		repository.save(consumption);
	}

	public void delete(String consumptionId) {

		repository.deleteById(consumptionId);
	}

}
