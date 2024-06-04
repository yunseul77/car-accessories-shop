package com.team9.carshop.service;

import com.team9.carshop.dto.OrderManageListDto;
import com.team9.carshop.entity.Item;
import com.team9.carshop.entity.Member;
import com.team9.carshop.entity.Order;
import com.team9.carshop.entity.OrderItem;
import com.team9.carshop.repository.ItemRepository;
import com.team9.carshop.repository.MemberRepository;
import com.team9.carshop.repository.OrderItemRepository;
import com.team9.carshop.repository.OrderRepository;
import java.math.BigDecimal;
import java.util.List;
import java.util.stream.Collectors;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;


@Transactional(readOnly = true)
@RequiredArgsConstructor
@PreAuthorize("hasAuthority('SELLER')")
@Service
public class SellerService {

    private final MemberRepository memberRepository;
    private final OrderItemRepository orderItemRepository;
    private final ItemRepository itemRepository;
    private final OrderRepository orderRepository;

    /**
     * 고객 주문관리 목록 조회
     */
//    public Page<OrderManageListDto> getMyOrderList(Long sellerId, Pageable pageable) {
//        // 판매자 ID와 페이징기준으로 판매자가 등록한 모든 아이템에 대한 주문페이지 가져옴
//        Page<Order> orderPage = orderRepository.findOrderPageBySellerId(sellerId, pageable);
//
//        // 모든 페이지에서 실제 보여줄 페이지에 필요한 데이터만 DTO에 map 해서 리턴해야 함
//        Page<OrderManageListDto> myOrderListDto = orderPage.map(order -> {
//            OrderManageListDto dto = new OrderManageListDto();
//
//            List<String> categoryNames = order.getOrderItems().stream()
//                .filter(orderItem -> orderItem.getItem().getMember().getId().equals(sellerId))
//                .map(orderItem -> orderItem.getItem().getCategory().getName())
//                .toList();
//
//            String categoryName = String.join(", ", categoryNames);
//
//            String itemName = order.getOrderItems().stream()
//                    .map(orderItem -> orderItem.getItem().getName())
//                    .collect(Collectors.joining(", "));
//
//            BigDecimal sellingPrice = order.getOrderItems().stream()
//                    .filter(orderItem -> orderItem.getItem().getMember().getId().equals(sellerId))
//                    .map(orderItem -> orderItem.getItem().getPrice())
//
//            int orderQuantity =
//
//            dto.setCategoryName(categoryName);
//
//
//
//            }

        /* 아이템에 대한 주문페이지가 null이면 "현재 주문이 존재하지 않습니다." 예외가 발생
            null이 아닐때만 로직이 실행되어야 함 */




    /**
     * 고객 주문상세 조회
     */


    /**
     * 고객 배송상태 수정
     */
//    @Transactional

    /**
     * 고객의 주문상태 수정 동기화
     */
//    @Transactional

    /**
     * 고객 주문 수정
     */
//    @Transactional

    /**
     * 고객 주문 삭제
     */
//    @Transactional

    /**
     * 판매완료 목록 조회
     */
}



