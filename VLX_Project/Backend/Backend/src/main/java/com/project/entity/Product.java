package com.project.entity;

import java.util.Arrays;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.persistence.UniqueConstraint;
@Entity
@Table(name="product")
public class Product {
	
   @Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int productid;

	@Column
	private String productname;
	
	@Column
	private Double price ;
	
	@Column(name="image",length=10000000)
	private byte[] image;
	
	@ManyToOne(cascade = CascadeType.MERGE)
	@JoinColumn(name = "sellerid")
	Seller sellerid;
	

	

	@ManyToOne(cascade = CascadeType.MERGE)
	@JoinColumn(name = "categoryid")
	Category categoryid;


	public Product() {
		super();
		// TODO Auto-generated constructor stub
	}

	
	
	
	/*public Product(String productname, Double price, byte[] image, Seller sellerid, Category categoryid)
	{
		super();
		this.productname = productname;
		this.price = price;
		this.image = image;
		this.sellerid = sellerid;
		this.categoryid = categoryid;
	}*/




	public Product(String productname, Double price, byte[] image) {
		super();
		this.productname = productname;
		this.price = price;
		this.image = image;
	}




	public int getProductid()
	{
		return productid;
	}




	public void setProductid(int productid)
	{
		this.productid = productid;
	}




	public String getProductname()
	{
		return productname;
	}




	public void setProductname(String productname)
	{
		this.productname = productname;
	}




	public Double getPrice()
	{
		return price;
	}




	public void setPrice(Double price)
	{
		this.price = price;
	}




	public byte[] getImage()
	{
		return image;
	}




	public void setImage(byte[] image)
	{
		this.image = image;
	}




	public Seller getSellerid()
	{
		return sellerid;
	}




	public void setSellerid(Seller sellerid)
	{
		this.sellerid = sellerid;
	}




	public Category getCategoryid()
	{
		return categoryid;
	}




	public void setCategoryid(Category categoryid)
	{
		this.categoryid = categoryid;
	}




	@Override
	public String toString()
	{
		return "Product [productid=" + productid + ", productname=" + productname + ", price=" + price + ", image="
				+ Arrays.toString(image) + ", sellerid=" + sellerid + ", categoryid=" + categoryid + "]";
	}



	

	 
}