package com.project.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.project.entity.Login;

@Repository
public interface LoginRepository extends JpaRepository<Login, Integer> 
{
	/*@Query("select l from Login l where username= :username and password= :password")
	   public List<Login> checkLogin(String username,String password);*/
	   
	@Query("select l.type, l.loginid from Login l where username =?1 and password =?2")
	public List<Object[]> checkLogin(String username,String password);
}	
