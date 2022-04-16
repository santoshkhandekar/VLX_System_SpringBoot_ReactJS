package com.project.repositories;

import java.util.Locale.Category;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.project.entity.Login;
import com.project.entity.Product;
import com.project.entity.Seller;
@Repository
public interface ProductRepository extends JpaRepository<Product,Integer> {

	@Query("select p.sellerid from Product p where  sellerid=?1")
	Optional<Product> findproduct(Optional<Seller> sellerid);
	
	/*@Query("select p.sellerid from Product p where  sellerid=?1 and categoryid=?2")
	Optional<Product> findproduct(Optional<Seller> sellerid);*/
	
	

}
