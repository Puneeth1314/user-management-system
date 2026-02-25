package edu.jsp.UserManagementSystem.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import edu.jsp.UserManagementSystem.entity.User;
import edu.jsp.UserManagementSystem.exception.UserNotFoundException;
import edu.jsp.UserManagementSystem.repository.UserRepository;

@Service
public class UserService {
	
	
	private final UserRepository userRepository;
	
	public UserService(UserRepository userRepository) {
		this.userRepository = userRepository;
	}

	public User saveUser(User user) {
		return userRepository.save(user);
	}
	
	public List<User> getAllUsers() {
		return userRepository.findAll();
	}
	
	public User getUserById(Long id) {
		return userRepository.findById(id).orElseThrow(() -> new UserNotFoundException("User not found with id:" + id));
	}
	
	//newUser(userDetails)
	public String updateUser(Long id,User userDetails) {
		Optional<User> ou = userRepository.findById(id);
		if(ou.isPresent()) {
			User user = ou.get();
			user.setName(userDetails.getName());
			user.setEmail(userDetails.getEmail());
			
			userRepository.save(user);
			return "Data updated";
		}else {
			return "Id not found";
		}
		
	}
	
	public String deleteUser(Long id) {
		Optional<User> od = userRepository.findById(id);
		if(od.isPresent()) {
			userRepository.deleteById(id);
			return "Data deleted";
		}else {
			return "Id not found";
		}
	}

}
