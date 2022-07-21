package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.nageur.Nageur;
import com.example.demo.service.NageurService;

@RestController
@RequestMapping("/nageur")
@CrossOrigin("*")
public class NageurController {

	@Autowired
	NageurService nageurService;
	
		//CREATE nageur
		@RequestMapping(name = "/", method = RequestMethod.POST)
		public Nageur createnageur(@RequestBody Nageur nageur) throws Exception {
			return this.nageurService.createNageur(nageur);
		}
		
		//GET nageur by ID
		@GetMapping("/{id}")
		public Nageur getnageur(@PathVariable("id") Long id) {
			return this.nageurService.getNageur(id);
		}
		
		//UPDATE nageur by ID
		@PutMapping("/update_nageur")
		public Nageur updateUser(@RequestBody Nageur nageur) {
			return nageurService.updateNageur(nageur);
		}
		
		//DELETE nageur by ID
		@DeleteMapping("/{Id}")
		public void deleteUser(@PathVariable("Id") Long id) {
				this.nageurService.deleteNageur(id);
			}
			
		//Get all nageurs
		@GetMapping("/nageurs/")
		public List<Nageur> getAlnageurs(){
		return this.nageurService.getAllNageur();
		}
}
