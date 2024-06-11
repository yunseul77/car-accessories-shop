//package com.team9.carshop.service;
//
//import com.team9.carshop.dto.ItemDto;
//import com.team9.carshop.entity.Category;
//import com.team9.carshop.entity.Item;
//import com.team9.carshop.repository.CategoryRepository;
//import com.team9.carshop.repository.ItemRepository;
//import lombok.RequiredArgsConstructor;
//import org.springframework.data.domain.Page;
//import org.springframework.data.domain.PageImpl;
//import org.springframework.data.domain.Pageable;
//import org.springframework.stereotype.Service;
//
//import java.util.List;
//
//@Service
//@RequiredArgsConstructor
//public class ItemService {
//
//    private final ItemRepository itemRepository;
//    private final CategoryRepository categoryRepository;
//
//    // 카테고리별 아이템 조회
//    public Page<Item> getAllItemByCategory(String categoryName, Pageable pageable) {
//        Category category = categoryRepository.findByCategoryName(categoryName);
//        if (category != null) {
//            List<Item> items = category.getItemList();
//
//            int start = (int) pageable.getOffset();
//            int end = Math.min((start + pageable.getPageSize()), items.size());
//            Page<Item> itemPage = new PageImpl<>(items.subList(start, end), pageable, items.size());
//
//            return itemPage;
//        } else {
//            return Page.empty();
//        }
//    }
//
//    // 아이템 상세 조회
//    public Item getItemById(Long id) {
//        return itemRepository.getById(id)
//                .orElseThrow(() -> new IllegalArgumentException("존재하지 않는 게시물입니다."));
//    }
//
//    // 아이템 추가(판매자만 가능은 아직 미구현)
//    public Item addItem(ItemDto itemDto) {
//        try {
//            Item newItem = itemDto.toEntity();
//            return itemRepository.save(newItem);
//        } catch (Exception e) {
//            // 아이템 추가 실패
//            throw new RuntimeException("아이템을 추가하는 동안 문제가 발생했습니다.", e);
//        }
//    }
//}
