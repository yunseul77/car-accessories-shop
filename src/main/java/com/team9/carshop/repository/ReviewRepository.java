package com.team9.carshop.repository;

import com.team9.carshop.entity.Item;
import com.team9.carshop.entity.Review;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ReviewRepository extends JpaRepository<Review, Long> {
//    List<Review> findByItemAndIsdeletedFalse(Item item);
//
//    Review findByIdAndIsDeletedFalse(Long id);

}
