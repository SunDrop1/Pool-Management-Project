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
public class Epreuve {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	long id;
	String nage;
	String classement;
	
	@Temporal(value=TemporalType.DATE)
    @JsonFormat(pattern="MM-dd-yyyy")
	Date date;
	String finale;
	int no;
	
	int nb;
	//qualite par categorie final
	int qualified_finales;
	//premier de chaque 1/2 final
	int first_finales;
	//qualite par categorie 1/2 fianle
	int qualified_finales12;
	//premier de chaque 1/4 finale
	int first_finales12;
	//qualite par categorie 1/4
	int qualified_finales14;
	
	
	boolean disabeled = false;
	
	
	public Epreuve() {}


	public Epreuve(String nage, String classement, Date date, String finale, int no, int nb, int qualified_finales,
			int first_finales, int qualified_finales12, int first_finales12, int qualified_finales14,
			boolean disabeled) {
		super();
		this.nage = nage;
		this.classement = classement;
		this.date = date;
		this.finale = finale;
		this.no = no;
		this.nb = nb;
		this.qualified_finales = qualified_finales;
		this.first_finales = first_finales;
		this.qualified_finales12 = qualified_finales12;
		this.first_finales12 = first_finales12;
		this.qualified_finales14 = qualified_finales14;
		this.disabeled = disabeled;
	}

	


	
	

	
	
	
}
