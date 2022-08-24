package com.example.demo.model.competition;


import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
public class Participant {
		
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	Long id;
	
	String clubName;
	String nageur;
	int equipe;
	String baniere;
	@OneToMany(targetEntity=EngagementDetails.class, cascade=CascadeType.ALL, fetch=FetchType.EAGER)
	List<EngagementDetails> engagementDetails;
	boolean disabled=false;
	public Participant() {}
	public Participant(Long id, String clubName, String nageur, int equipe, String baniere,
			List<EngagementDetails> engagementDetails, boolean disabled) {
		super();
		this.clubName = clubName;
		this.nageur = nageur;
		this.equipe = equipe;
		this.baniere = baniere;
		this.engagementDetails = engagementDetails;
		this.disabled = disabled;
	}
	
	
	
	

	
	
	
}
