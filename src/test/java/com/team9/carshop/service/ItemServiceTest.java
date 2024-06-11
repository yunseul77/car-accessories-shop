package com.team9.carshop.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ActiveProfiles;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertThrows;

@SpringBootTest
@ActiveProfiles("test")
public class ItemServiceTests {

    @Autowired
    private ItemService itemService;

//    @Test
//    public void testGetAllItemByCategory() {
//        // 카테고리 이름 지정
//        String categoryName = "testCategory";
//
//        // 카테고리에 해당하는 상품이 있는 경우
//        Page<ItemDto> itemPage = itemService.getAllItemByCategory(categoryName, PageRequest.of(0, 10));
//        assertNotNull(itemPage);
//        assertEquals(categoryName, itemPage.getContent().get(0).getCategory());
//
//        // 카테고리에 해당하는 상품이 없는 경우
//        assertThrows(CategoryNotFoundException.class, () -> {
//            itemService.getAllItemByCategory("nonExistingCategory", PageRequest.of(0, 10));
//        });
//    }