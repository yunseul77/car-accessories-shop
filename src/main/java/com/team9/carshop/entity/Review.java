package com.team9.carshop.entity;

import com.team9.carshop.dto.ReviewDTO;
import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;

import jakarta.persistence.*;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.SQLDelete;

import java.math.BigDecimal;
import org.hibernate.annotations.Where;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@SQLDelete(sql = "UPDATE review SET is_deleted = true WHERE id = ?")
@Where(clause = "is_deleted = false")
public class Review extends BaseEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "review_id")
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "member_id")
    private Member member;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "item_id")
    @JsonBackReference
    private Item item;

    @Column(length = 500)
    private String summary;

    @Lob
    private String description;

    @Column(length = 1000)
    private String imageUrl;

    @Column(precision = 2, scale = 1, nullable = false)
    private BigDecimal ratingValue;

    public static ReviewDTO toDTO(Review review) {
        ReviewDTO reviewDTO = new ReviewDTO();

        reviewDTO.setId(review.getId());
        reviewDTO.setSummary(review.getSummary());
        reviewDTO.setDescription(review.getDescription());
        reviewDTO.setImageUrl(review.getImageUrl());
        reviewDTO.setRatingValue(review.getRatingValue());

        return reviewDTO;
    }
}
