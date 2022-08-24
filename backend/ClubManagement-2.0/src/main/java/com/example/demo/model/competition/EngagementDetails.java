package com.example.demo.model.competition;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import com.fasterxml.jackson.annotation.JsonFormat;

import lombok.Setter;

import lombok.Getter;


@Getter
@Setter
@Entity
public class EngagementDetails {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	Long id;
	
	boolean horsConcours;
	String epreuve;
	String time;
	String bassin;
	@Temporal(value=TemporalType.DATE)
    @JsonFormat(pattern="MM-dd-yyyy")
	Date date;
	String place;
	
	@ManyToOne
	Participant participant;
	
	public EngagementDetails() {
		
	}

	public EngagementDetails(boolean horsConcours, String epreuve, String time, String bassin, Date date, String place,
			Participant participant) {
		super();
		this.horsConcours = horsConcours;
		this.epreuve = epreuve;
		this.time = time;
		this.bassin = bassin;
		this.date = date;
		this.place = place;
		this.participant = participant;
	}

	
	
}
