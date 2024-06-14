package com.team9.carshop.dto;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.Map;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@Data
public class OrderManageDto {

    private String categoryName;
    private String itemName;
    private BigDecimal sellingPrice;
    private int orderQuantity;
    private BigDecimal totalPrice;
    private String customerId;
    private String deliveryStatus;
    private String orderStatus;
    private Map<String, String> deliveryStatusOption;
    private LocalDateTime orderCreatedAt;
    private Long itemId;
    private Long orderId;
    private Long deliveryId;

}
