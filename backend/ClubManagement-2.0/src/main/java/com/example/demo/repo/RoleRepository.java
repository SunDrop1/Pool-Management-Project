package com.example.demo.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.model.user.Role;
import com.example.demo.model.user.User;

@Repository
public interface RoleRepository  extends JpaRepository<Role,Long>{

}
