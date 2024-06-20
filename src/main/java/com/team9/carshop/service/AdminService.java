package com.team9.carshop.service;

import com.team9.carshop.dto.CreateCategoryRequestDto;

public interface AdminService {

    // 카테고리 생성
    String createCategory(CreateCategoryRequestDto createCategoryRequestDto);

}
