package com.project.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.entity.Login;
import com.project.entity.Seller;
import com.project.entity.User;
import com.project.repositories.LoginRepository;
import com.project.repositories.SellerRepository;
import com.project.repositories.UserRepository;

@Service
public class LoginService
{
	@Autowired
	LoginRepository lrepo;
	
	@Autowired
	UserRepository urepo;
	
	@Autowired
	SellerRepository srepo;
	
	
	
	public List<Login> getAll()
	{
		return lrepo.findAll();
	}
	
	public Login save(Login l)
	{
		return lrepo.save(l);
	}
	
	
		
	public Object checkLogin(String username,String password)
	{
		//System.out.println(username+":"+password);
		List<Object[]> l = lrepo.checkLogin(username, password);
		//System.out.println(l.size());
		
		
		
		if(l.size()==1)
		{
			//System.out.println("Display  "+l.get(0)[0]+":"+l.get(0)[1]);
			User u = null;
			Seller s = null;
			
			if(l.get(0)[0].equals("user"))
			{
				Optional<User> us = urepo.finduser(lrepo.findById((int)l.get(0)[1]));
				
				try 
				{
					u = us.get();
				}
				catch (Exception e)
				{
					u = null;
				}
				System.out.println(u);
				return u;
				
			}
			
			else if(l.get(0)[0].equals("seller"))
			 {
				System.out.println(l.get(0)[0]+":"+l.get(0)[1]);
				
			 	Optional<Seller> sl = srepo.findseller(lrepo.findById((int)l.get(0)[1]));
					
					try 
					{
						s = sl.get();
					}
					catch (Exception e)
					{
						s = null;
					}
					System.out.println(s);
					return s;
			 } 
			
		
		}
		
		else
		{
			return null;
		}
		
		
		return l;
		
		
	}
			
		
		
	
  }

	
	
	

