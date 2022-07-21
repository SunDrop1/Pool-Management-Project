package com.example.demo.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.model.club.Club;

@Repository
public interface ClubRepository extends JpaRepository<Club,Long>{
		Club findById(long id);
}
