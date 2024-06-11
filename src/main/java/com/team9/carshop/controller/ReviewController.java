//package com.team9.carshop.controller;
//
//import com.team9.carshop.dto.ReviewDTO;
//import com.team9.carshop.entity.Review;
//import com.team9.carshop.service.ReviewService;
//import lombok.RequiredArgsConstructor;
//import org.springframework.http.HttpStatus;
//import org.springframework.http.ResponseEntity;
//import org.springframework.stereotype.Controller;
//import org.springframework.web.bind.annotation.*;
//
//import java.util.List;
//
//@Controller
//@RequiredArgsConstructor
//@RequestMapping("/review")
//public class ReviewController {
//
//    private final ReviewService reviewService;
//
//    //전체적으로 매핑 어떻게 해야 할지 다시 고민
//    //리턴은 html 페이지로 바꿔야 하나???
//
//    @GetMapping("/{itemId}")
//    public ResponseEntity<List<Review>> getReviewsForItem(@PathVariable Long itemId) {
//        List<Review> reviews = reviewService.getReviewsForItem(itemId);
//        return new ResponseEntity<>(reviews, HttpStatus.OK);
//    }
//
//    @GetMapping("/write")
//    public ResponseEntity<Review> writeReview(@RequestBody ReviewDTO reviewDTO) {
//        Review review = reviewService.writeReview(reviewDTO);
//        return new ResponseEntity<>(review, HttpStatus.CREATED);
//    }
//
//    @GetMapping("/update/{reviewId}")
//    public ResponseEntity<Review> updateReview(@PathVariable Long reviewId,
//                                               @RequestBody ReviewDTO reviewDTO) {
//        Review review = reviewService.updateReview(reviewId, reviewDTO);
//        if (review != null) {
//            return new ResponseEntity<>(review, HttpStatus.OK);
//        } else {
//            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
//        }
//    }
//
//    @GetMapping("/delete/{reviewId}")
//    public ResponseEntity<Void> deleteReview(@PathVariable Long reviewId) {
//        reviewService.deleteReview(reviewId);
//        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
//    }
//}
