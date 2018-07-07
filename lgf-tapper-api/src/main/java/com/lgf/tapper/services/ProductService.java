package com.lgf.tapper.services;

import com.lgf.tapper.domain.ClubMember;
import com.lgf.tapper.domain.Product;
import com.lgf.tapper.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProductService {

	private ProductRepository repository;

	@Autowired
	public ProductService(ProductRepository repository) {
		this.repository = repository;
	}

	public List<Product> getAll() {
		return (repository.findAll());
	}

	public Optional<Product> get(String id) {
		return repository.findById(id);
	}

	public Product create(Product clubMember) {
		clubMember = this.repository.insert(clubMember);
		return clubMember;
	}

	public Product update(Product clubMember) {
		clubMember = this.repository.save(clubMember);
		return clubMember;
	}

	public void delete(String clubMemberId) {
		this.repository.deleteById(clubMemberId);
	}

}
