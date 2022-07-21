package com.example.demo.sevice;

import java.time.LocalDateTime;
import java.util.Optional;
import java.util.UUID;

import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.example.demo.appuser.AppUser;
import com.example.demo.registration.token.ConfirmationToken;
import com.example.demo.repository.UserRepository;
import com.example.demo.service.ConfirmationTokenService;

import lombok.AllArgsConstructor;


@Service
@AllArgsConstructor
public class UserService implements UserDetailsService{

	private final static String USER_NOT_FOUND_MSG = "user with email %s not found";
	
	private final UserRepository userRepo;
	private final BCryptPasswordEncoder bCryptPasswordEncoder;
	private final ConfirmationTokenService confirmationTokenService;
	
	@Override
	public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
		
		return userRepo.findByEmail(email).orElseThrow(() -> new UsernameNotFoundException(String.format(USER_NOT_FOUND_MSG, email)));
	}
	
	public String signUpUser(AppUser appUser) {
		boolean userExists = userRepo.findByEmail(appUser.getEmail())
				.isPresent();
		
		if(userExists) {
			throw new IllegalStateException("email already taken");	
		}
		
		String encodedPassword = bCryptPasswordEncoder.encode(appUser.getPassword());
		
		appUser.setPassword(encodedPassword);
		
		userRepo.save(appUser);
		String token = UUID.randomUUID().toString();
		// TODO: Send confirmation token
		ConfirmationToken confirmationToken = new ConfirmationToken(
				token,
				LocalDateTime.now(),
				LocalDateTime.now().plusMinutes(15),
				appUser
				);
		
		confirmationTokenService.saveConfrimationToken(confirmationToken);
		
		
		// TODO : SEND EMAIL
		return token;
		
		
	}
	
	public String signIn(AppUser appUser) {
		Optional<AppUser> dbUser = userRepo.findByEmail(appUser.getEmail());
		AppUser user = dbUser.get();
		
		if(dbUser.isPresent()) {
			if(appUser.getPassword().equals(user.getPassword()))
			{
				String token = UUID.randomUUID().toString();
				// TODO: Send confirmation token
				ConfirmationToken confirmationToken = new ConfirmationToken(
						token,
						LocalDateTime.now(),
						LocalDateTime.now().plusMinutes(15),
						appUser
						);
				
				confirmationTokenService.saveConfrimationToken(confirmationToken);
				
				
				// TODO : SEND EMAIL
				return token;

			}
			else {
				throw new IllegalStateException("email or password not valid");
			}
		}
		return null;
	}
	
	  public int enableAppUser(String email) {
	        return userRepo.enableAppUser(email);
	    }
}
