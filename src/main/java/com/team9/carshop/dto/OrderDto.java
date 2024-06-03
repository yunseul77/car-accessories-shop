package com.team9.carshop.dto;

import com.team9.carshop.enums.OrderStatus;
import lombok.Getter;
import lombok.Setter;

import java.math.BigDecimal;

@Getter @Setter
public class OrderDto {
    private Long id;
    private OrderStatus status;
    private String orderNumber;
    private String receiverName;
    private String receiverPhone;
    private String requestMessage;
    private BigDecimal totalPrice;
}