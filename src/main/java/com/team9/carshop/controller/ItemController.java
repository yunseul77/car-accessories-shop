package com.team9.carshop.controller;

import com.team9.carshop.dto.ItemDetailResponseDTO;
import com.team9.carshop.dto.ItemDto;
import com.team9.carshop.dto.ItemRequestDTO;
import com.team9.carshop.dto.ReviewDTO;
import com.team9.carshop.entity.Item;
import com.team9.carshop.security.JwtUtil;
import com.team9.carshop.service.ItemService;
import com.team9.carshop.service.ReviewService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;
import org.springframework.web.server.ResponseStatusException;

@RestController
@RequiredArgsConstructor
@RequestMapping("/item")
public class ItemController {

    private final ItemService itemService;
    private final ReviewService reviewService;
    private final JwtUtil jwtUtil;

    // 카테고리별 아이템 목록 조회
    @GetMapping("/category/{categoryId}")
    public ResponseEntity<Page<ItemDto>> getAllItemListByCategory(@PathVariable Long categoryId,
                                                                  @RequestParam(name = "page", defaultValue = "0") int page,
                                                                  @RequestParam(name = "size", defaultValue = "16") int size) {
        Page<ItemDto> itemPage = itemService.getAllItemByCategory(categoryId, PageRequest.of(page, size));
        return new ResponseEntity<>(itemPage, HttpStatus.OK);
    }

    // 아이템 상세 페이지 조회
    @GetMapping("/detail/{itemId}")
    public ResponseEntity<ItemDetailResponseDTO> getItemById(@PathVariable Long itemId,
                                                             @RequestParam(name = "page", defaultValue = "0") int page,
                                                             @RequestParam(name = "size", defaultValue = "3") int size) {
        ItemDto items = itemService.getItemById(itemId);
        Page<ReviewDTO> reviews = reviewService.getPagedReview(itemId, PageRequest.of(page, size));

        ItemDetailResponseDTO itemAndReviews = new ItemDetailResponseDTO(items, reviews);

        return ResponseEntity.ok().body(itemAndReviews);
    }

    // 판매자 본인이 올린 아이템 조회
    @GetMapping("/{sellerId}/itemList")
    @PreAuthorize("hasAuthority('SELLER')")
    public ResponseEntity<Page<ItemDto>> getItemListBySeller(@PathVariable Long sellerId,
                                                             @RequestParam(name = "page", defaultValue = "0") int page,
                                                             @RequestParam(name = "size", defaultValue = "10") int size) {
        Page<ItemDto> sellerItemPage = itemService.getAllItemBySeller(sellerId, PageRequest.of(page, size));
        return new ResponseEntity<>(sellerItemPage, HttpStatus.OK);
    }


    // 아이템 추가 ( 판매자만 가능 )
    @PostMapping("/addItem")
    @PreAuthorize("hasAuthority('SELLER')")
    public ResponseEntity<String> addItem(
        @CookieValue(value = "accessToken") String accessToken,
        @RequestBody ItemRequestDTO itemRequestDto) {

        if (!jwtUtil.validateToken(accessToken)){
            throw new ResponseStatusException(HttpStatus.UNAUTHORIZED, "유효하지 않은 요청입니다.");
        }

        Long sellerId = jwtUtil.getMemberIdFromToken(accessToken);

        Long itemId = itemService.addItem(itemRequestDto, sellerId);
        return ResponseEntity.ok("아이템이 성공적으로 추가되었습니다. 상품번호 " + itemId);
    }

    // 아이템 수정 ( 판매자만 가능 )
    @PatchMapping("/{itemId}/updateItem")
    @PreAuthorize("hasAuthority('SELLER')")
    public ResponseEntity<String> updateItem(@PathVariable Long itemId, @RequestBody ItemRequestDTO itemRequestDTO) {
        itemService.updateItem(itemId, itemRequestDTO);
        return ResponseEntity.ok("아이템이 성공적으로 수정되었습니다.");
    }

    // 아이템 삭제 ( 판매자만 가능 )
    @DeleteMapping("/{itemId}/deleteItem")
    @PreAuthorize("hasAuthority('SELLER')")
    public ResponseEntity<String> deleteItem(@PathVariable Long itemId) {
        itemService.deleteItem(itemId);
        return ResponseEntity.ok("아이템이 성공적으로 삭제되었습니다.");
    }
}