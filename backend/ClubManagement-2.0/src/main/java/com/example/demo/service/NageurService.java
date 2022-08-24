package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.nageur.Nageur;
import com.example.demo.model.user.User;
import com.example.demo.repo.NageurRepository;


@Service
public class NageurService {
		
		@Autowired
		NageurRepository nageurRepository;
		
		
		//Create Nageur
		public Nageur createNageur(Nageur nageur) {
			nageur.setLicence(this.generateLicense(nageur));
			return nageurRepository.save(nageur);
		}
		
		// Transfert Nageur
		public Nageur transfertNageur(Nageur nageur) {
			return nageurRepository.save(nageur);
		}
		
		
		// GET NAGEUR WITH LATEST ID
		public List<Nageur> getLastNageur(){
			return nageurRepository.findTopByOrderByIdDesc();
		}
		
		//GET NAGEUR BY ID
		public Nageur getNageur(long id) {
			return nageurRepository.findNageurById(id);
		}
	
		//GET NAGEUR BY LICENSE
		public Nageur getNageurByLicense(String license) {
			return nageurRepository.findNageurByLicence(license);
		}
		
		
		//GET ALL NAGEUR 
		public List<Nageur> getAllNageur() {
			return nageurRepository.findAll();
		}
		
		//UPDATE NAGEUR
		public Nageur updateNageur(Nageur nageurDetails) {
			return nageurRepository.save(nageurDetails);
		}
		
		//DELETE NAGEUR
		public Nageur deleteNageur(long id) {	
			Nageur nageur = nageurRepository.findNageurById(id);
			nageur.setDisabeled(true);
			
			return this.nageurRepository.save(nageur);
		}
		
		//
		
		//GENERATE LICENSE
		String generateLicense(Nageur nageur) {
			
			List<Nageur> nageurs = nageurRepository.findByOrderByIdDesc();
		
			for(Nageur n : nageurs) {
				if(n.getDateNaissance().getYear() == nageur.getDateNaissance().getYear())
				{
					System.out.println("---------"+n.getId());
					String license = n.getLicence();
			       
			         String s1,s3;
			         s3=license.substring(0,2);
			        int i=Integer.parseInt(license);
			        int i1=Integer.parseInt(s3); 
			        System.out.println(i);
			        if(i1<10)
			        {
			        	s1="0";
			            s1=s1+String.valueOf(++i);
			        }

			        else{
			            s1=String.valueOf(++i);
			    
	 			        }
			        return s1;
				}
			
			}
			int year = nageur.getDateNaissance().getYear()+1900;
			String last2Str = String.valueOf(year).substring(2);
			return last2Str+ "001";
		}
		// GET NAGEUR BY ACTIVITY
		public List<Nageur> getNageurByActivity(boolean disabeled){
			return this.nageurRepository.findAll(disabeled);
		}
		
		
		// get nageur by club
		public List<Nageur> getNageurByClub(String club){
			return this.nageurRepository.findNageurByClub(club);
		}
		
		
}
		
			
