package com.team9.carshop.repository;

import com.team9.carshop.entity.Order;
import java.util.List;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface OrderRepository extends JpaRepository<Order, Long> {
    List<Order> findAllByMemberId(Long memberId);

    // 일단 orderItems, item 전부 조인한후 특정 sellerId로 order 페이징 조회
    @Query("select o from Order o "
        + "join o.orderItems oi join oi.item i "
        + "where i.member.id = :sellerId and i.member.role = 'SELLER'")
    Page<Order> findOrderPageBySellerId(Long sellerId, Pageable pageable);

}
