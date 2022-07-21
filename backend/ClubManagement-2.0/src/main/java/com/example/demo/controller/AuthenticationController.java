package com.example.demo.controller;
import java.security.Principal;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.config.JwtUtil;
import com.example.demo.model.user.AuthenticationRequest;
import com.example.demo.model.user.AuthenticationResponse;
import com.example.demo.model.user.User;
import com.example.demo.service.MyUserDetailsService;

@RestController
@CrossOrigin(origins = "*")
public class AuthenticationController {
	@Autowired
	private AuthenticationManager authenticationManager;
	
	@Autowired
	private MyUserDetailsService userDetailsService;
	
	@Autowired
	private JwtUtil jwtTokenUtil;
	
	//generate token
		@RequestMapping(value ="/authenticate", method = RequestMethod.POST)
		public ResponseEntity<?> createAuthenticationToken(@RequestBody AuthenticationRequest authenticationRequest) throws Exception{
			try {
				authenticationManager.authenticate(
						new UsernamePasswordAuthenticationToken(authenticationRequest.getUsername(),authenticationRequest.getPassword())
				);
			}catch(BadCredentialsException e) {
				throw new Exception("Incorrect username or password", e);
			}
			final UserDetails userDetails = userDetailsService.loadUserByUsername(authenticationRequest.getUsername());
			
			final String jwt = jwtTokenUtil.generateToken(userDetails);
			
			return ResponseEntity.ok(new AuthenticationResponse(jwt));
			
		}
		
	/////// getting current user details 
		@GetMapping("/current-user")
		public User getCurrentUser(Principal principal) {
			if(principal != null) {
				System.out.println("principal : " +principal.getName());
				return ((User)this.userDetailsService.loadUserByUsername(principal.getName()));
			}
			else {
				 System.out.print("nuts");
		            return null;
			}
		}
		
		@RequestMapping(value = "/con-user", method = RequestMethod.GET)
	    @ResponseBody
	    public String currentUserName(Authentication authentication) {
	        return authentication.getName();
	    }
		
		
	
}
