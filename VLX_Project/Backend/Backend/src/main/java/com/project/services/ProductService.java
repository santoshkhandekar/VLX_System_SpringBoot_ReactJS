package com.project.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.entity.Product;
import com.project.entity.Seller;
import com.project.repositories.ProductRepository;


@Service
public class ProductService {

	@Autowired
	ProductRepository prepo;
	
	
	public List<Product> getAll()
	{
		return prepo.findAll();
	}
	
	public Product save(Product p)
	{
		return prepo.save(p);
	}
	
	public void delete(int pid)
	{
		prepo.deleteById(pid);
	}
	
}
