package com.project.entity;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.persistence.UniqueConstraint;

import org.springframework.data.jpa.repository.JpaRepository;

@Entity
@Table(	name = "user")
public class User
{
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int userid;
	
	
	@Column
	private String username;
	

	@Column
	private String address;

	@Column
	private String contactno;
	
	@Column
	private String email;

	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "loginid")
	Login loginid;

	public User()
	{
		super();
		// TODO Auto-generated constructor stub
	}

	public User(String username, String address, String contactno, String email, Login loginid)
	{
		super();
		this.username = username;
		this.address = address;
		this.contactno = contactno;
		this.email = email;
		this.loginid = loginid;
	}

	public int getUserid()
	{
		return userid;
	}

	public void setUserid(int userid)
	{
		this.userid = userid;
	}

	public String getUsername()
	{
		return username;
	}

	public void setUsername(String username)
	{
		this.username = username;
	}

	public String getAddress()
	{
		return address;
	}

	public void setAddress(String address)
	{
		this.address = address;
	}

	public String getContactno()
	{
		return contactno;
	}

	public void setContactno(String contactno)
	{
		this.contactno = contactno;
	}

	public String getEmail()
	{
		return email;
	}

	public void setEmail(String email)
	{
		this.email = email;
	}

	public Login getLoginid()
	{
		return loginid;
	}

	public void setLoginid(Login loginid)
	{
		this.loginid = loginid;
	}

	@Override
	public String toString()
	{
		return "User [userid=" + userid + ", username=" + username + ", address=" + address + ", contactno=" + contactno
				+ ", email=" + email + ", loginid=" + loginid + ", getUserid()=" + getUserid() + ", getUsername()="
				+ getUsername() + ", getAddress()=" + getAddress() + ", getContactno()=" + getContactno()
				+ ", getEmail()=" + getEmail() + ", getLoginid()=" + getLoginid() + ", getClass()=" + getClass()
				+ ", hashCode()=" + hashCode() + ", toString()=" + super.toString() + "]";
	}

	
	
	
}
