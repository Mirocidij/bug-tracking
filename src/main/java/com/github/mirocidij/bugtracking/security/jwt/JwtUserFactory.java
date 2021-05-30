package com.github.mirocidij.bugtracking.security.jwt;

import com.github.mirocidij.bugtracking.domain.model.Status;
import com.github.mirocidij.bugtracking.domain.model.role.Role;
import com.github.mirocidij.bugtracking.domain.model.user.User;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import java.util.stream.Collectors;

public class JwtUserFactory {

    public static JwtUser create(User user) {
        return new JwtUser(
                user.getId(),
                user.getUsername(),
                user.getFirstName(),
                user.getLastName(),
                user.getEmail(),
                user.getPassword(),
                user.getStatus().equals(Status.ACTIVE),
                user.getUpdateDateTime(),
                mapToGrantedAuthorities(new ArrayList<>(user.getRoles()))
        );
    }

    private static Collection<? extends GrantedAuthority> mapToGrantedAuthorities(List<Role> userRoles) {
        return userRoles.stream()
                        .map(role -> new SimpleGrantedAuthority(role.getName()))
                        .collect(Collectors.toList());
    }

}
