package com.project.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.entity.Seller;
import com.project.entity.User;
import com.project.repositories.SellerRepository;

@Service
public class SellerService
{
	@Autowired
	SellerRepository srepo;
	
	public List<Seller> getAll()
	{
		return srepo.findAll();
	}
	
	public Seller save(Seller sl)
	{
		return srepo.save(sl);
	}
	
}
