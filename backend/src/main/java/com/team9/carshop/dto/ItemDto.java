package com.team9.carshop.dto;

import com.team9.carshop.entity.Category;
import com.team9.carshop.entity.Item;
import com.team9.carshop.entity.Review;
import com.team9.carshop.entity.Member;
import java.util.List;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.math.BigDecimal;

@Getter @Setter
@NoArgsConstructor
public class ItemDto {
    private Long id;
    private String name;
    private String itemTitle;
    private BigDecimal price;
    private BigDecimal discount;
    private BigDecimal discountPrice;
    private int stockQuantity;
    private String titleImageUrl;
    private String contentImageUrl;
    private String description;
    private List<Review> reviews;
    private double averageRating;
    private long reviewCount;
    private String memberName;
    private Long categoryId;
    private String categoryName;
    private Category category;
    private Member seller;

    // Dto -> Entity
    public Item toEntity()
    {
        return Item.builder()
                .id(this.id)
                .name(this.name)
                .itemTitle(this.itemTitle)
                .price(this.price)
                .discount(this.discount)
                .discountPrice(this.discountPrice)
                .stockQuantity(this.stockQuantity)
                .titleImageUrl(this.titleImageUrl)
                .contentImageUrl(this.contentImageUrl)
                .description(this.description)
                .category(this.category)
                .member(this.seller)
                .build();
    }
}
