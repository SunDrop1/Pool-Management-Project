package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.competition.Competition;
import com.example.demo.model.nageur.Nageur;
import com.example.demo.repo.CompetitionRepo;

@Service
public class CompetitionService {
	
	@Autowired
	CompetitionRepo competitionRepo;
	
	//Create Competition
	public Competition addCompetition(Competition competition) {
		return competitionRepo.save(competition);
	}
	
	//Update Competition
	public Competition updateCompetition(Competition competition) {
		return competitionRepo.save(competition);
	}
	
	
	//Delete Competition
	public Competition deletCompetition(long id) {
		Competition competition = competitionRepo.findCompetitionById(id);
		competition.setDisabeled(true);
		return competitionRepo.save(competition);
	}
	
	//Get All Competition
	public List<Competition> getAllCompetition(Boolean activity) {
		return competitionRepo.findAll(activity);
	}
	
	
	//Get Competition by Id
	public Competition getCompetition(long id) {
		return competitionRepo.findCompetitionById(id);
	}
	
	
	
	
}
