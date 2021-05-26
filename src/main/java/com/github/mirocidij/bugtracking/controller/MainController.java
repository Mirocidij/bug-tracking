package com.github.mirocidij.bugtracking.controller;

import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/")
@Slf4j
public class MainController {

    @GetMapping("greeting")
    public String main() throws InterruptedException {
        log.info("In greeting method");

        Thread.sleep(500);

        return "Hello motherfucker";
    }

}
