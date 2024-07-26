package com.ecommerce.ecommerce.services;

import com.ecommerce.ecommerce.Repositories.UserRepository;
import com.ecommerce.ecommerce.models.User;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {

    private final UserRepository userRepo;

    public UserService(UserRepository userRepo) {
        this.userRepo = userRepo;
    }

    public User saveUserInfo(User user) {
        return userRepo.save(user);
    }

    public User getaUser(Long id) {
        return userRepo.findById(id).orElse(null);
    }

    public List<User> getall() {
        return userRepo.findAll();
    }

    public User getUserByUsername(String username) {
        return userRepo.findByUsername(username);
    }

    public User updateUser(Long id, User userDetails) {
        return userRepo.findById(id).map(user -> {
            user.setUsername(userDetails.getUsername());
            user.setPassword(userDetails.getPassword());
            user.setRoles(userDetails.getRoles());
            return userRepo.save(user);
        }).orElse(null);
    }

    public boolean deleteUser(Long id) {
        return userRepo.findById(id).map(user -> {
            userRepo.delete(user);
            return true;
        }).orElse(false);
    }
}