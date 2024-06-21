package com.team9.carshop.dto;

import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@Data
public class OrderItemDto {

    private Long itemId;
    private int count;

}
