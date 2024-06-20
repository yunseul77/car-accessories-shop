package com.team9.carshop.controller;

import com.team9.carshop.dto.CreateCategoryRequestDto;
import com.team9.carshop.service.AdminService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RequiredArgsConstructor
@RequestMapping("/manage")
@RestController
public class AdminController {

    private final AdminService adminService;

    // 카테고리 생성
    @PostMapping("/create-category")
    public ResponseEntity<String> addCategory(
        @RequestBody CreateCategoryRequestDto createCategoryRequestDto) {
        String message = adminService.createCategory(createCategoryRequestDto);
        return ResponseEntity.ok(message);
    }

}
