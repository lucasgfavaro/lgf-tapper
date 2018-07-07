package com.lgf.tapper.resources.v1;

import com.lgf.tapper.domain.Product;
import com.lgf.tapper.domain.Product;
import com.lgf.tapper.services.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
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
	public List<Product> listProducts() {
		return service.getAll();
	}

	@RequestMapping(value = "/{id}", method = RequestMethod.GET)
	@ResponseBody
	public Product getProduct(@PathVariable String id) {
		return service.get(id).get();
	}

	@RequestMapping(method = RequestMethod.POST)
	@ResponseBody
	public Product createProduct(@RequestBody Product product) {
		Product productCreated = this.service.create(product);
		return productCreated;
	}

	@RequestMapping(value = "/{id}", method = RequestMethod.PUT)
	@ResponseBody
	public Product updateProduct(@PathVariable String id, @RequestBody Product product) {
		product.setId(id);
		Product productCreated = this.service.update(product);
		return productCreated;
	}

	@RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
	@ResponseBody
	public void deleteProduct(@PathVariable String id) {
		this.service.delete(id);
	}

}
