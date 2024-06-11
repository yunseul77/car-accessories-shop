package com.team9.carshop.repository;

import com.team9.carshop.entity.Item;
import com.team9.carshop.entity.Review;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ReviewRepository extends JpaRepository<Review, Long> {
<<<<<<< HEAD
    List<Review> findByItemAndIsDeletedFalse(Item item);

    Review findByIdAndIsDeletedFalse(Long id);
=======
//    List<Review> findByItemAndIsDeletedFalse(Item item);
//
//    Review findByIdAndIsDeletedFalse(Long id);
>>>>>>> dev

}
