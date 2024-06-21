package com.team9.carshop.dto;

import com.team9.carshop.entity.Review;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.domain.Page;

import java.math.BigDecimal;
import java.util.List;

@Getter @Setter
@NoArgsConstructor
@AllArgsConstructor
public class ItemListResponseDTO {
    private Long id;
    private String name;
    private String itemTitle;
    private BigDecimal price;
    private BigDecimal discount;
    private BigDecimal discountPrice;
    private String titleImageUrl;
    private double averageRating;
    private long reviewCount;
    private Long categoryId;
    private String categoryName;

    public ItemListResponseDTO(ItemDto itemDto, double averageRating, long reviewCount) {
        this.id = itemDto.getId();
        this.name = itemDto.getName();
        this.itemTitle = itemDto.getItemTitle();
        this.price = itemDto.getPrice();
        this.discount = itemDto.getDiscount();
        this.discountPrice = itemDto.getDiscountPrice();
        this.titleImageUrl = itemDto.getTitleImageUrl();
        this.categoryId = itemDto.getCategoryId();
        this.categoryName = itemDto.getCategoryName();
        this.averageRating = averageRating;
        this.reviewCount = reviewCount;
    }
}
