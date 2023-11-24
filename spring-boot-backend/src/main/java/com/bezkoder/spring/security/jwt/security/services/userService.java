package com.bezkoder.spring.security.jwt.security.services;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.bezkoder.spring.security.jwt.exception.UserNotFoundException;
import com.bezkoder.spring.security.jwt.models.User;
import com.bezkoder.spring.security.jwt.repository.UserRepository;


@Service
@Transactional
public class UserService {

	@Autowired
    private UserRepository userRepo;
     
 
    public void updateResetPasswordToken(String token, String email) throws UserNotFoundException  {
        User user = userRepo.findUserByEmail(email);
        if (user != null) {
            user.setResetPasswordToken(token);
            userRepo.save(user);
        } else {
        	throw new UserNotFoundException("Could not find any customer with the email " + email);
        }
    }
     
    public  User getByResetPasswordToken(String token) {
        return userRepo.findByResetPasswordToken(token);
    }
     
    public void updatePassword(User user, String newPassword) {
        BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
        String encodedPassword = passwordEncoder.encode(newPassword);
        user.setPassword(encodedPassword);
         
        user.setResetPasswordToken(null);
        userRepo.save(user);
    }
	
}
