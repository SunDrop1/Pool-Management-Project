package com.example.demo.controller;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.club.Club;
import com.example.demo.model.user.Role;
import com.example.demo.model.user.User;
import com.example.demo.model.user.UserRole;
import com.example.demo.service.ClubService;

@RestController
@RequestMapping("/club")
@CrossOrigin("*")
public class ClubController {
	
	@Autowired
	ClubService clubService;
	
	
	//GET Club by ID
	@GetMapping("/{id}")
	public Club getClub(@PathVariable("id") Long id) {
		return this.clubService.findClubById(id);
	}
	
	//CREATE Club
	@RequestMapping(name = "/", method = RequestMethod.POST)
	public Club createUser(@RequestBody Club club) throws Exception {
		return this.clubService.createClub(club);
	}
	
	
	//UPDATE Club by ID
	@PutMapping("/update_club")
	public Club updateUser(@RequestBody Club club) {
		return clubService.updateClub(club);
	}
	//DELETE Club by ID
	@DeleteMapping("/{Id}")
	public void deleteUser(@PathVariable("Id") Long id) {
			this.clubService.deleteClub(id);	
		}
		
	//Get all clubs
	@GetMapping("/clubs/")
	public List<Club> getAlClubs(){
		return this.clubService.getAllClubs();
	}
		
	
}
