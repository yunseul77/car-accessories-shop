package com.team9.carshop.repository;

import com.team9.carshop.entity.Order;
import java.util.List;
<<<<<<< HEAD
=======
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
>>>>>>> dev
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface OrderRepository extends JpaRepository<Order, Long> {
    List<Order> findAllByMemberId(Long memberId);
<<<<<<< HEAD
=======
    List<Order> findAll();
>>>>>>> dev
}