package com.project.controller;

import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.project.entity.Category;
import com.project.entity.Login;
import com.project.entity.Product;
import com.project.entity.Register;
import com.project.entity.Seller;
import com.project.repositories.ProductRepository;
import com.project.services.CategoryService;
import com.project.services.LoginService;
import com.project.services.ProductService;
import com.project.services.SellerService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class ProductController {

	@Autowired
	ProductRepository prepo;
	
	@Autowired
	ProductService pservice;
	
	@Autowired
	CategoryService cservice;

	@GetMapping("/allProduct")
	public List<Product> getAll()
	{
		return pservice.getAll();
	}
	
	@PostMapping("/addProduct")
	public Product addProduct(@RequestBody Register r)
	{
		System.out.println(r);
		/*Category c = new Category(r.getCategory_name());
		Category savedcat = cservice.save(c);*/
		Product p = new Product(r.getProductname(),r.getPrice(),null);
		return pservice.save(p);
	}
	
	@PostMapping("/saveProduct")
	public Product saveAndUpload(@RequestPart("data")Product p,@RequestPart("file") MultipartFile file)
	{
		Product savedPro = pservice.save(p);
		boolean flag = true;
		
		try
		{
		byte [] data = file.getBytes();
		Path path = Paths.get("images//"+savedPro.getProductid()+".jpg");
		Files.write(path, data);
		}
		catch(Exception e)
		{
			flag = false;
		}
		if(flag)
			return savedPro;
		else
			return null;
		
	}
	
	/*@DeleteMapping("/deleteProduct")
	public void delete(@RequestBody Product product)
	{
		pservice.delete(product.getProductid());	 
	}*/
	
	@DeleteMapping("/product/{id}")
	 public ResponseEntity<Product> deleteProduct(@PathVariable("id") int productid){
	  try {
	   System.out.println("inside");
	 prepo.deleteById(productid);
	  return new ResponseEntity<Product>(HttpStatus.OK);
	  }
	  catch (Exception e) {
	   // TODO: handle exception
	   return new ResponseEntity<Product>(HttpStatus.INTERNAL_SERVER_ERROR);
	  }
	 }
	
}
