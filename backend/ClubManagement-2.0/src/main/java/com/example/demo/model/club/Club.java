package com.example.demo.model.club;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import lombok.Getter;
import lombok.Setter;


@Entity
@Getter
@Setter
public class Club {
	
	
	@Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String countries;
    private String inter_region;
    private String region;
    private String departement;
    @Column(unique=true)
    private String code;
    private String name;
    private String email;
    private boolean summer_club = false;
    private boolean sportive= false;
    private boolean synchro = false;
    private boolean water_polo = false;
    private boolean plongeon = false;
    private boolean eau_libre = false;
    private String adresse;
    private String supplement_adresse;
    private String zip;
    private String local;
    private String telephone;
    private String fax;
    
    public Club() {}
    
	public Club(String countries, String inter_region, String region, String departement, String code, String name,
			String email, boolean summer_club, boolean sportive, boolean synchro, boolean water_polo, boolean plongeon,
			boolean eau_libre, String adresse, String supplement_adresse, String zip, String local, String telephone,
			String fax) {
		super();
		this.countries = countries;
		this.inter_region = inter_region;
		this.region = region;
		this.departement = departement;
		this.code = code;
		this.name = name;
		this.email = email;
		this.summer_club = summer_club;
		this.sportive = sportive;
		this.synchro = synchro;
		this.water_polo = water_polo;
		this.plongeon = plongeon;
		this.eau_libre = eau_libre;
		this.adresse = adresse;
		this.supplement_adresse = supplement_adresse;
		this.zip = zip;
		this.local = local;
		this.telephone = telephone;
		this.fax = fax;
	}
}
