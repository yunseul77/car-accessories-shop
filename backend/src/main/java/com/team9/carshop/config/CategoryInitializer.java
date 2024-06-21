package com.team9.carshop.config;

import com.team9.carshop.entity.Category;
import com.team9.carshop.repository.CategoryRepository;
import jakarta.annotation.PostConstruct;
import java.util.Arrays;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

@RequiredArgsConstructor
@Transactional(readOnly = true)
@Component
public class CategoryInitializer implements CommandLineRunner {

    private final CategoryRepository categoryRepository;

    @Override
    @Transactional
    public void run(String... args) throws Exception {
        List<String> categoryNames = Arrays.asList(
            "방향제/공기청정",
            "바닥/트렁크 매트",
            "시트/쿠션",
            "커버/몰딩",
            "수납/정리용품",
            "편의용품/액세서리",
            "햇빛가리개/썬팅"
        );



        for (String name : categoryNames) {
            if (!categoryRepository.existsByName(name)) {
                Category category = new Category();
                category.setName(name);
                categoryRepository.save(category);
            }
        }
    }

}
