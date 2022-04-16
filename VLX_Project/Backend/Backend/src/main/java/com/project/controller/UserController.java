package com.project.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.project.entity.Register;
import com.project.entity.User;
import com.project.entity.Login;
import com.project.services.UserService;
import com.project.services.LoginService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class UserController
{
	@Autowired
	UserService uservice;
	
	@Autowired
	LoginService lservice;
	
	
	
	@GetMapping("/alluser")
	public List<User> getAll()
	{
		return uservice.getAll();
	}
	
	@PostMapping("/registeru")
	public User saveuser(@RequestBody Register r)
	{
		Login l = new Login(r.getUsername(),r.getPassword(),"user");
		Login savedlogin = lservice.save(l);
		User u = new User(r.getUsername(),r.getAddress(),r.getContactno(),r.getEmail(),savedlogin);
		return uservice.save(u);
	}
	
	
	
}
