package com.github.mirocidij.bugtracking.repository;

import com.github.mirocidij.bugtracking.domain.model.role.Role;
import org.springframework.data.repository.CrudRepository;

public interface RoleRepo extends CrudRepository<Role, Long> {
}
