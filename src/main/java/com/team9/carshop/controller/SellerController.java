package com.team9.carshop.controller;

import com.team9.carshop.dto.OrderManageDetailDto;
import com.team9.carshop.dto.OrderManageDto;
import com.team9.carshop.dto.SaleHistoryDto;
import com.team9.carshop.dto.UpdateDeliveryStatusDto;
import com.team9.carshop.enums.DeliveryStatus;
import com.team9.carshop.repository.OrderRepository;
import com.team9.carshop.security.JwtUtil;
import com.team9.carshop.service.SellerService;
import org.springframework.data.domain.Pageable;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.data.domain.Sort.Direction;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CookieValue;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

@RequiredArgsConstructor
@RequestMapping("/sellers")
@RestController
public class SellerController {

    private final SellerService sellerService;
    private final JwtUtil jwtUtil;

    // 주문 관리 페이지 조회
    @GetMapping("/orderpages")
    public ResponseEntity<Page<OrderManageDto>> showMyOrderList(
        @CookieValue(value = "accessToken") String accessToken,
        @RequestParam(name = "pageindex", defaultValue = "0") int pageIndex,
        @RequestParam(name = "pagesize", defaultValue = "10") int pageSize,
        @RequestParam(name = "sort", defaultValue = "updatedAt") String sort) {

        if (!jwtUtil.validateToken(accessToken)) {
            throw new ResponseStatusException(HttpStatus.UNAUTHORIZED, "유효하지 않은 요청입니다.");
        }

        Long sellerId = jwtUtil.getMemberIdFromToken(accessToken);

        Pageable pageable = PageRequest.of(pageIndex, pageSize, Sort.by(Direction.DESC, sort));

        Page<OrderManageDto> myOrderList = sellerService.getMyOrderList(sellerId, pageable);
        return ResponseEntity.ok(myOrderList);

    }


    // 판매완료 페이지 조회
    @GetMapping("/salepages")
    public ResponseEntity<Page<SaleHistoryDto>> showMySaleList(
        @CookieValue(value = "accessToken") String accessToken,
        @RequestParam(name = "pageindex", defaultValue = "0") int pageIndex,
        @RequestParam(name = "pagesize", defaultValue = "10") int pageSize,
        @RequestParam(name = "sort", defaultValue = "updatedAt") String sort) {

        if (!jwtUtil.validateToken(accessToken)) {
            throw new ResponseStatusException(HttpStatus.UNAUTHORIZED, "유효하지 않은 요청입니다.");
        }

        Long sellerId = jwtUtil.getMemberIdFromToken(accessToken);

        Pageable pageable = PageRequest.of(pageIndex, pageSize, Sort.by(Direction.DESC, sort));

        Page<SaleHistoryDto> mySaleList = sellerService.getMySaleList(sellerId, pageable);
        return ResponseEntity.ok(mySaleList);

    }


        // 주문 상세 조회 (특정1)
        @GetMapping("/orders/{itemId}/{orderId}")
        public ResponseEntity<OrderManageDetailDto> showMyOrderDetail (
            @CookieValue(value = "accessToken") String accessToken,
            @PathVariable Long itemId,
            @PathVariable Long orderId){

            if (!jwtUtil.validateToken(accessToken)) {
                throw new ResponseStatusException(HttpStatus.UNAUTHORIZED, "유효하지 않은 요청입니다.");
            }

            OrderManageDetailDto myOrderDetail = sellerService.getMyOrderDetail(orderId, itemId);
            return ResponseEntity.ok(myOrderDetail);

        }

        // 주문 배송상태 수정
        @PutMapping("/orders/update-delivery")
        public ResponseEntity<String> updateDeliveryStatus (
            @CookieValue(value = "accessToken") String accessToken,
            @RequestBody UpdateDeliveryStatusDto updateDeliveryStatusDto){

            if (!jwtUtil.validateToken(accessToken)) {
                throw new ResponseStatusException(HttpStatus.UNAUTHORIZED, "유효하지 않은 요청입니다.");
            }

            DeliveryStatus updatedStatus = sellerService.updateDeliveryStatus(
                updateDeliveryStatusDto);

            return ResponseEntity.ok(
                "배송 상태가 " + updatedStatus + "으로 변경되었습니다.");

        }


        // 주문 삭제
        @DeleteMapping("/orders/{orderId}")
        public ResponseEntity<Void> deleteOrder (
            @CookieValue(value = "accessToken") String accessToken,
            @PathVariable Long orderId){

            if (!jwtUtil.validateToken(accessToken)){
                throw new ResponseStatusException(HttpStatus.UNAUTHORIZED, "유효하지 않은 요청입니다.");
            }

            sellerService.softDeleteOrder(orderId);

            return ResponseEntity.ok().build();

        }
}
