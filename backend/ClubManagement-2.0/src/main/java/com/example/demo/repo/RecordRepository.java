package com.example.demo.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.example.demo.model.competition.Record;


@Repository
public interface RecordRepository extends JpaRepository<Record ,Long>{
		
	 Record findRecordByType(String type);
	
}
