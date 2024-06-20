package com.team9.carshop.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.domain.Page;

import java.math.BigDecimal;

@Getter @Setter
@NoArgsConstructor
@AllArgsConstructor
public class ItemDetailResponseDTO {
    private Long itemId;
    private String itemTitle;
    private String name;
    private BigDecimal price;
    private BigDecimal discount;
    private BigDecimal discountPrice;
    private int stockQuantity;
    private String titleImageUrl;
    private String contentImageUrl;
    private String description;
    private String memberName;
    private Page<ReviewDTO> reviews;
    private double averageRating;
    private long reviewCount;

    public ItemDetailResponseDTO(ItemDto itemDto, Page<ReviewDTO> reviews) {
        this.itemId = itemDto.getId();
        this.itemTitle = itemDto.getItemTitle();
        this.name = itemDto.getName();
        this.price = itemDto.getPrice();
        this.discount = itemDto.getDiscount();
        this.discountPrice = itemDto.getDiscountPrice();
        this.stockQuantity = itemDto.getStockQuantity();
        this.titleImageUrl = itemDto.getTitleImageUrl();
        this.contentImageUrl = itemDto.getContentImageUrl();
        this.description = itemDto.getDescription();
        this.memberName = itemDto.getMemberName();
        this.reviews = reviews;

        // 리뷰 평균 평점 계산
        this.averageRating = calculateAverageRating(reviews);

        // 리뷰 개수 계산
        this.reviewCount = reviews.getTotalElements();
    }

    private double calculateAverageRating(Page<ReviewDTO> reviews) {
        if (reviews == null || reviews.isEmpty()) {
            return 0.0;
        }

        double sum = reviews.getContent().stream()
                .mapToDouble(review -> review.getRatingValue().doubleValue())
                .sum();

        double average = sum / reviews.getTotalElements();

        // 소수점 첫째자리까지 반올림
        return Math.round(average * 10.0) / 10.0;
    }
}
