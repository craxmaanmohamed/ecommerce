package com.ecommerce.ecommerce.controller;

import com.ecommerce.ecommerce.models.User;

import com.ecommerce.ecommerce.services.UserService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/users")
public class UserController {
    private final UserService service;

    public UserController(UserService service) {
        this.service = service;
    }

    // Get all users
    @GetMapping("/getusers")
    public ResponseEntity<List<User>> getUsers() {
        List<User> users = service.getall();
        return ResponseEntity.ok(users);
    }
    @PostMapping("/login")
    public ResponseEntity<User> loginUser(@RequestBody User user) {
        User foundUser = service.getUserByUsername(user.getUsername());
        if (foundUser != null && foundUser.getPassword().equals(user.getPassword())) {
            return ResponseEntity.ok(foundUser);
        }
        return ResponseEntity.status(401).build();
    }
    // Get user by ID
    @GetMapping("/{id}")
    public ResponseEntity<User> getUser(@PathVariable Long id) {
        User user = service.getaUser(id);
        if (user == null) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(user);
    }

    // Get user by username
    @GetMapping("/username/{username}")
    public ResponseEntity<User> getUserByUsername(@PathVariable String username) {
        User user = service.getUserByUsername(username);
        if (user == null) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(user);
    }

    // Save user
    @PostMapping("/adduser")
    public ResponseEntity<User> saveUser(@RequestBody User user) {
        User savedUser = service.saveUserInfo(user);
        return ResponseEntity.ok(savedUser);
    }

    // Update user
    @PutMapping("/{id}")
    public ResponseEntity<User> updateUser(@PathVariable Long id, @RequestBody User userDetails) {
        User updatedUser = service.updateUser(id, userDetails);
        if (updatedUser == null) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(updatedUser);
    }

    // Delete user
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteUser(@PathVariable Long id) {
        boolean isDeleted = service.deleteUser(id);
        if (!isDeleted) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.noContent().build();
    }
}

