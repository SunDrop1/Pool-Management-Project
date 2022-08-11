package com.example.demo.repo;


import org.springframework.stereotype.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.example.demo.model.club.Club;
import com.example.demo.model.competition.Competition;
import com.example.demo.model.user.email.ConfirmationToken;

@Repository
public interface CompetitionRepo extends JpaRepository<Competition,Long>{
		
	
		Competition findCompetitionById(long id);
		
		@Query(value = "SELECT * FROM competition WHERE  disabeled= ?1" , nativeQuery = true)
		List<Competition> findAll(boolean activity);
}
