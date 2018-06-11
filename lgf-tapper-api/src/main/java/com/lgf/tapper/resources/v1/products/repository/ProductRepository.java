package com.lgf.tapper.resources.v1.products.repository;

import com.lgf.tapper.domain.Product;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface ProductRepository extends MongoRepository<Product, String> {

    public List<Product> findAll();

    public List<Product> findByName(String name);

}