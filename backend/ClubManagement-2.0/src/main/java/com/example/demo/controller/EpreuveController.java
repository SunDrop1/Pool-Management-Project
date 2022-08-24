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
import com.example.demo.model.competition.Epreuve;
import com.example.demo.service.EpreuveService;

@RestController
@RequestMapping("/epreuve")
@CrossOrigin("*")
public class EpreuveController {
		
		@Autowired
		EpreuveService epreuveService;
		
		//add
		@RequestMapping(name = "/", method = RequestMethod.POST)
		public Epreuve addEpreuve(@RequestBody Epreuve e) throws Exception {
			return this.epreuveService.addEpreuve(e);
		}
		
		//update
		@PutMapping("/update_epreuve")
		public Epreuve updatEpreuve(@RequestBody Epreuve e) throws Exception {
			return this.epreuveService.updateEpreuve(e);
		}
		//delete
		@DeleteMapping("/{id}")
		public void  deleteEpreuve(@PathVariable("id") long id) {
			this.epreuveService.deleteEpreuve(id);
		}
		
		//get by id
		@GetMapping("/{id}")
		public Epreuve getEpreuve(@PathVariable("id") long id) {
			return this.epreuveService.getEpreuveById(id);
		}
		
		// get all
		@GetMapping("/all_epreuve/{activity}")
		public List<Epreuve> getAllEpreuves(@PathVariable("activity") boolean activity){
			return this.epreuveService.getAllEpreuve(activity);		
		}
		
}
