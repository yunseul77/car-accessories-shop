package com.team9.carshop.controller;

import com.team9.carshop.dto.ReviewDTO;
import com.team9.carshop.entity.Review;
import com.team9.carshop.service.ReviewService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.math.BigDecimal;
import java.util.List;

@Controller
@RequiredArgsConstructor
@RequestMapping("/review")
public class ReviewController {

    private final ReviewService reviewService;

    @GetMapping("/{itemId}")
    public ResponseEntity<List<Review>> showReviewsForItem(@PathVariable Long itemId) {
        List<Review> reviews = reviewService.getReviewsForItem(itemId);
        return ResponseEntity.ok(reviews);
    }

    @PostMapping("{memberId}/write")
    public ResponseEntity<Review> writeReview(
        @PathVariable Long memberId,
        @RequestBody ReviewDTO reviewDTO) {
        Review review = reviewService.writeReview(reviewDTO, memberId);
        return ResponseEntity.status(HttpStatus.CREATED).body(review);
    }

    @PutMapping("/update/{reviewId}")
    public ResponseEntity<Review> updateReview(@PathVariable Long reviewId,
                                               @RequestBody ReviewDTO reviewDTO) {
        Review review = reviewService.updateReview(reviewId, reviewDTO);
        if (review != null) {
            return ResponseEntity.ok(review);
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
    }

    @DeleteMapping("/delete/{reviewId}")
    public ResponseEntity<Void> deleteReview(@PathVariable Long reviewId) {
        reviewService.deleteReview(reviewId);
        return ResponseEntity.noContent().build();
    }

    // @GetMapping("/item/{itemId}/average-rating")
    // public ResponseEntity<BigDecimal> getAverageRating(@PathVariable Long itemId) {
    //     BigDecimal averageRating = reviewService.getAverageRating(itemId);
    //     return ResponseEntity.ok(averageRating);
    // }
}
