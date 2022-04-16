package com.project.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(	name = "login")
public class Login
{
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int loginid;
	
	@Column
	private String username;
	

	@Column
	private String password;

	@Column
	private String type;


	public Login()
	{
		super();
		// TODO Auto-generated constructor stub
	}


	public Login(String username, String password, String type)
	{
		super();
		this.username = username;
		this.password = password;
		this.type = type;
	}


	public int getLoginid()
	{
		return loginid;
	}


	public void setLoginid(int loginid)
	{
		this.loginid = loginid;
	}


	public String getUsername()
	{
		return username;
	}


	public void setUsername(String username)
	{
		this.username = username;
	}


	public String getPassword()
	{
		return password;
	}


	public void setPassword(String password)
	{
		this.password = password;
	}


	public String getType()
	{
		return type;
	}


	public void setType(String type)
	{
		this.type = type;
	}


	
	
	
	
	
}
