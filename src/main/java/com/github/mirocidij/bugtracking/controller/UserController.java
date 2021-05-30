package com.github.mirocidij.bugtracking.controller;

import com.github.mirocidij.bugtracking.domain.dto.UserDto;
import com.github.mirocidij.bugtracking.service.UserServiceImpl;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/users/")
@RequiredArgsConstructor
public class UserController {

    private final UserServiceImpl userService;

    @GetMapping("/all")
    public Iterable<UserDto> getAllUsers() {
        return userService.getAllUsers();
    }

}
