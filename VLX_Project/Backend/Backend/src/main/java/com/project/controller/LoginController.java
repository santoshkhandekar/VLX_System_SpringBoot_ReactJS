package com.project.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import com.project.entity.Login;
import com.project.services.LoginService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class LoginController
{
	@Autowired
	LoginService lservice;
	
	
	
	
	@PostMapping("/checkLogin")
	public Object checkLogin(@RequestBody Login l)
	{	
		return lservice.checkLogin(l.getUsername(), l.getPassword());
	}
	
	
}
