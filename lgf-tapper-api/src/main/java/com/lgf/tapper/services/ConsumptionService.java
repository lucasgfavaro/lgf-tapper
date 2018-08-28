package com.lgf.tapper.services;

import com.lgf.tapper.domain.Consumption;
import com.lgf.tapper.repository.ConsumptionRepository;
import com.lgf.tapper.util.QueryUtils;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.domain.Sort.Direction;
import org.springframework.data.domain.Sort.Order;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;

import java.sql.Timestamp;
import java.time.LocalDateTime;
import java.time.ZoneId;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Optional;
import java.util.function.Supplier;

@Service
public class ConsumptionService {

	private final static String DEFAULT_ORDERBY = "createdOn desc";
	private ConsumptionRepository repository;

	@Autowired
	public ConsumptionService(ConsumptionRepository repository) {
		this.repository = repository;
	}

	public Page<Consumption> findAll(String orderBy, int pageNumber, int pageSize) {

		if (orderBy.isEmpty())
			orderBy = null;

		Sort sort = Sort.by(QueryUtils.getOrderBy(Optional.ofNullable(orderBy).orElse(DEFAULT_ORDERBY)));
		Pageable pageable = PageRequest.of(pageNumber, pageSize, sort);

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
