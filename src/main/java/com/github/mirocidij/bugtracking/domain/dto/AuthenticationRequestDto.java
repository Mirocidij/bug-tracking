package com.github.mirocidij.bugtracking.domain.dto;

import lombok.Data;

@Data
public class AuthenticationRequestDto {

    private String username;

    private String password;

}
