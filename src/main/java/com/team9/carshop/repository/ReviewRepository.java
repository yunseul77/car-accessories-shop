package com.team9.carshop.repository;

import com.team9.carshop.entity.Item;
import com.team9.carshop.entity.Review;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ReviewRepository extends JpaRepository<Review, Long> {

    List<Review> findByItemAndIsDeletedFalse(Item item);

    Review findByIdAndIsDeletedFalse(Long id);

    Page<Review> getByItemId(Long itemId, Pageable pageable);
}
