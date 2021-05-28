package com.github.mirocidij.bugtracking.controller;

import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@Slf4j
public class RouteController {

    @RequestMapping(value = "/{path:[^\\.]*}")
    public String redirect() {
        log.info("In " + this.getClass().getSimpleName());

        return "forward:/";
    }

}
