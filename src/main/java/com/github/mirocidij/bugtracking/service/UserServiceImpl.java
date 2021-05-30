package com.github.mirocidij.bugtracking.service;

import com.github.mirocidij.bugtracking.config.MapperUtil;
import com.github.mirocidij.bugtracking.domain.dto.UserDto;
import com.github.mirocidij.bugtracking.domain.model.user.User;
import com.github.mirocidij.bugtracking.repository.UserRepo;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Slf4j
@RequiredArgsConstructor
public class UserServiceImpl implements UserService {

    private final UserRepo userRepo;

    private final ModelMapper modelMapper;

    @Override
    public List<UserDto> getAllUsers() {
        log.info("In UserServiceImpl class: In getAllUsers method.");

        return MapperUtil.convertList(userRepo.findAll(), this::mapUserToUserDto);
    }

    @Override
    public User findByUserNameWithRoles(String username) {
        return userRepo.findByUsernameWithJoinFetchRoles(username);
    }

    public UserDto mapUserToUserDto(User user) {
        return modelMapper.map(user, UserDto.class);
    }

}
