package com.github.mirocidij.bugtracking.config;

import com.github.mirocidij.bugtracking.domain.dto.UserDto;
import com.github.mirocidij.bugtracking.domain.dto.boards.BoardResponseDto;
import com.github.mirocidij.bugtracking.domain.model.boards.Board;
import com.github.mirocidij.bugtracking.domain.model.user.User;
import org.modelmapper.ModelMapper;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.List;
import java.util.function.Function;
import java.util.stream.Collectors;

@Configuration
public class MapperUtil {

    public static <S, D> List<D> convertList(List<S> source, Function<S, D> destConverter) {
        return source.stream()
                     .map(destConverter)
                     .collect(Collectors.toList());
    }

    @Bean
    public ModelMapper modelMapper() {
        var modelMapper = new ModelMapper();

        modelMapper.createTypeMap(User.class, UserDto.class);

        return modelMapper;
    }

}
