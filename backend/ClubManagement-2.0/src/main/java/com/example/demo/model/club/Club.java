package com.example.demo.model.club;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import lombok.Getter;
import lombok.Setter;


@Entity
public class Club {
	
	
	@Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String countries;
    private String inter_region;
    public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getCountries() {
		return countries;
	}

	public void setCountries(String countries) {
		this.countries = countries;
	}

	public String getInter_region() {
		return inter_region;
	}

	public void setInter_region(String inter_region) {
		this.inter_region = inter_region;
	}

	public String getRegion() {
		return region;
	}

	public void setRegion(String region) {
		this.region = region;
	}

	public String getDepartement() {
		return departement;
	}

	public void setDepartement(String departement) {
		this.departement = departement;
	}

	public String getCode() {
		return code;
	}

	public void setCode(String code) {
		this.code = code;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public boolean isSummer_club() {
		return summer_club;
	}

	public void setSummer_club(boolean summer_club) {
		this.summer_club = summer_club;
	}

	public boolean isSportive() {
		return sportive;
	}

	public void setSportive(boolean sportive) {
		this.sportive = sportive;
	}

	public boolean isSynchro() {
		return synchro;
	}

	public void setSynchro(boolean synchro) {
		this.synchro = synchro;
	}

	public boolean isWater_polo() {
		return water_polo;
	}

	public void setWater_polo(boolean water_polo) {
		this.water_polo = water_polo;
	}

	public boolean isPlongeon() {
		return plongeon;
	}

	public void setPlongeon(boolean plongeon) {
		this.plongeon = plongeon;
	}

	public boolean isEau_libre() {
		return eau_libre;
	}

	public void setEau_libre(boolean eau_libre) {
		this.eau_libre = eau_libre;
	}

	public String getAdresse() {
		return adresse;
	}

	public void setAdresse(String adresse) {
		this.adresse = adresse;
	}

	public String getSupplement_adresse() {
		return supplement_adresse;
	}

	public void setSupplement_adresse(String supplement_adresse) {
		this.supplement_adresse = supplement_adresse;
	}

	public String getZip() {
		return zip;
	}

	public void setZip(String zip) {
		this.zip = zip;
	}

	public String getLocal() {
		return local;
	}

	public void setLocal(String local) {
		this.local = local;
	}

	public String getTelephone() {
		return telephone;
	}

	public void setTelephone(String telephone) {
		this.telephone = telephone;
	}

	public String getFax() {
		return fax;
	}

	public void setFax(String fax) {
		this.fax = fax;
	}

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
