//package com.team9.carshop.controller;
//
//import org.springframework.ui.Model;
//import com.team9.carshop.entity.Order;
//import com.team9.carshop.service.OrderService;
//import lombok.RequiredArgsConstructor;
//import org.springframework.web.bind.annotation.*;
//
//import java.util.List;
//
//@RestController
//@RequestMapping("/orders")
//@RequiredArgsConstructor
//public class OrderController {
//
//    private final OrderService orderService;
//
//    @GetMapping
//    public List<Order> getAllOrders() {
//        return orderService.getAllOrders();
//    }
//
//    @PostMapping
//    public Order createOrder(@RequestBody Order order) {
//        return orderService.createOrder(order);
//    }
//
//    @GetMapping("/{memberId}")
//    public List<Order> getAllOrdersByMember(@PathVariable("memberId") Long memberId) {
//        return orderService.getAllOrdersByMember(memberId);
//    }
//
//    @PutMapping
//    public Order updateOrder(@RequestBody Order order) {
//        return orderService.updateOrder(order);
//    }
//
//    @DeleteMapping("/{memberId}")
//    public void deleteOrder(@PathVariable("memberId") Long id) {
//        orderService.deleteOrder(id);
//    }
//}

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