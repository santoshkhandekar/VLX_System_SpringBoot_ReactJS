package com.project.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.entity.Category;
import com.project.entity.Seller;
import com.project.repositories.CategoryRepository;

@Service
public class CategoryService {

	@Autowired
	CategoryRepository crepo;
	
	public Category save(Category c)
	{
		return crepo.save(c);
	}
}
