package com.team9.carshop.dto;

import com.team9.carshop.entity.Category;
import com.team9.carshop.entity.Item;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.math.BigDecimal;

@Getter @Setter
@NoArgsConstructor
@AllArgsConstructor
public class ItemRequestDTO {
    private Long id;
    private String name;
    private String itemTitle;
    private BigDecimal price;
    private BigDecimal discount;
    private int stockQuantity;
    private String titleImageUrl;
    private String contentImageUrl;
    private String description;
    private Long categoryId;

    public Item toEntity() {
        Item item = Item.builder()
                .name(name)
                .itemTitle(itemTitle)
                .price(price)
                .discount(discount)
                .stockQuantity(stockQuantity)
                .titleImageUrl(titleImageUrl)
                .contentImageUrl(contentImageUrl)
                .description(description)
                .build();

        if (categoryId != null) {
            Category category = new Category();
            category.setId(categoryId);
            item.getCategories().add(category);
        }

        return item;
    }
}
