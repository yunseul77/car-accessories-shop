package com.team9.carshop.service;

import com.team9.carshop.dto.OrderManageDetailDto;
import com.team9.carshop.dto.OrderManageListDto;
import com.team9.carshop.dto.SaleListDto;
import com.team9.carshop.dto.UpdateDeliveryStatusDto;
import com.team9.carshop.entity.Delivery;
import com.team9.carshop.entity.Item;
import com.team9.carshop.entity.Order;
import com.team9.carshop.entity.OrderItem;
import com.team9.carshop.enums.DeliveryStatus;
import com.team9.carshop.exception.ItemNotFoundException;
import com.team9.carshop.exception.OrderNotFoundException;
import com.team9.carshop.exception.SaleNotFoundException;
import com.team9.carshop.repository.DeliveryRepository;
import com.team9.carshop.repository.ItemRepository;
import com.team9.carshop.repository.OrderItemRepository;
import com.team9.carshop.repository.OrderRepository;
import java.util.Arrays;
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
    public Page<OrderManageListDto> getMyOrderList(Long sellerId, Pageable pageable) {
        // 판매자 ID와 페이징기준으로 판매자가 등록한 모든 아이템에 대한 주문아이템 페이지 가져옴
        Page<OrderItem> orderPages = orderItemRepository.findOrderItemPageBySellerId(sellerId, pageable);

        // 모든 페이지에서 실제 보여줄 페이지에 필요한 데이터만 DTO에 map 해서 리턴해야 함
        Page<OrderManageListDto> myOrderListDto = orderPages.map(orderItem ->
            {
                OrderManageListDto dto = new OrderManageListDto();
                dto.setCategoryName(orderItem.getItem().getCategories().getFirst().getName()); //String.join 활용
                dto.setItemName(orderItem.getItem().getName());
                dto.setSellingPrice(orderItem.getPrice());
                dto.setOrderQuantity(orderItem.getCount());
                dto.setTotalPrice(orderItem.getTotalPrice());
                dto.setOrderCreatedAt(orderItem.getCreatedAt());
                dto.setDeliveryStatus(orderItem.getOrder().getDelivery().getStatus().name());
                dto.setOrderStatus(orderItem.getOrder().getStatus().name());
                dto.setCustomerId(orderItem.getOrder().getMember().getLoginId());
                dto.setOrderId(orderItem.getOrder().getId());
                dto.setDeliveryId(orderItem.getOrder().getDelivery().getId());
                dto.setItemId(orderItem.getItem().getId());

                Map<String, String> deliveryStatusOption = Arrays.stream(DeliveryStatus.values())
                    .collect(Collectors.toMap(Enum::name, Enum::name));
                dto.setDeliveryStatusOption(deliveryStatusOption);

                return dto;
            });

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
        dto.setOrderedAt(order.getCreatedAt());
        dto.setOrderNumber(order.getOrderNumber());
        dto.setDeliveryStatus(order.getDelivery().getStatus().name());
        dto.setReceiverName(order.getReceiverName());
        dto.setReceiverPhone(order.getReceiverPhone());
        dto.setReceiverAddress(order.getDelivery().getAddress());
        dto.setTotalPrice(order.getTotalPrice());
        dto.setRequestMessage(order.getRequestMessage());

        OrderManageDetailDto.OrderManageItemDto itemDto = new OrderManageDetailDto.OrderManageItemDto();
        itemDto.setCount(order.getOrderItems().getFirst().getCount());
        itemDto.setItemName(item.getName());
        itemDto.setDiscountPrice(item.getDiscountPrice());
        itemDto.setImgUrl(item.getImageUrl());

        dto.setOrderItem(itemDto);

        return dto;

    }


    /**
     * 고객 배송상태 수정
     */
    @Transactional
    public void updateDeliveryStatus(UpdateDeliveryStatusDto updateDeliveryStatusDto) {
        Delivery delivery = deliveryRepository.findById(updateDeliveryStatusDto.getDeliveryId())
            .orElseThrow(() -> new OrderNotFoundException("현재 주문이 존재하지 않습니다."));

        delivery.setStatus(DeliveryStatus.valueOf(
            updateDeliveryStatusDto.getDeliveryStatus()));

    }


    /**
     * 판매완료 목록 조회
     */
    public Page<SaleListDto> getMySaleList(Long sellerId, Pageable pageable) {
        Page<OrderItem> salePages = orderItemRepository.findSalePageBySellerId(sellerId,
            pageable);

        Page<SaleListDto> saleListDto = salePages
            .map(orderItem -> {
                SaleListDto dto = new SaleListDto();

                dto.setCustomerName(orderItem.getOrder().getMember().getName());
                dto.setCustomerPhone(orderItem.getOrder().getMember().getPhone());
                dto.setCustomerLoginId(orderItem.getOrder().getMember().getLoginId());
                dto.setDeliveryUpdatedAt(orderItem.getOrder().getDelivery().getUpdatedAt());
                dto.setStockQuantity(orderItem.getCount());
                dto.setDiscountPrice(orderItem.getDiscountPrice());
                dto.setTotalPrice(orderItem.getTotalPrice());
                dto.setItemName(orderItem.getItem().getName());
                dto.setItemId(orderItem.getItem().getId());
                dto.setCategoryName(orderItem.getItem().getCategories().getFirst().getName());

                return dto;
            });
        if (saleListDto.isEmpty()) {
            throw new SaleNotFoundException("판매 완료된 내역이 없습니다.");
        }
        return saleListDto;

    }
}



