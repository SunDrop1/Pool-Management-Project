package com.example.demo.service.interfaces;

import java.util.Set;

import org.springframework.stereotype.Component;

import com.example.demo.model.User;
import com.example.demo.model.user.UserRole;

@Component
public interface UserService {
			//Creating user
			public User createUser(User user, Set<UserRole> userRoles) throws Exception;
			
			//get user by username
			public User getUser(String username);
			
			//delete user by Id
			public void deleteUser(Long id);
}
