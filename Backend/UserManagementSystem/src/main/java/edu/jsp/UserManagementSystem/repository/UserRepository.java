package edu.jsp.UserManagementSystem.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import edu.jsp.UserManagementSystem.entity.User;

@Repository
public interface UserRepository extends JpaRepository<User, Long>{

}
