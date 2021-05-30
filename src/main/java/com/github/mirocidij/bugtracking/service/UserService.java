package com.github.mirocidij.bugtracking.service;

import com.github.mirocidij.bugtracking.domain.dto.UserDto;
import com.github.mirocidij.bugtracking.domain.model.user.User;

import java.util.List;

public interface UserService {

    List<UserDto> getAllUsers();

    User findByUserNameWithRoles(String username);

}
