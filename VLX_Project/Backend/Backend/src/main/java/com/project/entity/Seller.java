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

@Entity
@Table(	name = "seller")
public class Seller
{
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int sellerid;
	
	@Column
	private String sellername;
	
	@Column
	private String address;

	@Column
	private String contactno;
	
	@Column
	private String email;
	
	@Column
	private String membership_status;
	
	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "loginid")
	Login loginid;

	public Seller()
	{
		super();
		// TODO Auto-generated constructor stub
	}

	public Seller(String sellername, String address, String contactno, String email, String membership_status,
			Login loginid)
	{
		super();
		this.sellername = sellername;
		this.address = address;
		this.contactno = contactno;
		this.email = email;
		this.membership_status = membership_status;
		this.loginid = loginid;
	}

	public int getSellerid()
	{
		return sellerid;
	}

	public void setSellerid(int sellerid)
	{
		this.sellerid = sellerid;
	}

	public String getSellername()
	{
		return sellername;
	}

	public void setSellername(String sellername)
	{
		this.sellername = sellername;
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

	public String getMembership_status()
	{
		return membership_status;
	}

	public void setMembership_status(String membership_status)
	{
		this.membership_status = membership_status;
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
		return "Seller [sellerid=" + sellerid + ", sellername=" + sellername + ", address=" + address + ", contactno="
				+ contactno + ", email=" + email + ", membership_status=" + membership_status + ", loginid=" + loginid
				+ "]";
	}

	

	
	
	
}
