package com.team9.carshop.dto;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@Data
public class OrderManageDetailDto {

    private String deliveryStatus;
    private LocalDateTime orderedAt;
    private String orderNumber;
    private String receiverName;
    private String receiverPhone;
    private String receiverAddress;
    private String requestMessage;
    private BigDecimal totalPrice;
    private OrderManageItemDto orderItem;

    @NoArgsConstructor
    @Data
    public static class OrderManageItemDto {

        private String imgUrl;
        private String itemName;
        private BigDecimal discountPrice;
        private int count;

    }
}
