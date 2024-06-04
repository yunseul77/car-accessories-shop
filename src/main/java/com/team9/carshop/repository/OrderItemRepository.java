package com.team9.carshop.repository;

import com.team9.carshop.entity.Order;
import com.team9.carshop.entity.OrderItem;
import java.util.List;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OrderItemRepository extends JpaRepository<OrderItem, Long> {

}
