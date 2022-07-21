package com.example.demo.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.model.nageur.Nageur;



@Repository
public interface NageurRepository extends JpaRepository<Nageur,Long>{
			
			Nageur findNageurByLicence(String licence);
			Nageur findNageurById(long id);
			List<Nageur> findByOrderByDateNaissanceDesc();
		


}
