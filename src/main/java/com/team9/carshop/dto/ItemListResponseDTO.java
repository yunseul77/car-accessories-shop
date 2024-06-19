package com.team9.carshop.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.math.BigDecimal;

@Getter @Setter
@NoArgsConstructor
@AllArgsConstructor
public class ItemListResponseDTO {
    private Long id;
    private String name;
    private BigDecimal price;
    private BigDecimal discount;
    private BigDecimal discountPrice;
    private String titleImageUrl;
    private Double ratingAvg;
    private Long ratingCount;
    private String categoryName;
}
