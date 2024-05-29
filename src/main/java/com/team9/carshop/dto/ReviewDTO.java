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
    private String summary;
    private String description;
    private String imageUrl;
    private BigDecimal ratingValue;

    private LocalDateTime reviewCreatedAt;

    //private List<item> 아이템 리스트
}
