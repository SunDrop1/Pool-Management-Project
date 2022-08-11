package com.example.demo.model.competition;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import com.fasterxml.jackson.annotation.JsonFormat;

import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
public class Competition {
		
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	Long id;
	
	String competition;
	String code;
	boolean team;
	String cotation;
	
	@Temporal(value=TemporalType.DATE)
    @JsonFormat(pattern="MM-dd-yyyy")
	Date dateDebut;
	
	@Temporal(value=TemporalType.DATE)
    @JsonFormat(pattern="MM-dd-yyyy")
	Date dateFin;
	String place;
	int couloirs;
	String deferation;
	String bassinGeneral;
	String bassinEngagement;
	String  federation;

	boolean qualificaition;
	boolean reference;
	boolean animation;
	@Temporal(value=TemporalType.DATE)
    @JsonFormat(pattern="MM-dd-yyyy")
	Date periodeValideDebut;
	@Temporal(value=TemporalType.DATE)
    @JsonFormat(pattern="MM-dd-yyyy")
	Date periodeValideFin;
	boolean recordForAllCategories;
	boolean recordByCategory;
	boolean theTwo;
	boolean worldWide;
	boolean africa;
	boolean morocco;
	boolean meeting;
	boolean disabeled=false;
	
	
	public Competition() {}


	public Competition(String competition, String code, Boolean team, String cotation, Date dateDebut, Date dateFin,
			String place, int couloirs, String deferation, String bassinGeneral, String bassinEngagement,
			String federation, boolean qualificaition, boolean reference, boolean animation, Date periodeValideDebut,
			Date periodeValideFin, boolean recordForAllCategories, boolean recordByCategory, boolean both,
			boolean worldWide, boolean africa, boolean morocco, boolean meeting, boolean disabeled) {
		this.competition = competition;
		this.code = code;
		this.team = team;
		this.cotation = cotation;
		this.dateDebut = dateDebut;
		this.dateFin = dateFin;
		this.place = place;
		this.couloirs = couloirs;
		this.deferation = deferation;
		this.bassinGeneral = bassinGeneral;
		this.bassinEngagement = bassinEngagement;
		this.federation = federation;
		this.qualificaition = qualificaition;
		this.reference = reference;
		this.animation = animation;
		this.periodeValideDebut = periodeValideDebut;
		this.periodeValideFin = periodeValideFin;
		this.recordForAllCategories = recordForAllCategories;
		this.recordByCategory = recordByCategory;
		this.theTwo = both;
		this.worldWide = worldWide;
		this.africa = africa;
		this.morocco = morocco;
		this.meeting = meeting;
		this.disabeled = disabeled;
	}

	
	
	
}
