package com.team9.carshop.dto;

import com.team9.carshop.enums.DeliveryStatus;
import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.Map;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@Data
public class OrderManageDto {

    private BigDecimal sellingPrice;
    private int orderQuantity;
    private BigDecimal totalPrice;
    private LocalDateTime orderCreatedAt;
    private String orderStatus;
    private Long orderId;
    private String categoryName;
    private Long itemId;
    private String itemName;
    private String deliveryStatus;
    private Long deliveryId;
    private String customerId;
    private Map<String, String> deliveryStatusOption;


    public OrderManageDto(BigDecimal sellingPrice, int orderQuantity, BigDecimal totalPrice,
        LocalDateTime orderCreatedAt, String orderStatus, Long orderId, String categoryName,
        Long itemId, String itemName, String deliveryStatus, Long deliveryId, String customerId) {
        this.sellingPrice = sellingPrice;
        this.orderQuantity = orderQuantity;
        this.totalPrice = totalPrice;
        this.orderCreatedAt = orderCreatedAt;
        this.orderStatus = orderStatus;
        this.orderId = orderId;
        this.categoryName = categoryName;
        this.itemId = itemId;
        this.itemName = itemName;
        this.deliveryStatus = deliveryStatus;
        this.deliveryId = deliveryId;
        this.customerId = customerId;
    }
}
