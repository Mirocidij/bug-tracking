package com.github.mirocidij.bugtracking.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/greeting")
public class GreetingController {

    @GetMapping
    public String greeting() {
        return "Hello!";
    }

    @GetMapping("/{foo}/{bar}")
    public String test(
            @PathVariable String foo,
            @PathVariable String bar
    ) {
        return foo + '\n' + bar;
    }

    @GetMapping("/test/test")
    public String test() {
        return "test";
    }

}
