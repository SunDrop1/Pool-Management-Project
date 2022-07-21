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
		public String deleteNageur(long id) {	
			nageurRepository.deleteById(id);
			return "nageur was deleted";
		}
		
		//GENERATE LICENSE
		String generateLicense(Nageur nageur) {
			
			List<Nageur> nageurs = nageurRepository.findByOrderByDateNaissanceDesc();
			
			if(nageurs.isEmpty()) {
				int _last2Digit = nageur.getDateNaissance().getYear();
				return Integer.toString(_last2Digit)+ "001";
			}else {
				String license = nageurs.get(0).getLicence();
				int newLicense = Integer.parseInt(license);
				newLicense++;
				return Integer.toString(newLicense);
			}

		}
		
		
}	
