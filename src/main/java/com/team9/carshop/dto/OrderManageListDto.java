package com.team9.carshop.dto;

import com.team9.carshop.enums.DeliveryStatus;
import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.Map;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class SaleListDto {


    private String categoryName;
    private String itemName;
    private BigDecimal sellingPrice;
    private int orderQuantity;
    private BigDecimal totalPrice;
    private String customerId;
    private Map<String, String> DeliveryStatusOption;
    private LocalDateTime orderCreatedAt;

}
