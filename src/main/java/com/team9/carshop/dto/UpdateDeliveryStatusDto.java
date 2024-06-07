package com.team9.carshop.dto;

import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@Data
public class UpdateDeliveryStatusDto {

    private Long deliveryId;
    private String deliveryStatus;

}
