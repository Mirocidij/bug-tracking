package com.github.mirocidij.bugtracking.config;

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
        return new ModelMapper();
    }

}
