package com.team9.carshop.service;

import com.team9.carshop.dto.ReviewDTO;
import com.team9.carshop.entity.Item;
import com.team9.carshop.entity.Member;
import com.team9.carshop.entity.Review;
import com.team9.carshop.repository.ReviewRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class ReviewService {
    private final ReviewRepository reviewRepository;

    //Item 아이디를 가져와서 해당 상품에 대한 리뷰를 조회
//    @Transactional(readOnly = true)
//    public List<Review> getReviewsForItem(Long itemId) {
//        Item item = itemService.getItemById(itemId);
//        return reviewRepository.findByItemAndIsDeletedFalse(item);
//    }

    //리뷰 작성
//    @Transactional
//    public Review writeReview(ReviewDTO reviewDTO) {
//        Member member = memberService.getLoggedInMember();
//        Item item = itemService.getItemById(reviewDTO.getItemId());
//        Review review = new Review(reviewDTO.getId(), member, item, reviewDTO.getSummary(),
//                //member랑 item도 reviewDTO.~ 로 해야하나??
//                reviewDTO.getDescription(), reviewDTO.getImageUrl(), reviewDTO.getRatingValue());
//        return reviewRepository.save(review);
//    }

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

   //리뷰 삭제
   @Transactional
   public void deleteReview(Long reviewId) {
       Review review = reviewRepository.findByIdAndIsDeletedFalse(reviewId);
       if (review != null) {
           reviewRepository.deleteById(reviewId);
       }
   }

//    //별점 - DB에서 처리해서 넘기기? 쿼리 작성. 아니면 JPA에 에버리지 기능
//    @Transactional(readOnly = true)
//    public BigDecimal getAverageRating(Long itemId) {
//        Item item = ItemService.getItemById(itemId);
//        List<Review> reviews = reviewRepository.findByItemAndIsDeletedFalse(item);
//
//        if (reviews.isEmpty()) {
//            return BigDecimal.ZERO; //리뷰가 없을 때 0으로 리턴해주기
//        }
//
//        BigDecimal totalRating = BigDecimal.ZERO;
//        for (Review review : reviews) {
//            totalRating = totalRating.add(review.getRatingValue());
//        }

    // 리뷰 페이지네이션
    public Page<ReviewDTO> getPagedReview(Long itemId, Pageable pageable) {
        Page<Review> reviewPage = reviewRepository.getByItemId(itemId, pageable);

        List<ReviewDTO> reviewDtoList = reviewPage.getContent()
                .stream()
                .map(Review::toDTO)
                .collect(Collectors.toList());

        return new PageImpl<>(reviewDtoList, pageable, reviewPage.getTotalElements());
    }
}

