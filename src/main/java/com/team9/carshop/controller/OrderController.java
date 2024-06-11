

package com.team9.carshop.controller;

import com.team9.carshop.entity.Order;
import com.team9.carshop.service.OrderService;

import java.util.stream.Collectors;
import java.util.stream.Stream;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;


import java.util.List;

@RestController

public class OrderController {

    private final OrderService orderService;


    public OrderController(OrderService orderService) {
        this.orderService = orderService;
    }

    @GetMapping("/orders")
    public List<Order> getAllOrders() {
        try (Stream<Order> orderStream = orderService.getAllOrdersStream()) {
            return orderStream.collect(Collectors.toList());
        }

    }
}