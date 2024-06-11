package com.team9.carshop.dto;

import com.team9.carshop.entity.Item;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.math.BigDecimal;

@Getter @Setter
@NoArgsConstructor
public class ItemDto {
    private Long id;
    private String name;
    private BigDecimal price;
    private BigDecimal discount;
    private int stockQuantity;
    private String imageUrl;
    private String description;

    public Item toEntity()
    {
        return Item.builder()
                .id(this.id)
                .name(this.name)
                .price(this.price)
                .discount(this.discount)
                .stockQuantity(this.stockQuantity)
                .imageUrl(this.imageUrl)
                .description(this.description)
                .build();
    }
}
