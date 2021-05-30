package com.github.mirocidij.bugtracking.domain.dto;

import lombok.Data;

@Data
public class UserDto {

    private Long id;

    private String username;

    private String firstname;

    private String lastname;

    private String email;

    private String token;

}
