package com.project.entity;

import java.util.Arrays;

public class Register
{
	private String username;
	
	private String sellername;
	
	private String password;
	
	private String address;
	
	private String contactno;
	
	private String email;
	
	private String membership_status;
	
	private String type;
	 
	private String productname;
	
	private byte[] image;

	private Double price;
	
	private String category_name;

	
	public Register()
	{
		super();
		// TODO Auto-generated constructor stub
	}


	public Register(String username, String sellername, String password, String address, String contactno, String email,
			String membership_status, String type, String productname, byte[] image, Double price,
			String category_name) {
		super();
		this.username = username;
		this.sellername = sellername;
		this.password = password;
		this.address = address;
		this.contactno = contactno;
		this.email = email;
		this.membership_status = membership_status;
		this.type = type;
		this.productname = productname;
		this.image = image;
		this.price = price;
		this.category_name = category_name;
	}

	

	/*public Register(String sellername, String productname, byte[] image, Double price, String category_name)
	{
		super();
		this.sellername = sellername;
		this.productname = productname;
		this.image = image;
		this.price = price;
		this.category_name = category_name;
	}*/


	public String getUsername() {
		return username;
	}


	public void setUsername(String username) {
		this.username = username;
	}


	public String getSellername() {
		return sellername;
	}


	public void setSellername(String sellername) {
		this.sellername = sellername;
	}


	public String getPassword() {
		return password;
	}


	public void setPassword(String password) {
		this.password = password;
	}


	public String getAddress() {
		return address;
	}


	public void setAddress(String address) {
		this.address = address;
	}


	public String getContactno() {
		return contactno;
	}


	public void setContactno(String contactno) {
		this.contactno = contactno;
	}


	public String getEmail() {
		return email;
	}


	public void setEmail(String email) {
		this.email = email;
	}


	public String getMembership_status() {
		return membership_status;
	}


	public void setMembership_status(String membership_status) {
		this.membership_status = membership_status;
	}


	public String getType() {
		return type;
	}


	public void setType(String type) {
		this.type = type;
	}


	public String getProductname() {
		return productname;
	}


	public void setProductname(String productname) {
		this.productname = productname;
	}


	public byte[] getImage() {
		return image;
	}


	public void setImage(byte[] image) {
		this.image = image;
	}


	public Double getPrice() {
		return price;
	}


	public void setPrice(Double price) {
		this.price = price;
	}


	public String getCategory_name() {
		return category_name;
	}


	public void setCategory_name(String category_name) {
		this.category_name = category_name;
	}


	@Override
	public String toString() {
		return "Register [username=" + username + ", sellername=" + sellername + ", password=" + password + ", address="
				+ address + ", contactno=" + contactno + ", email=" + email + ", membership_status=" + membership_status
				+ ", type=" + type + ", productname=" + productname + ", image=" + Arrays.toString(image) + ", price="
				+ price + ", category_name=" + category_name + "]";
	}


	
	

	
	

	
	
	
	
	
}
