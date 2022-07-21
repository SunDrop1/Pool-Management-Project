package com.example.demo.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.model.user.User;

@Repository
public interface UserRepository extends JpaRepository<User,Long> {
	public User findByEmail(String email);
	public User findByUsername(String username);
	public User findByid(Long id);
}
