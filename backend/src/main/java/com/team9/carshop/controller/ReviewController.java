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
    public ResponseEntity<List<ReviewDTO>> showReviewsForItem(@PathVariable Long itemId) {
        List<ReviewDTO> reviews = reviewService.getReviewsForItem(itemId);
        return ResponseEntity.ok(reviews);
    }


    @PostMapping("/{memberId}/write")
    public ResponseEntity<ReviewDTO> writeReview(
            @PathVariable Long memberId,
            @RequestBody ReviewDTO reviewDTO) {
        ReviewDTO review = reviewService.writeReview(reviewDTO, memberId);
        return ResponseEntity.status(HttpStatus.CREATED).body(review);
    }

    @PutMapping("/update/{reviewId}")
    public ResponseEntity<ReviewDTO> updateReview(@PathVariable Long reviewId,
                                                  @RequestBody ReviewDTO reviewDTO) {
        ReviewDTO review = reviewService.updateReview(reviewId, reviewDTO);
        if (review != null) {
            return ResponseEntity.ok(review);
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
    }

    @DeleteMapping("/{reviewId}")
    public ResponseEntity<Void> deleteReview(@PathVariable Long reviewId) {
        reviewService.deleteReview(reviewId);
        return ResponseEntity.noContent().build();
    }
}
