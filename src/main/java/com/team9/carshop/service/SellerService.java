package com.team9.carshop.service;

import com.team9.carshop.dto.OrderManageDetailDto;
import com.team9.carshop.dto.OrderManageDetailDto.OrderManageItemDto;
import com.team9.carshop.dto.OrderManageDto;
import com.team9.carshop.dto.SaleHistoryDto;
import com.team9.carshop.dto.UpdateDeliveryStatusDto;
import com.team9.carshop.entity.Category;
import com.team9.carshop.entity.Delivery;
import com.team9.carshop.entity.Item;
import com.team9.carshop.entity.Order;
import com.team9.carshop.entity.OrderItem;
import com.team9.carshop.enums.DeliveryStatus;
import com.team9.carshop.exception.InvalidDeliveryStatusException;
import com.team9.carshop.exception.ItemNotFoundException;
import com.team9.carshop.exception.OrderNotFoundException;
import com.team9.carshop.exception.SaleNotFoundException;
import com.team9.carshop.repository.DeliveryRepository;
import com.team9.carshop.repository.ItemRepository;
import com.team9.carshop.repository.OrderItemRepository;
import com.team9.carshop.repository.OrderRepository;
import java.util.Arrays;
import java.util.Comparator;
import java.util.List;
import java.util.Map;
import java.util.Optional;
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

    private final OrderItemRepository orderItemRepository;
    private final OrderRepository orderRepository;
    private final ItemRepository itemRepository;
    private final DeliveryRepository deliveryRepository;

    /**
     * 고객 주문관리 목록 조회
     */
    public Page<OrderManageDto> getMyOrderList(Long sellerId, Pageable pageable) {
        // 판매자 ID와 페이징기준으로 판매자가 등록한 모든 아이템에 대한 특정 속성이 포함된 주문아이템 페이지 가져옴
        Page<OrderManageDto> myOrderListDto = orderItemRepository.findOrderItemPageBySellerId(sellerId,
            pageable);

            Map<String, String> deliveryStatusOption = Arrays.stream(DeliveryStatus.values())
                .collect(Collectors.toMap(Enum::name, Enum::name));
            myOrderListDto.forEach(dto -> dto.setDeliveryStatusOption(deliveryStatusOption));

            /* 아이템에 대한 주문페이지가 null이면 "현재 주문이 존재하지 않습니다." 예외가 발생
            null이 아닐때만 로직이 실행되어야 함 */
        if (myOrderListDto.isEmpty()) {
            throw new OrderNotFoundException("현재 주문이 존재하지 않습니다.");
        }
        return myOrderListDto;

    }


    /**
     * 고객 주문상세 조회
     */
    public OrderManageDetailDto getMyOrderDetail(Long orderId, Long itemId) {
        Order order = orderRepository.findById(orderId)
            .orElseThrow(() -> new OrderNotFoundException("현재 주문이 존재하지 않습니다."));

        Item item = itemRepository.findById(itemId)
            .orElseThrow(() -> new ItemNotFoundException("현재 아이템이 존재하지 않습니다."));

        OrderManageDetailDto dto = new OrderManageDetailDto();
        mapOrderManageDetailDto(dto, order);

        OrderManageDetailDto.OrderManageItemDto itemDto = new OrderManageDetailDto.OrderManageItemDto();
        mapOrderManageItemDto(itemId, itemDto, order, item);

        dto.setOrderItem(itemDto);

        return dto;

    }


    /**
     * 고객 배송상태 수정
     */
    @Transactional
    public DeliveryStatus updateDeliveryStatus(UpdateDeliveryStatusDto updateDeliveryStatusDto) {
        Delivery delivery = deliveryRepository.findById(updateDeliveryStatusDto.getDeliveryId())
            .orElseThrow(() -> new OrderNotFoundException("현재 주문이 존재하지 않습니다."));

        try {
            DeliveryStatus updatedStatus = DeliveryStatus.valueOf(
                updateDeliveryStatusDto.getDeliveryStatus());

            delivery.setStatus(updatedStatus);
            return delivery.getStatus();

        } catch (IllegalArgumentException e) {
            throw new InvalidDeliveryStatusException("유효하지 않은 변경 요청입니다." +
                updateDeliveryStatusDto.getDeliveryStatus());
        }
    }


    /**
     * 고객 주문 삭제
     */
    @Transactional
    public void softDeleteOrder(Long orderId) {
        Order order = orderRepository.findById(orderId)
            .orElseThrow(() -> new OrderNotFoundException("현재 주문이 존재하지 않습니다."));

        List<OrderItem> orderItems = order.getOrderItems();
        orderItemRepository.deleteAll(orderItems);

        orderRepository.delete(order);
    }


    /**
     * 판매완료 목록 조회
     */
    public Page<SaleHistoryDto> getMySaleList(Long sellerId, Pageable pageable) {
        Page<SaleHistoryDto> saleListDto = orderItemRepository.findSalePageBySellerId(sellerId,
            pageable);

        if (saleListDto.isEmpty()) {
            throw new SaleNotFoundException("판매 완료된 내역이 없습니다.");
        }
        return saleListDto;

    }




    //== OrderManageItem 매핑 메서드 ==//
    private void mapOrderManageItemDto(Long itemId, OrderManageItemDto itemDto, Order order, Item item) {
        itemDto.setCount(order.getOrderItems().stream()
            .filter(orderItem -> orderItem.getItem().getId().equals(itemId))
            .max(Comparator.comparing(OrderItem::getUpdatedAt))
            .orElseThrow(() -> new ItemNotFoundException("해당 아이템을 찾을 수 없습니다."))
            .getCount());
        itemDto.setItemName(item.getName());
        itemDto.setDiscountPrice(item.getDiscountPrice());
        itemDto.setImgUrl(item.getTitleImageUrl());
    }

    //== OrderManageDetail 매핑 메서드 ==//
    private void mapOrderManageDetailDto(OrderManageDetailDto dto, Order order) {
        dto.setOrderedAt(order.getCreatedAt());
        dto.setOrderNumber(order.getOrderNumber());
        dto.setDeliveryStatus(order.getDelivery().getStatus().name());
        dto.setReceiverName(order.getReceiverName());
        dto.setReceiverPhone(order.getReceiverPhone());
        dto.setReceiverAddress(order.getDelivery().getAddress());
        dto.setTotalPrice(order.getTotalPrice());
        dto.setRequestMessage(order.getRequestMessage());
    }
}



