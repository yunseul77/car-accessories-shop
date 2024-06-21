package com.team9.carshop.dto;

import com.team9.carshop.enums.OrderStatus;
import java.util.ArrayList;
import java.util.List;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@Data
public class OrderRequestDto {

    private String receiverName;
    private String receiverPhone;
    private String requestMessage;
    private String receiverAddress;
    private List<OrderItemDto> orderItems = new ArrayList<>();

}