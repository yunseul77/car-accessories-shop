package com.team9.carshop.dto;

import lombok.*;

import java.math.BigDecimal;
import java.time.LocalDateTime;

@Getter
@Setter
@ToString
@NoArgsConstructor
@AllArgsConstructor
public class ReviewDTO {
    private Long id;
    private Long memberId;
    private Long itemId;
    private String summary;
    private String description;
    private String imageUrl;
    private BigDecimal ratingValue;
}
