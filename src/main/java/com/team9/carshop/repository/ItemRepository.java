package com.team9.carshop.repository;

import com.team9.carshop.entity.Category;
import com.team9.carshop.entity.Item;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ItemRepository extends JpaRepository<Item, Long> {

    Category findByName(String categoryName);

    Page<Item> findByCategoriesName(String categoryName, Pageable pageable);

    Page<Item> findByMemberId(Long id, Pageable pageable);
}
