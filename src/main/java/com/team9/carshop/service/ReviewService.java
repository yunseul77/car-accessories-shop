package com.team9.carshop.service;

import com.team9.carshop.dto.ItemDto;
import com.team9.carshop.dto.ReviewDTO;
import com.team9.carshop.entity.Item;
import com.team9.carshop.entity.Member;
import com.team9.carshop.entity.Review;
import com.team9.carshop.repository.MemberRepository;
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

    private final ItemService itemService;
    private final MemberService memberService;
    private final MemberRepository memberRepository;

    //Item 아이디를 가져와서 해당 상품에 대한 리뷰를 조회
    @Transactional(readOnly = true)
    public List<ReviewDTO> getReviewsForItem(Long itemId) {
        ItemDto itemDto = itemService.getItemById(itemId);
        Item item = itemDto.toEntity();
        List<Review> reviews = reviewRepository.findByItemAndIsDeletedFalse(item);
        return reviews.stream().map(Review::toDTO).collect(Collectors.toList());
    }

    //리뷰 작성
    @Transactional
    public ReviewDTO writeReview(ReviewDTO reviewDTO, Long memberId) {
        Member member = memberRepository.findById(memberId).orElseThrow();
        ItemDto itemDto = itemService.getItemById(reviewDTO.getItemId());
        Item item = itemDto.toEntity();
        Review review = new Review(
                reviewDTO.getId(),
                member,
                item,
                reviewDTO.getSummary(),
                reviewDTO.getDescription(),
                reviewDTO.getImageUrl(),
                reviewDTO.getRatingValue()
        );
        Review savedReview = reviewRepository.save(review);
        return savedReview.toDTO();
    }


    //리뷰 수정
    @Transactional
    public ReviewDTO updateReview(Long reviewId, ReviewDTO reviewDTO) {
        Review review = reviewRepository.findByIdAndIsDeletedFalse(reviewId);
        if (review != null) {
            review.setSummary(reviewDTO.getSummary());
            review.setDescription(reviewDTO.getDescription());
            review.setImageUrl(reviewDTO.getImageUrl());
            review.setRatingValue(reviewDTO.getRatingValue());
            Review updatedReview = reviewRepository.save(review);
            return updatedReview.toDTO();
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

