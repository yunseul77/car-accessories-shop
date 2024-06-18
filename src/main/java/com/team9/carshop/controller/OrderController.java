package com.team9.carshop.controller;

import com.team9.carshop.entity.Order;
import com.team9.carshop.service.OrderService;
import java.util.Optional;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/orders")
@RequiredArgsConstructor
public class OrderController {

    private final OrderService orderService;

    @GetMapping
    public List<Order> getAllOrders() {
        return orderService.getAllOrders();
    }

    @PostMapping
    public Order createOrder(@RequestBody Order order) {
        Order createdOrder = orderService.createOrder(order);
        return orderService.getOrder(createdOrder.getId())
            .orElseThrow(() -> new RuntimeException("주문을 찾을 수 없습니다..."));
    }

    @GetMapping("/{orderId}")
    public ResponseEntity<Order> getOrder(@PathVariable Long orderId) {
        Optional<Order> order = orderService.getOrder(orderId);
        return order.map(value -> new ResponseEntity<>(value, HttpStatus.OK))
            .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @GetMapping("/{memberId}")
    public List<Order> getAllOrdersByMember(@PathVariable("memberId") Long memberId) {
        return orderService.getAllOrdersByMember(memberId);
    }

    @PutMapping
    public Order updateOrder(@RequestBody Order order) {
        return orderService.updateOrder(order);
    }

    @DeleteMapping("/{memberId}")
    public void deleteOrder(@PathVariable("memberId") Long id) {
        orderService.deleteOrder(id);
    }
}