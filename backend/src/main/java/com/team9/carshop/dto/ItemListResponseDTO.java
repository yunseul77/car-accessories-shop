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
    private List<Review> reviews;
    private double averageRating;
    private long reviewCount;
    private Long categoryId;
    private String categoryName;

    public ItemListResponseDTO(ItemDto itemDto, List<Review> reviews) {
        this.id = itemDto.getId();
        this.name = itemDto.getName();
        this.itemTitle = itemDto.getItemTitle();
        this.price = itemDto.getPrice();
        this.discount = itemDto.getDiscount();
        this.discountPrice = itemDto.getDiscountPrice();
        this.titleImageUrl = itemDto.getTitleImageUrl();
        this.categoryId = itemDto.getCategoryId();
        this.categoryName = itemDto.getCategoryName();
        this.averageRating = itemDto.getAverageRating();
        this.reviewCount = itemDto.getReviewCount();

        this.averageRating = calculateAverageRating(reviews);
        this.reviewCount = reviews.size();

        this.reviews = reviews;
    }

    // 평균 평점 계산 메서드
    public static double calculateAverageRating(List<Review> reviews) {
        if (reviews == null || reviews.isEmpty()) {
            return 0.0;
        }

        double sum = 0.0;
        for (Review review : reviews) {
            sum += review.getRatingValue().doubleValue();
        }
        double average = sum / reviews.size();

        // 소수점 첫째자리까지 반올림
        return Math.round(average * 10.0) / 10.0;
    }
}
