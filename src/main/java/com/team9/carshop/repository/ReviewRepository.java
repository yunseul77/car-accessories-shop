package com.team9.carshop.repository;

<<<<<<< HEAD
import com.team9.carshop.entity.Review;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ReviewRepository extends JpaRepository<Review, Long> {
=======
import com.team9.carshop.entity.Item;
import com.team9.carshop.entity.Review;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ReviewRepository extends JpaRepository<Review, Long> {
//    List<Review> findByItemAndIsDeletedFalse(Item item);
//
//    Review findByIdAndIsDeletedFalse(Long id);
>>>>>>> dev

}
