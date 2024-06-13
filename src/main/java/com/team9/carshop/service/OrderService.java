package com.team9.carshop.service;

import com.team9.carshop.entity.Order;
import com.team9.carshop.repository.OrderRepository;

import java.util.stream.Stream;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class OrderService {

    private final OrderRepository orderRepository;

    public Order createOrder(Order order) {
        return orderRepository.save(order);
    }

    public Optional<Order> getOrder(Long id) {
        return orderRepository.findById(id);
    }

    public Order updateOrder(Order order) {
        return orderRepository.save(order);
    }

    public void deleteOrder(Long id) {
        orderRepository.deleteById(id);
    }

    public List<Order> getAllOrdersByMember(Long memberId) {
        return orderRepository.findAllByMemberId(memberId);
    }

    public boolean isGuest(Long memberId) {
        return memberId == null;
    }

    public boolean isValidOrderNumber(String orderNumber) {
        return orderNumber != null;
    }

    public Optional<Order> getGuestOrder(Long memberId, String orderNumber) {
        if (isGuest(memberId) && isValidOrderNumber(orderNumber)) {
            return getOrder(Long.parseLong(orderNumber));
        } else {
            return Optional.empty();
        }
    }

    public List<Order> getAllOrders() {
        return orderRepository.findAll();
    }

    public Stream<Order> getAllOrdersStream() {
        return orderRepository.findAll().stream();
    }

}