package com.example.demo.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.example.demo.model.nageur.Nageur;



@Repository
public interface NageurRepository extends JpaRepository<Nageur,Long>{
			
			Nageur findNageurById(long id);
			List<Nageur> findByOrderByDateNaissanceDesc();
			List<Nageur> findTopByOrderByIdDesc();
			List<Nageur> findByOrderByIdDesc();
			
			@Query(value = "SELECT * FROM nageur WHERE licence = ?1 ORDER BY id DESC LIMIT 1" , nativeQuery = true)
			Nageur findNageurByLicence(String license);
			
			@Query(value = "SELECT * FROM nageur WHERE  disabeled= ?1" , nativeQuery = true)
			List<Nageur> findAll(boolean disabeled);
			

}
