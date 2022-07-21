package com.example.demo.controller;

import java.util.HashSet;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.helper.UserFoundException;
import com.example.demo.helper.UserNotFoundException;
import com.example.demo.model.User;
import com.example.demo.model.user.Role;
import com.example.demo.model.user.UserRole;
import com.example.demo.service.interfaces.UserService;

@RestController
@RequestMapping("/user")
@CrossOrigin("*")
public class UserController {

	
	@Autowired
	private UserService userService;
	
	
	//creating user
	@PostMapping("/")
	public User createUser(@RequestBody User user) throws Exception {
		
		Set<UserRole> roles = new HashSet<>();
		Role role = new Role();
		role.setRoleId(45L);
		role.setRoleName("ADMIN");
		
		UserRole userRole = new UserRole();
		userRole.setUser(user);
		userRole.setRole(role);
		roles.add(userRole);
		
		return this.userService.createUser(user, roles);
		
	}
	
	

	//getting user by username
	@GetMapping("/{username}")
	public User getUser(@PathVariable("username") String username) {
		return this.userService.getUser(username);
	}
	
	
	//deleteing user by Id
		@DeleteMapping("/{userId}")
		public void deleteUser(@PathVariable("userId") Long userId) {
			this.userService.deleteUser(userId);
		}
		
		@ExceptionHandler(UserFoundException.class)
		public ResponseEntity<?> exceptionHandler(UserNotFoundException ex){
			return new ResponseEntity<>("Username already exist", HttpStatus.ALREADY_REPORTED);
		}
}
