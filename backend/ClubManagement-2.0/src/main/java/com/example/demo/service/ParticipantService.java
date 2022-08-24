package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.competition.Participant;
import com.example.demo.repo.ParticipantRepository;

@Service
public class ParticipantService {
		
	
	
		@Autowired
		ParticipantRepository participantRepository;
		
		
		//add
		public Participant addParticipant(Participant participant) {
			return participantRepository.save(participant);
		}
		
		
		//update
		public Participant updateParticipant(Participant participant) {
			return participantRepository.save(participant);
		}
		
		
		//delete
		public Participant deleteParticipant(long id) {
			Participant participant = participantRepository.findParticipantById(id);
			participant.setDisabled(true);
			return participantRepository.save(participant);
		}
		
		
		//get by id
		public Participant getParticipantById(long id) {
			return participantRepository.findParticipantById(id);
		}
		
		
		
		//get all
		public List<Participant> getAllParticipants(boolean activity){
			return participantRepository.findAll(activity);
		}
		
		
}
