package com.team9.carshop.repository;

import com.team9.carshop.dto.OrderManageDto;
import com.team9.carshop.dto.SaleHistoryDto;
import com.team9.carshop.entity.OrderItem;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface OrderItemRepository extends JpaRepository<OrderItem, Long> {


    /* orderItems 기준으로 테이블6개 전부 조인 -> Item의 memberId가 특정 sellerId 인것만 필터
    다시 남은 테이블에서 필요한 데이터만 필터 후 페이징 */
    @Query("select new com.team9.carshop.dto.OrderManageDto("
        + "oi.discountPrice,"
        + "oi.count,"
        + "oi.totalPrice,"
        + "oi.createdAt,"
        + "cast(o.status as string),"
        + "o.id,"
        + "c.name,"
        + "i.id,"
        + "i.name,"
        + "cast(d.status as string),"
        + "d.id, "
        + "m.loginId "
        + ") "
        + "from OrderItem oi "
        + "join oi.order o "
        + "join o.member m "
        + "join o.delivery d "
        + "join oi.item i "
        + "join i.category c "
        + "where i.member.id = :sellerId "
        + "and i.member.role = 'SELLER' "
        + "and o.isDeleted = false "
        + "and d.status != 'DELIVERED'")
    Page<OrderManageDto> findOrderItemPageBySellerId(@Param("sellerId") Long sellerId, Pageable pageable);


    // 판매완료 페이지 조회. "특정 sellerId + 상태는 DELIVERED" 인 6개 테이블 필요데이터를 다 조회
    @Query("select new com.team9.carshop.dto.SaleHistoryDto ("
        + "oi.discountPrice, "
        + "oi.count,"
        + "m.name,"
        + "m.loginId,"
        + "m.phone,"
        + "oi.totalPrice,"
        + "i.name,"
        + "c.name,"
        + "d.updatedAt,"
        + "i.id "
        + ") "
        + "from OrderItem oi "
        + "join oi.order o "
        + "join o.member m "
        + "join o.delivery d "
        + "join oi.item i "
        + "join i.category c "
        + "where i.member.id = :sellerId "
        + "and i.member.role = 'SELLER'"
        + "and d.status = 'DELIVERED'")
    Page<SaleHistoryDto> findSalePageBySellerId(@Param("sellerId") Long sellerId, Pageable pageable);

}
