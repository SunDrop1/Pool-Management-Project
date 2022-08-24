package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.competition.Epreuve;
import com.example.demo.repo.EpreuveRepository;

@Service
public class EpreuveService {
	
	
	@Autowired
	EpreuveRepository epreuveRepository;
	
	
	
	
	//add 
	public Epreuve addEpreuve(Epreuve e) {
		return this.epreuveRepository.save(e);
	}
	
	
	//update
	public Epreuve updateEpreuve(Epreuve e) {
		return this.epreuveRepository.save(e);
	}
	
	
	//delete
	public void deleteEpreuve(long id) {
		Epreuve epreuve = this.getEpreuveById(id);
		epreuve.setDisabeled(true);
		this.epreuveRepository.save(epreuve);
	}
	
	
	//get by id
	public Epreuve getEpreuveById(long id) {
		return epreuveRepository.findEpreuveById(id);
	}
	
	
	//get all 
	public List<Epreuve> getAllEpreuve(boolean activtiy){
		return epreuveRepository.findAll(activtiy);	
		}
	
	
	
}
