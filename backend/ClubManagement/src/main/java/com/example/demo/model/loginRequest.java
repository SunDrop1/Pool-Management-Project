package com.example.demo.model;

import javax.persistence.EnumType;
import javax.persistence.Enumerated;

import com.example.demo.appuser.AppUserRole;
import com.example.demo.registration.RegistrationRequest;

import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.ToString;

@Getter
@AllArgsConstructor
@EqualsAndHashCode
@ToString
public class loginRequest {
	private final String firstName;
	private final String lastName;
	private final String email;
	private final String password;
	@Enumerated(EnumType.STRING)
	private AppUserRole appUserRole;

	public String login(loginRequest request) {
		return "works";
	}
	
}
