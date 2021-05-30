package com.github.mirocidij.bugtracking.controller;

import com.github.mirocidij.bugtracking.domain.model.boards.Board;
import com.github.mirocidij.bugtracking.repository.boards.BoardRepo;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/v1/boards/")
@RequiredArgsConstructor
public class BoardController {

    private final BoardRepo boardRepo;

    @GetMapping("/all")
    public ResponseEntity<List<Board>> getAllBoards() {
        var boards =  boardRepo.findAll();

        if (boards.size() == 0) {
            return new ResponseEntity<>(boards, HttpStatus.NO_CONTENT);
        }

        return new ResponseEntity<>(boards, HttpStatus.OK);
    }

}
