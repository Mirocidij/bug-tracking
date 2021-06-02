package com.github.mirocidij.bugtracking.controller;

import com.github.mirocidij.bugtracking.domain.dto.boards.BoardDto;
import com.github.mirocidij.bugtracking.repository.boards.BoardRepo;
import com.github.mirocidij.bugtracking.security.jwt.JwtUser;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/v1/boards/")
@RequiredArgsConstructor
public class BoardController {

    private final ModelMapper modelMapper;

    private final BoardRepo boardRepo;

    @GetMapping("/all")
    public ResponseEntity<List<BoardDto>> getAllBoards(@AuthenticationPrincipal JwtUser user) {
        var boards = boardRepo.findAllByUserUsername(user.getUsername());

        if (boards.size() == 0) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }

        var ret = boards.stream()
                        .map(board -> modelMapper.map(board, BoardDto.class))
                        .collect(Collectors.toList());

        return new ResponseEntity<>(ret, HttpStatus.OK);
    }

}
