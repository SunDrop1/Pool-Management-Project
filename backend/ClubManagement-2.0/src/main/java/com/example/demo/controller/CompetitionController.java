package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;


import com.example.demo.model.competition.Competition;
import com.example.demo.service.CompetitionService;

@RestController
@RequestMapping("/competition")
@CrossOrigin("*")
public class CompetitionController {

	@Autowired
	CompetitionService competitionService;
	
	//Add Competition
	@RequestMapping(name = "/", method = RequestMethod.POST)
	public Competition createCompetition(@RequestBody Competition competition) throws Exception {
		return this.competitionService.addCompetition(competition);
	}
	
	
	//Update Competition
	@PutMapping("/update_competition")
	public Competition updateCompetition(@RequestBody Competition competition) {
		return competitionService.updateCompetition(competition);
	}
	
	
	//Delete Competition
	@DeleteMapping("/{Id}")
	public Competition deletCompetition(@PathVariable("Id") Long id) {
			return this.competitionService.deletCompetition(id);	
		}
	
	//Get Competition By id
	@GetMapping("/{id}")
	public Competition getClub(@PathVariable("id") Long id) {
		return this.competitionService.getCompetition(id);
	}
	
	//Get All Competition
	@GetMapping("/competitions/{activity}")
	public List<Competition> getAllCompetitions(@PathVariable("activity") boolean activty){
		return this.competitionService.getAllCompetition(activty);
	}
	
}
