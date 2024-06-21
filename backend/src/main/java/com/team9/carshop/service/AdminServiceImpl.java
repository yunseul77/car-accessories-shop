package com.team9.carshop.service;

import com.team9.carshop.dto.CreateCategoryRequestDto;
import com.team9.carshop.entity.Category;
import com.team9.carshop.repository.CategoryRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Transactional(readOnly = true)
@RequiredArgsConstructor
@PreAuthorize("hasAuthority('ADMIN')")
@Service
public class AdminServiceImpl implements AdminService {


    private final CategoryRepository categoryRepository;

    /**
     * 카테고리 생성
     */
    @Override
    public String createCategory(CreateCategoryRequestDto createCategoryRequestDto) {
        Category category = new Category();
        category.setName(createCategoryRequestDto.getCategoryName());
        categoryRepository.save(category);

        return category.getName();
    }
}
