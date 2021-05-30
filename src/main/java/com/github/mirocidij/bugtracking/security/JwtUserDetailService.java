package com.github.mirocidij.bugtracking.security;

import com.github.mirocidij.bugtracking.domain.model.user.User;
import com.github.mirocidij.bugtracking.security.jwt.JwtUser;
import com.github.mirocidij.bugtracking.security.jwt.JwtUserFactory;
import com.github.mirocidij.bugtracking.service.UserService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
@Slf4j
@RequiredArgsConstructor
public class JwtUserDetailService implements UserDetailsService {

    private final UserService userService;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User user = userService.findByUserNameWithRoles(username);

        if (user == null) {
            throw new UsernameNotFoundException("User wit username: " + username + " not found");
        }

        JwtUser jwtUser = JwtUserFactory.create(user);

        log.info("IN loadUserByUsername - user with username: {} successfully loaded", username);

        return jwtUser;
    }

}
