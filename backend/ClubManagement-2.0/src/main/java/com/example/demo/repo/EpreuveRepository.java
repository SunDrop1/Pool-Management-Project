package com.example.demo.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.demo.model.competition.Epreuve;


@Repository
public interface EpreuveRepository  extends JpaRepository<Epreuve ,Long>{
		
	
		@Query(value = "SELECT * FROM epreuve WHERE  disabeled= ?1" , nativeQuery = true)
		List<Epreuve> findAll(boolean activity);
		
		Epreuve findEpreuveById(long id);
}
