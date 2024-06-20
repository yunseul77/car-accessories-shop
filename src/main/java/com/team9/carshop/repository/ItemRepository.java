package com.team9.carshop.repository;

import com.team9.carshop.entity.Category;
import com.team9.carshop.entity.Item;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface ItemRepository extends JpaRepository<Item, Long> {

    @Query("select c from Category c where c.id = :id")
    Category findByCategoryId(@Param("id") Long categoryId);

    Page<Item> findByCategoryId(Long categoryId, Pageable pageable);

    Page<Item> findByMemberId(Long id, Pageable pageable);
}
