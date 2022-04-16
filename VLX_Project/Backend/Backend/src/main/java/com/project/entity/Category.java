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
@Table(name="category")
public class Category {

	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
	private int categoryid;

	@Column
	private String category_name;

	public Category() {
		super();
		// TODO Auto-generated constructor stub
	}

	
	
	public Category(int categoryid, String category_name)
	{
		super();
		this.categoryid = categoryid;
		this.category_name = category_name;
	}



	public Category(String category_name) {
		super();
		this.category_name = category_name;
	}


	public int getCategoryid() {
		return categoryid;
	}

	public void setCategoryid(int categoryid) {
		this.categoryid = categoryid;
	}

	public String getCategory_name() {
		return category_name;
	}

	public void setCategory_name(String category_name) {
		this.category_name = category_name;
	}
	@Override
	public String toString() {
		return "Category [categoryid=" + categoryid + ", category_name=" + category_name + "]";
	}
}
