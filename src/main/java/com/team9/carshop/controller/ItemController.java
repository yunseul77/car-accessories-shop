//package com.team9.carshop.controller;
//
//import com.team9.carshop.dto.ItemDto;
//import com.team9.carshop.dto.ReviewDTO;
//import com.team9.carshop.service.ItemService;
//import com.team9.carshop.service.ReviewService;
//import lombok.RequiredArgsConstructor;
//import org.springframework.data.domain.Page;
//import org.springframework.data.domain.PageRequest;
//import org.springframework.http.HttpStatus;
//import org.springframework.http.ResponseEntity;
//import org.springframework.security.access.prepost.PreAuthorize;
//import org.springframework.web.bind.annotation.*;
//
//import java.util.HashMap;
//import java.util.Map;
//
//@RestController
//@RequiredArgsConstructor
//@RequestMapping("/item")
//public class ItemController {
//
//    private final ItemService itemService;
//    private final ReviewService reviewService;
//
//    // 카테고리별 아이템 목록 조회
//    @GetMapping("/{category}")
//    public ResponseEntity<Page<ItemDto>> getAllItemListByCategory(@PathVariable("category") String categoryName,
//                                                                  @RequestParam(name = "page", defaultValue = "0") int page,
//                                                                  @RequestParam(name = "size", defaultValue = "16") int size) {
//        Page<ItemDto> itemPage = itemService.getAllItemByCategory(categoryName, PageRequest.of(page, size));
//        return new ResponseEntity<>(itemPage, HttpStatus.OK);
//    }
//
//    // 아이템 세부 조회
//    @GetMapping("/{itemId}")
//    public ResponseEntity<Object> getItemById(@PathVariable Long itemId,
//                                              @RequestParam(name = "page", defaultValue = "0") int page,
//                                              @RequestParam(name = "size", defaultValue = "3") int size) {
//        ItemDto newItem = itemService.getItemById(itemId);
//        Page<ReviewDTO> reviewPage = reviewService.getPagedReview(itemId, PageRequest.of(page, size));
//
//        Map<String, Object> ItemAndReview = new HashMap<>();
//        ItemAndReview.put("item", newItem);
//        ItemAndReview.put("reviews", reviewPage);
//
//        return ResponseEntity.ok().body(ItemAndReview);
//    }
//
//    // 판매자 본인이 올린 아이템 조회
//    @GetMapping("/{sellerId}/itemList")
//    @PreAuthorize("hasAuthority('SELLER')")
//    public ResponseEntity<Page<ItemDto>> getItemListBySeller(@PathVariable Long sellerId,
//                                                             @RequestParam(name = "page", defaultValue = "0") int page,
//                                                             @RequestParam(name = "size", defaultValue = "10") int size) {
//        Page<ItemDto> sellerItemPage = itemService.getAllItemBySeller(sellerId, PageRequest.of(page, size));
//        return new ResponseEntity<>(sellerItemPage, HttpStatus.OK);
//    }
//
//
//    // 아이템 추가 ( 판매자만 가능 )
//    @PostMapping("/addItem")
//    @PreAuthorize("hasAuthority('SELLER')")
//    public ResponseEntity<String> addItem(@RequestBody ItemDto itemDto) {
//        itemService.addItem(itemDto);
//        return ResponseEntity.ok("아이템이 성공적으로 추가되었습니다.");
//    }
//
//    // 아이템 수정 ( 판매자만 가능 )
//    @PatchMapping("/{itemId}/updateItem")
//    @PreAuthorize("hasAuthority('SELLER')")
//    public ResponseEntity<String> updateItem(@PathVariable Long itemId, @RequestBody ItemDto itemDto) {
//        itemService.updateItem(itemId, itemDto);
//        return ResponseEntity.ok("아이템이 성공적으로 수정되었습니다.");
//    }
//
//    // 아이템 삭제 ( 판매자만 가능 )
//    @DeleteMapping("/{itemId}/deleteItem")
//    @PreAuthorize("hasAuthority('SELLER')")
//    public ResponseEntity<String> deleteItem(@PathVariable Long itemId) {
//        itemService.deleteItem(itemId);
//        return ResponseEntity.ok("아이템이 성공적으로 삭제되었습니다.");
//    }
//}