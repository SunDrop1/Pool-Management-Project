package com.example.demo.model.user.email;


import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.ToString;


@Getter
@AllArgsConstructor
@EqualsAndHashCode
@ToString
public class RegistrationRequest {
	private final String password;
	private final String email;
	
	public String register(RegistrationRequest request) {
		return "works";
	}
	
	

}
