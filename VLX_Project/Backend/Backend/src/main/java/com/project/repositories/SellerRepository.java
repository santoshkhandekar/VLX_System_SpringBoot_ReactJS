package com.project.repositories;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.project.entity.Login;
import com.project.entity.Product;
import com.project.entity.Seller;

@Repository
public interface SellerRepository extends JpaRepository<Seller, Integer>
{
	@Query("select s from Seller s where  loginid= :l")
	Optional<Seller> findseller(Optional<Login> l);
	

	@Query("select s from Seller s where  productid= :p")
	Optional<Seller> addProduct(Optional<Product> p);
	
	
}
