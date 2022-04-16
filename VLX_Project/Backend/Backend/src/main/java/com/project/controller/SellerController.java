package com.project.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.project.entity.Register;
import com.project.entity.Seller;
import com.project.entity.Category;
import com.project.entity.Login;
import com.project.entity.Product;
import com.project.services.SellerService;
import com.project.services.CategoryService;
import com.project.services.LoginService;
import com.project.services.ProductService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class SellerController
{
	@Autowired
	SellerService sservice;
	
	@Autowired
	LoginService lservice;
	
	@Autowired
	ProductService pservice;
	
	
	
	@GetMapping("/allseller")
	public List<Seller> getAll()
	{
		return sservice.getAll();
	}
	
	@PostMapping("/registers")
	public Seller saveseller(@RequestBody Register r)
	{
		System.out.println(r);
		Login l = new Login(r.getUsername(),r.getPassword(),"seller");
		Login savedlogin = lservice.save(l);
		Seller s = new Seller(r.getSellername(),r.getAddress(),r.getContactno(),r.getEmail(),r.getMembership_status(),savedlogin);
	    return sservice.save(s);
	}
	
	
	
}
