package com.team9.carshop.controller;

import com.team9.carshop.entity.Order;
import com.team9.carshop.service.OrderService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
<<<<<<< HEAD
@RequestMapping("/orders")
=======
@RequestMapping("/orders/")
>>>>>>> dev
@RequiredArgsConstructor
public class OrderController {

    private final OrderService orderService;

    @PostMapping
    public Order createOrder(@RequestBody Order order) {
        return orderService.createOrder(order);
    }

<<<<<<< HEAD
    @GetMapping("/{memberId}")
=======
    @GetMapping("/member/{memberId}")
>>>>>>> dev
    public List<Order> getAllOrdersByMember(@PathVariable("memberId") Long memberId) {
        return orderService.getAllOrdersByMember(memberId);
    }

    @PutMapping
    public Order updateOrder(@RequestBody Order order) {
        return orderService.updateOrder(order);
    }

<<<<<<< HEAD
    @DeleteMapping("/{memberId}")
=======
    @DeleteMapping("/{id}")
>>>>>>> dev
    public void deleteOrder(@PathVariable("memberId") Long id) {
        orderService.deleteOrder(id);
    }
}