package com.example.demo.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.loginRequest;
import com.example.demo.registration.RegistrationRequest;
import com.example.demo.sevice.RegistrationService;

import lombok.AllArgsConstructor;


@RestController
@RequestMapping(path = "api/v1/registration")
@AllArgsConstructor
public class AccountManagerController {
	private final RegistrationService registrationService;
	
	@PostMapping
	public String register(@RequestBody RegistrationRequest request) {
		return registrationService.register(request);
	}
	

    @GetMapping(path = "confirm")
    public String confirm(@RequestParam("token") String token) {
        return registrationService.confirmToken(token);
    }
    
    @PostMapping(path = "login")
	public String antheticate(@RequestBody loginRequest request) {
		return registrationService.login(request);
	}
    
    
    
    
}

