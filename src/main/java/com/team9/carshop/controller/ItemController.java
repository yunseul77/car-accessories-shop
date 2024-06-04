package com.team9.carshop.controller;

import com.team9.carshop.dto.ItemDto;
import com.team9.carshop.entity.Item;
import com.team9.carshop.service.ItemService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@RequestMapping("/item")
public class ItemController {

    private final ItemService itemService;

    // 카테고리별 아이템 목록 조회
    @GetMapping("/{category}")
    public Page<Item> getAllItemListByCategory(@PathVariable("category") String categoryName,
                                               @RequestParam(name = "page", defaultValue = "0") int page,
                                               @RequestParam(name = "size", defaultValue = "10") int size) {
        Page<Item> itemPage = itemService.getAllItemByCategory(categoryName, PageRequest.of(page, size));
        return itemPage;
    }

    // 아이템 세부 조회 (리뷰부분 미완성)
    @GetMapping("/detail")
    public String getItemById(@RequestParam("id") Long id) {
        Item newItem = itemService.getItemById(id);

    }

    // 판매자만 접근가능하게 처리 필요
    @PostMapping("/addItem")
    public void addItem(@RequestBody ItemDto itemDto) {
        itemService.addItem(itemDto);
    }
}
