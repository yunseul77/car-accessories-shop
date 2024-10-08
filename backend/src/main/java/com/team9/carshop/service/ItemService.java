package com.team9.carshop.service;

import com.team9.carshop.dto.*;
import com.team9.carshop.entity.Category;
import com.team9.carshop.entity.Item;
import com.team9.carshop.entity.Member;
import com.team9.carshop.entity.Review;
import com.team9.carshop.exception.*;
import com.team9.carshop.repository.CategoryRepository;
import com.team9.carshop.repository.ItemRepository;
import com.team9.carshop.repository.MemberRepository;

import com.team9.carshop.repository.ReviewRepository;
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
    private final MemberRepository memberRepository;
    private final CategoryRepository categoryRepository;
    private final ReviewRepository reviewRepository;

    // 카테고리별 아이템 조회
    public Page<ItemListResponseDTO> getAllItemByCategory(Long categoryId, Pageable pageable) {
        Category category = itemRepository.findByCategoryId(categoryId);
        if (category != null) {
            Page<Item> itemPage = itemRepository.findByCategoryId(categoryId, pageable);

            // Item -> ItemDto 변환 후 ItemListResponseDTO로 매핑
            List<ItemListResponseDTO> itemResponseList = itemPage.getContent()
                    .stream()
                    .map(item -> {
                        ItemDto itemDto = Item.toDto(item); // ItemDto로 변환

                        // 해당 Item의 리뷰 가져오기
                        List<Review> reviews = reviewRepository.findByItemId(item.getId());

                        // 리뷰가 없는 경우 기본값
                        double averageRating = 0.0;
                        long reviewCount = 0;

                        if (!reviews.isEmpty()) {
                            averageRating = calculateAverageRating(reviews);
                            reviewCount = reviews.size();
                        }

                        return new ItemListResponseDTO(itemDto, averageRating, reviewCount); // ItemListResponseDTO로 변환
                    })
                    .collect(Collectors.toList());

            return new PageImpl<>(itemResponseList, pageable, itemPage.getTotalElements());

        } else {
            throw new CategoryNotFoundException("해당 카테고리를 찾을 수 없습니다: " + categoryId);
        }
    }

    // 아이템 조회
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
    public Long addItem(ItemRequestDTO itemRequestDTO, Long sellerId) {
        Member seller = memberRepository.findById(sellerId)
            .orElseThrow(() -> new MemberNotFoundException("존재하지 않는 회원입니다."));

        Category category = categoryRepository.findById(itemRequestDTO.getCategoryId())
            .orElseThrow(() -> new CategoryNotFoundException("존재하지 않는 카테고리입니다."));

        try {
            Item newItem = itemRequestDTO.toEntity(category);
            newItem.setMember(seller);

            itemRepository.save(newItem);
            return newItem.getId();
        }  catch (DataAccessException e) {
            // 데이터베이스 저장 중에 문제 발생
            throw new DatabaseAccessException("아이템을 추가하는 동안 데이터베이스 액세스 문제가 발생했습니다.", e);
        }
    }

    // 아이템 수정
    @Transactional
    public void updateItem(Long itemId, ItemRequestDTO itemRequestDTO) {
        // 수정할 아이템 가져오기
        Item itemToUpdate = itemRepository.findById(itemId)
                .orElseThrow(() -> new ItemNotFoundException("수정할 아이템을 찾을 수 없습니다. ID: " + itemId));

        // ItemRequestDTO에서 수정된 정보를 가져와서 엔티티에 반영
        itemToUpdate.setName(itemRequestDTO.getName());
        itemToUpdate.setPrice(itemRequestDTO.getPrice());
        itemToUpdate.setDiscount(itemRequestDTO.getDiscount());
        itemToUpdate.setStockQuantity(itemRequestDTO.getStockQuantity());
        itemToUpdate.setTitleImageUrl(itemRequestDTO.getTitleImageUrl());
        itemToUpdate.setContentImageUrl(itemRequestDTO.getContentImageUrl());
        itemToUpdate.setDescription(itemRequestDTO.getDescription());

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

    // 평균 평점 계산 메서드
    public double calculateAverageRating(List<Review> reviews) {
        double sum = 0.0;
        for (Review review : reviews) {
            sum += review.getRatingValue().doubleValue();
        }
        return Math.round((sum / reviews.size()) * 10.0) / 10.0; // 소수점 첫째자리까지 반올림
    }
}