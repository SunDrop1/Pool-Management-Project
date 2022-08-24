package com.example.demo.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.demo.model.competition.Epreuve;
import com.example.demo.model.competition.Participant;

@Repository
public interface ParticipantRepository extends JpaRepository<Participant ,Long> {
	@Query(value = "SELECT * FROM participant WHERE  disabled= ?1" , nativeQuery = true)
	List<Participant> findAll(boolean activity);
	
	
	Participant findParticipantById(long id);
	
	
}
