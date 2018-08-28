package com.lgf.tapper.util;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

import org.springframework.data.domain.Sort.Direction;
import org.springframework.data.domain.Sort.Order;
import org.springframework.util.StringUtils;

public abstract class QueryUtils {

	public static <T> List<Order> getOrderBy(String orderBy) {
		if (StringUtils.isEmpty(orderBy)) {
			return Collections.emptyList();
		}
		String[] groups = orderBy.trim().split(",");
		List<Order> orders = new ArrayList<Order>(groups.length);
		for (String group : groups) {
			boolean ascending = true;
			String[] array = group.split("\\s", 2);
			String property = array[0];
			if (array.length > 1) {
				ascending = "asc".equalsIgnoreCase(array[1]);
				;
			}
			Order order = new Order(ascending ? Direction.ASC : Direction.DESC, property);
			orders.add(order);
		}
		return orders;
	}
}
