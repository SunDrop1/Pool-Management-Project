package com.example.demo.model.nageur;

import java.beans.Transient;
import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import com.fasterxml.jackson.annotation.JsonFormat;

import lombok.Getter;
import lombok.Setter;


@Entity
@Table(name ="nageur")
public class Nageur {
	
	@Id
    @GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;
	private String nom;
	private String prenom;
	private String sexe;
	@Temporal(value=TemporalType.DATE)
    @JsonFormat(pattern="MM-dd-yyyy")
	private Date dateNaissance;
	private String nationalite;
	private String civilite;
	private String lieu_de_naissance;
	private String responsable;
	private String adresse;
	private String supplement_adresse;
	private String zip;
	private String localite;
	private String telephone;
	private String fax;
	private String federation;
	private String club;
	@Temporal(value=TemporalType.DATE)
    @JsonFormat(pattern="MM-dd-yyyy")
	private Date obliteration;
	private String licence;
	private String type_licence1;
	private String type_licence2;
	private String type_licence3;
	@Temporal(value=TemporalType.DATE)
    @JsonFormat(pattern="MM-dd-yyyy")
	private Date depot;
	private boolean sportive=false;
	private boolean synchro=false;
	private boolean water_polo=false;
	private boolean plongeon=false;
	private boolean dirigeant=false;
	private boolean maitre=false;
	private boolean eau_libre=false;
	private String medecin;
	@Temporal(value=TemporalType.DATE)
    @JsonFormat(pattern="MM-dd-yyyy")
	private Date derniere_visite;
	private String observation;	
	private boolean disabeled=false;
	
	
	
	
	public boolean isDisabeled() {
		return disabeled;
	}

	public void setDisabeled(boolean disabeled) {
		this.disabeled = disabeled;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getNom() {
		return nom;
	}

	public void setNom(String nom) {
		this.nom = nom;
	}

	public String getPrenom() {
		return prenom;
	}

	public void setPrenom(String prenom) {
		this.prenom = prenom;
	}

	public String getSexe() {
		return sexe;
	}

	public void setSexe(String sexe) {
		this.sexe = sexe;
	}

	public Date getDateNaissance() {
		return dateNaissance;
	}

	public void setDateNaissance(Date dateNaissance) {
		this.dateNaissance = dateNaissance;
	}

	public String getNationalite() {
		return nationalite;
	}

	public void setNationalite(String nationalite) {
		this.nationalite = nationalite;
	}

	public String getCivilite() {
		return civilite;
	}

	public void setCivilite(String civilite) {
		this.civilite = civilite;
	}

	public String getLieu_de_naissance() {
		return lieu_de_naissance;
	}

	public void setLieu_de_naissance(String lieu_de_naissance) {
		this.lieu_de_naissance = lieu_de_naissance;
	}

	public String getResponsable() {
		return responsable;
	}

	public void setResponsable(String responsable) {
		this.responsable = responsable;
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

	public String getLocalite() {
		return localite;
	}

	public void setLocalite(String localite) {
		this.localite = localite;
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

	public String getFederation() {
		return federation;
	}

	public void setFederation(String federation) {
		this.federation = federation;
	}

	public String getClub() {
		return club;
	}

	public void setClub(String club) {
		this.club = club;
	}

	public Date getObliteration() {
		return obliteration;
	}

	public void setObliteration(Date obliteration) {
		this.obliteration = obliteration;
	}

	public String getLicence() {
		return licence;
	}

	public void setLicence(String licence) {
		this.licence = licence;
	}

	public String getType_licence1() {
		return type_licence1;
	}

	public void setType_licence1(String type_licence1) {
		this.type_licence1 = type_licence1;
	}

	public String getType_licence2() {
		return type_licence2;
	}

	public void setType_licence2(String type_licence2) {
		this.type_licence2 = type_licence2;
	}

	public String getType_licence3() {
		return type_licence3;
	}

	public void setType_licence3(String type_licence3) {
		this.type_licence3 = type_licence3;
	}

	public Date getDepot() {
		return depot;
	}

	public void setDepot(Date depot) {
		this.depot = depot;
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

	public boolean isDirigeant() {
		return dirigeant;
	}

	public void setDirigeant(boolean dirigeant) {
		this.dirigeant = dirigeant;
	}

	public boolean isMaitre() {
		return maitre;
	}

	public void setMaitre(boolean maitre) {
		this.maitre = maitre;
	}

	public boolean isEau_libre() {
		return eau_libre;
	}

	public void setEau_libre(boolean eau_libre) {
		this.eau_libre = eau_libre;
	}

	public String getMedecin() {
		return medecin;
	}

	public void setMedecin(String medecin) {
		this.medecin = medecin;
	}

	public Date getDerniere_visite() {
		return derniere_visite;
	}

	public void setDerniere_visite(Date derniere_visite) {
		this.derniere_visite = derniere_visite;
	}

	public String getObservation() {
		return observation;
	}

	public void setObservation(String observation) {
		this.observation = observation;
	}

	public Nageur() {}

	public Nageur(String nom, String prenom, String sexe, Date date_naissance, String nationalite, String civilite,
			String lieu_de_naissance, String responsable, String adresse, String supplement_adresse, String zip,
			String localite, String telephone, String fax, String federation, String club, Date obliteration,
			String licence, String type_licence1, String type_licence2, String type_licence3, Date depot,
			boolean sportive, boolean synchro, boolean water_polo, boolean plongeon, boolean dirigeant, boolean maitre,
			boolean eau_libre, String medecin, Date derniere_visite, String observation) {
		super();
		this.nom = nom;
		
		this.prenom = prenom;
		this.sexe = sexe;
		this.dateNaissance = date_naissance;
		this.nationalite = nationalite;
		this.civilite = civilite;
		this.lieu_de_naissance = lieu_de_naissance;
		this.responsable = responsable;
		this.adresse = adresse;
		this.supplement_adresse = supplement_adresse;
		this.zip = zip;
		this.localite = localite;
		this.telephone = telephone;
		this.fax = fax;
		this.federation = federation;
		this.club = club;
		this.obliteration = obliteration;
		this.licence = licence;
		this.type_licence1 = type_licence1;
		this.type_licence2 = type_licence2;
		this.type_licence3 = type_licence3;
		this.depot = depot;
		this.sportive = sportive;
		this.synchro = synchro;
		this.water_polo = water_polo;
		this.plongeon = plongeon;
		this.dirigeant = dirigeant;
		this.maitre = maitre;
		this.eau_libre = eau_libre;
		this.medecin = medecin;
		this.derniere_visite = derniere_visite;
		this.observation = observation;
	}
	
	
}
