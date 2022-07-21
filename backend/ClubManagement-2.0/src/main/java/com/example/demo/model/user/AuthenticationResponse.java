package com.example.demo.model.user;

public class AuthenticationResponse {
	String token;

	public AuthenticationResponse() {}
	
	public AuthenticationResponse(String token) {
		this.token = token;
	}

	public String getToken() {
		return token;
	}

	public void setToken(String token) {
		this.token = token;
	}
}
