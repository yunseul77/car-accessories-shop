package com.team9.carshop.controller;

import org.springframework.core.io.ClassPathResource;
import org.springframework.core.io.Resource;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import jakarta.servlet.http.HttpServletRequest;
import java.io.IOException;

@Controller
public class ReactAppController {

    @RequestMapping(value = "/**")
    public Resource redirect(HttpServletRequest request) throws IOException {
        return new ClassPathResource("/static/index.html");
    }
}