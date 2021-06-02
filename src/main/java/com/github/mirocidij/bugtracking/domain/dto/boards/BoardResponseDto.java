package com.github.mirocidij.bugtracking.domain.dto.boards;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.github.mirocidij.bugtracking.domain.dto.UserDto;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class BoardResponseDto {

    private Long id;

    private String boardTitle;

    private String boardDescription;

    private int backgroundColor;

    private String backgroundImageUrl;

    @JsonProperty("boardOwner")
    private UserDto userDto = new UserDto();

}
