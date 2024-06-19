package com.team9.carshop.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter @Setter
@NoArgsConstructor
@AllArgsConstructor
public class RatingAvgAndCountDTO {

    private Long itemId;    private Double avgRating;
    private Long totalCount;
}
