package com.ecommerce.ecommerce.controller;

import com.ecommerce.ecommerce.models.Role;
import com.ecommerce.ecommerce.services.RoleService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/roles")
public class RoleController {
    private final RoleService service;

    public RoleController(RoleService service) {
        this.service = service;
    }

    // Get all roles
    @GetMapping("/getroles")
    public ResponseEntity<List<Role>> getRoles() {
        return ResponseEntity.ok(service.getAllRoles());
    }

    // Get role by ID
    @GetMapping("/{id}")
    public ResponseEntity<Role> getRole(@PathVariable Long id) {
        return ResponseEntity.ok(service.getaRole(id));
    }

    // Save role
    @PostMapping("/addrole")
    public ResponseEntity<Role> saveRole(@RequestBody Role role) {
        return ResponseEntity.ok(service.saveRoleInfo(role));
    }

    // Update role
    @PutMapping("/{id}")
    public ResponseEntity<Role> updateRole(@PathVariable Long id, @RequestBody Role roleDetails) {
        return ResponseEntity.ok(service.updateRole(id, roleDetails));
    }

    // Delete role
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteRole(@PathVariable Long id) {
        service.deleteRole(id);
        return ResponseEntity.noContent().build();
    }
}