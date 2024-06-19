package com.team9.carshop.controller;

import com.team9.carshop.dto.OrderRequestDto;
import com.team9.carshop.dto.OrderResponseDto;
import com.team9.carshop.entity.Delivery;
import com.team9.carshop.entity.Order;
import com.team9.carshop.enums.DeliveryStatus;
import com.team9.carshop.security.JwtUtil;
import com.team9.carshop.service.OrderService;
import java.util.Optional;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import org.springframework.web.server.ResponseStatusException;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/orders")
@RequiredArgsConstructor
public class OrderController {

    private final OrderService orderService;
    private final JwtUtil jwtUtil;

    @GetMapping
    public List<Order> getAllOrders() {
        return orderService.getAllOrders();
    }

    // 주문 생성요청 받는 컨트롤러 메서드
    @PostMapping("/add")
    public ResponseEntity<OrderResponseDto> createOrder(
        @RequestBody OrderRequestDto orderDto,
        @CookieValue(value = "accessToken", required = false) String accessToken ) {

        if (!jwtUtil.validateToken(accessToken)) {
            throw new ResponseStatusException(HttpStatus.UNAUTHORIZED, "유효하지 않은 토큰입니다.");
        }

        Long memberId = jwtUtil.getMemberIdFromToken(accessToken);

        OrderResponseDto createdOrder = orderService.createOrder(memberId, orderDto);
        return ResponseEntity.ok(createdOrder);
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