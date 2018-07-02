package com.lgf.tapper.resources.v1;

import com.lgf.tapper.domain.Product;
import com.lgf.tapper.services.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(value = "/products")
public class ProductResource {

	private ProductService service;

	@Autowired
	public ProductResource(ProductService productService) {
		this.service = productService;
	}

	@RequestMapping(method = RequestMethod.GET)
	@ResponseBody
	public List<Product> getProduct() {

		return service.getAll();
	}
}
