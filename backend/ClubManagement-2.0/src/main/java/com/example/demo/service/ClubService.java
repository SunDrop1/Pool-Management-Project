package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.club.Club;
import com.example.demo.repo.ClubRepository;



@Service
public class ClubService {
	
	@Autowired
	ClubRepository clubRepository;
	
	
	
		// get club by id 
		public Club findClubById(long id) {
		return clubRepository.findById(id);
		}
	
		//UPDATE BY ID
		public Club updateClub(Club clubDetails) {
				return clubRepository.save(clubDetails);
		}	 
		
		
		
		//CREATE CLUB 
		public Club createClub(Club club) {
			return clubRepository.save(club);
		}
		
		
		//DELETE BY ID
		public String deleteClub(long id) {
			if(clubRepository.findById(id) != null)		
			{
				clubRepository.deleteById(id);
				return "club "+id+" deleted !!";
			}
			return "club " + id + "was not found";
		}
		
		public List<Club> getAllClubs(){
			return this.clubRepository.findAll();
		}
		
	
}
