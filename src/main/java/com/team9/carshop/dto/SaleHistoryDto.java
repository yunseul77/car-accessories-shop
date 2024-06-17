package com.team9.carshop.dto;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.List;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class SaleHistoryDto {

    private BigDecimal discountPrice;
    private int stockQuantity;
    private String customerLoginId;
    private String customerName;
    private String customerPhone;
    private BigDecimal totalPrice;
    private String itemName;
    private String categoryNames;
    private LocalDateTime deliveryUpdatedAt;
    private Long itemId;


}