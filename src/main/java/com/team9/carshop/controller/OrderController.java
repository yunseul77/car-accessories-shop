package com.team9.carshop.controller;

import com.team9.carshop.entity.Order;
import com.team9.carshop.service.OrderService;
import lombok.RequiredArgsConstructor;
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
        return orderService.createOrder(order);
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
//package com.team9.carshop.controller;
//
//import com.team9.carshop.entity.Order;
//import com.team9.carshop.service.OrderService;
//import java.util.List;
//import org.springframework.web.bind.annotation.GetMapping;
//import org.springframework.web.bind.annotation.PathVariable;
//import org.springframework.web.bind.annotation.RestController;
//
//@RestController
//public class OrderController {
//
//    private final OrderService orderService;
//
//    public OrderController(OrderService orderService) {
//        this.orderService = orderService;
//    }
//
//    @GetMapping("/api/orders/{memberId}")
//    public List<Order> getOrdersByMemberId(@PathVariable Long memberId) {
//        return orderService.getOrdersByMemberId(memberId);
//    }
//}