package com.team9.carshop.service;

import com.team9.carshop.dto.OrderMageListDto;
import com.team9.carshop.entity.Member;
import com.team9.carshop.repository.MemberRepository;
import com.team9.carshop.repository.OrderItemRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
@RequiredArgsConstructor
@PreAuthorize("hasAuthority('SELLER')")
public class SellerService {

    private final MemberRepository memberRepository;
    private final OrderItemRepository orderItemRepository;

    /**
     * 고객 주문관리 목록 조회
     */
    public Page<OrderMageListDto> getMyOrderList(Long sellerId, Pageable pageable) {
        Member seller = memberRepository.findById(sellerId)
            .orElseThrow(() -> new IllegalArgumentException("유효하지 않은 ID 입니다"));

        OrderMageListDto saleListDto = new OrderMageListDto();
        saleListDto.setCategoryName("카테고리명");

        return null;
    }
    /**
     * 고객 주문상세 조회
     */

    /**
     * 고객 배송상태 수정
     */

    /**
     * 고객의 주문상태 수정 동기화
     */

    /**
     * 고객 주문 삭제
     */

    /**
     * 판매완료 목록 조회
     */
}