package com.team9.carshop.controller;

import com.team9.carshop.service.ReviewService;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class ReviewController {

    @GetMapping("/review")
    public String reviewWriteForm() {
        return "review";
    }
}
