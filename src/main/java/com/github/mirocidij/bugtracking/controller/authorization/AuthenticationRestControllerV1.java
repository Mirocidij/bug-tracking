//package com.github.mirocidij.bugtracking.controller.authorization;
//
//import com.github.mirocidij.bugtracking.domain.dto.AuthenticationRequestDto;
//import com.github.mirocidij.bugtracking.domain.dto.UserDto;
//import com.github.mirocidij.bugtracking.security.jwt.JwtTokenProvider;
//import com.github.mirocidij.bugtracking.service.UserService;
//import lombok.RequiredArgsConstructor;
//import org.modelmapper.ModelMapper;
//import org.springframework.http.ResponseEntity;
//import org.springframework.security.authentication.AuthenticationManager;
//import org.springframework.security.authentication.BadCredentialsException;
//import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
//import org.springframework.security.core.AuthenticationException;
//import org.springframework.security.core.userdetails.UsernameNotFoundException;
//import org.springframework.web.bind.annotation.PostMapping;
//import org.springframework.web.bind.annotation.RequestBody;
//import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RestController;
//
//@RestController
//@RequestMapping("/api/v1/auth/")
//@RequiredArgsConstructor
//public class AuthenticationRestControllerV1 {
//
////    private final AuthenticationManager authenticationManager;
//
//    private final JwtTokenProvider jwtTokenProvider;
//
//    private final UserService userService;
//
//    private final ModelMapper mapper;
//
////    @PostMapping("/login")
////    public ResponseEntity<UserDto> login(@RequestBody AuthenticationRequestDto requestDto) {
////        try {
////            String username = requestDto.getUsername();
////            var namePassAuthToken = new UsernamePasswordAuthenticationToken(
////                    username,
////                    requestDto.getPassword()
////            );
////
////            authenticationManager.authenticate(namePassAuthToken);
////
////            var user = userService.findByUserName(username);
////            if (user == null) {
////                throw new UsernameNotFoundException(
////                        "User with username: " + username + " + not found");
////            }
////
////            String token = jwtTokenProvider.createToken(username, user.getRoles());
////
////            var response = mapper.map(user, UserDto.class);
////            response.setToken(token);
////
////            return ResponseEntity.ok(response);
////        } catch (AuthenticationException e) {
////            throw new BadCredentialsException("Invalid username or password");
////        }
////    }
//
//}
