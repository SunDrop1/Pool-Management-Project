package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.competition.Participant;
import com.example.demo.service.ParticipantService;

@RestController
@RequestMapping("/participant")
@CrossOrigin("*")
public class ParticipantController {
	
	@Autowired
	ParticipantService participantService;
	
	
	
	//add
	@RequestMapping(name = "/", method = RequestMethod.POST)
	public Participant addParticipant(@RequestBody Participant p) throws Exception {
		return this.participantService.addParticipant(p);
	}
	
	//update
	@PutMapping("/update_Participant")
	public Participant updatParticipant(@RequestBody Participant p) throws Exception {
		return this.participantService.updateParticipant(p);
	}
	//delete
	@DeleteMapping("/{id}")
	public Participant  deleteParticipant(@PathVariable("id") long id) {
		return this.participantService.deleteParticipant(id);
	}
	
	//get by id
	@GetMapping("/{id}")
	public Participant getParticipant(@PathVariable("id") long id) {
		return this.participantService.getParticipantById(id);
	}
	
	// get all
	@GetMapping("/all_Participant/{activity}")
	public List<Participant> getAllParticipants(@PathVariable("activity") boolean activity){
		return this.participantService.getAllParticipants(activity);
	}
}
