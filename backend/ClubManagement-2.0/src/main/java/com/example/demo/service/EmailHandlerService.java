package com.example.demo.service;

import java.time.LocalDateTime;
import java.util.UUID;

import org.springframework.stereotype.Service;

import com.example.demo.model.user.User;
import com.example.demo.model.user.email.ConfirmationToken;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class EmailHandlerService {
	 private final ConfirmationTokenService confirmationTokenService;
		
		
	 public String signUpUser() {
	      


	        String token = UUID.randomUUID().toString();

	        ConfirmationToken confirmationToken = new ConfirmationToken(
	                token,
	                LocalDateTime.now(),
	                LocalDateTime.now().plusMinutes(15)
	               
	        );

	        confirmationTokenService.saveConfrimationToken(
	                confirmationToken);

//	        TODO: SEND EMAIL

	        return token;
	    }

}
