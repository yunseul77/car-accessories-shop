package com.team9.carshop.dto;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@Data
public class SaleListDto {

    private String categoryName;
    private String itemName;
    private BigDecimal discountPrice;
    private int stockQuantity;
    private BigDecimal totalPrice;
    private String customerLoginId;
    private String customerName;
    private String customerPhone;
    private LocalDateTime DeliveryUpdatedAt;
    private Long itemId;
}
