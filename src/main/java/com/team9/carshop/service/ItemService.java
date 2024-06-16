package com.team9.carshop.service;

import com.team9.carshop.dto.ItemDto;
import com.team9.carshop.entity.Category;
import com.team9.carshop.entity.Item;
import com.team9.carshop.exception.*;
import com.team9.carshop.repository.CategoryRepository;
import com.team9.carshop.repository.ItemRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.dao.DataAccessException;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class ItemService {

    private final ItemRepository itemRepository;

    // 카테고리별 아이템 조회
    public Page<ItemDto> getAllItemByCategory(String categoryName, Pageable pageable) {
        Category category = itemRepository.findByCategoryName(categoryName);
        if (category != null) {
            Page<Item> itemPage = itemRepository.findByCategoriesName(categoryName, pageable);

            // Item -> ItemDto 변환
            List<ItemDto> itemDtoList = itemPage.getContent()
                    .stream()
                    .map(Item::toDto)
                    .collect(Collectors.toList());

            return new PageImpl<>(itemDtoList, pageable, itemPage.getTotalElements());

        } else {
            throw new CategoryNotFoundException("해당 카테고리를 찾을 수 없습니다: " + categoryName);
        }
    }

    // 아이템 상세 조회
    public ItemDto getItemById(Long id) {
        Item item = itemRepository.findById(id)
                .orElseThrow(() -> new ItemNotFoundException("존재하지 않는 게시물입니다. ID: " + id));
        return Item.toDto(item);
    }

    // 판매자 본인이 올린 아이템 조회
    public Page<ItemDto> getAllItemBySeller(Long sellerId, Pageable pageable) {
        Page<Item> sellerItemPage = itemRepository.findByMemberId(sellerId, pageable);

        if (sellerItemPage.isEmpty()) {
            throw new ItemNotFoundException("판매자가 등록한 아이템이 없습니다. Seller ID: " + sellerId);
        }

        // Item -> ItemDto 변환
        List<ItemDto> itemDtoList = sellerItemPage.getContent()
                .stream()
                .map(Item::toDto)
                .collect(Collectors.toList());

        return new PageImpl<>(itemDtoList, pageable, sellerItemPage.getTotalElements());
    }

    // 아이템 추가
    @Transactional
    public Item addItem(ItemDto itemDto) {
        try {
            Item newItem = itemDto.toEntity();
            return itemRepository.save(newItem);
        }  catch (DataAccessException e) {
            // 데이터베이스 저장 중에 문제 발생
            throw new DatabaseAccessException("아이템을 추가하는 동안 데이터베이스 액세스 문제가 발생했습니다.", e);
        }
    }

    // 아이템 수정
    @Transactional
    public void updateItem(Long itemId, ItemDto itemDto) {
        // 수정할 아이템 가져오기
        Item itemToUpdate = itemRepository.findById(itemId)
                .orElseThrow(() -> new ItemNotFoundException("수정할 아이템을 찾을 수 없습니다. ID: " + itemId));

        // ItemDto에서 수정된 정보를 가져와서 엔티티에 반영
        itemToUpdate.setName(itemDto.getName());
        itemToUpdate.setPrice(itemDto.getPrice());
        itemToUpdate.setDiscount(itemDto.getDiscount());
        itemToUpdate.setStockQuantity(itemDto.getStockQuantity());
        itemToUpdate.setTitleImageUrl(itemDto.getTitleImageUrl());
        itemToUpdate.setContentImageUrl(itemDto.getContentImageUrl());
        itemToUpdate.setDescription(itemDto.getDescription());

        // 수정된 아이템을 데이터베이스에 저장
        itemRepository.save(itemToUpdate);
    }

    // 아이템 삭제
    @Transactional
    public void deleteItem(Long itemId) {
        Item item = itemRepository.findById(itemId)
                .orElseThrow(() -> new ItemNotFoundException("삭제할 아이템을 찾을 수 없습니다. ID: " + itemId));

        itemRepository.delete(item);
    }
}