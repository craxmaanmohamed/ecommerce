package com.ecommerce.ecommerce.services;

import com.ecommerce.ecommerce.Repositories.RoleRepository;
import com.ecommerce.ecommerce.models.Role;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RoleService {
    private final RoleRepository repo;

    public RoleService(RoleRepository repo) {
        this.repo = repo;
    }

    // Save role
    public Role saveRoleInfo(Role role) {
        return repo.save(role);
    }

    // Get a role by ID
    public Role getaRole(Long id) {
        return repo.findById(id).orElse(null);
    }

    // Get all roles
    public List<Role> getAllRoles() {
        return repo.findAll();
    }

    // Update a role
    public Role updateRole(Long id, Role roleDetails) {
        return repo.findById(id).map(role -> {
            role.setName(roleDetails.getName());
            return repo.save(role);
        }).orElse(null);
    }

    // Delete a role
    public boolean deleteRole(Long id) {
        return repo.findById(id).map(role -> {
            repo.delete(role);
            return true;
        }).orElse(false);
    }
}