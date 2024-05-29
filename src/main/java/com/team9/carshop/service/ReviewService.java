package com.team9.carshop.service;

import com.team9.carshop.dto.ReviewDTO;
import com.team9.carshop.entity.Item;
import com.team9.carshop.entity.Member;
import com.team9.carshop.entity.Review;
import com.team9.carshop.repository.ReviewRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ReviewService {
    private final ReviewRepository reviewRepository;

    //Item 아이디를 가져와서 해당 상품에 대한 리뷰를 조회
    @Transactional(readOnly = true)
    public List<Review> getReviewsForItem(Long itemId) {
        Item item = itemService.getItemById(itemId);
        return reviewRepository.findByItemAndIsDeletedFalse(item);
    }

    //리뷰 작성
    @Transactional
    public Review writeReview(ReviewDTO reviewDTO) {
        Member member = memberService.getLoggedInMember();
        Item item = itemService.getItemById(reviewDTO.getItemId());
        Review review = new Review(reviewDTO.getId(), member, item, reviewDTO.getSummary(),
                //member랑 item도 reviewDTO.~ 로 해야하나??
                reviewDTO.getDescription(), reviewDTO.getImageUrl(), reviewDTO.getRatingValue());
        return reviewRepository.save(review);
    }

    //리뷰 수정
    @Transactional
    public Review updateReview(Long reviewId, ReviewDTO reviewDTO) {
        Review review = reviewRepository.findByIdAndIsDeletedFalse(reviewId);
        if (review != null) {
            review.setSummary(reviewDTO.getSummary());
            review.setDescription(reviewDTO.getDescription());
            review.setImageUrl(reviewDTO.getImageUrl());
            review.setRatingValue(reviewDTO.getRatingValue());
            return reviewRepository.save(review);
        }
        return null;
    }

    //소프트 딜리트를 사용한 리뷰 삭제..인데 어떻게 고쳐야 하는거신가 ㅜㅜ
    @Transactional
    public void deleteReview(Long reviewId) {
        Review review = reviewRepository.findByIdAndIsDeletedFalse(reviewId);
        if (review != null) {
            review.setDeleted(true);
            reviewRepository.save(review);
        }
    }
}
