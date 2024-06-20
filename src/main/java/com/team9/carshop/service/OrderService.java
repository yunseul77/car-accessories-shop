package com.team9.carshop.service;

import com.team9.carshop.dto.OrderRequestDto;
import com.team9.carshop.dto.OrderResponseDto;
import com.team9.carshop.entity.Delivery;
import com.team9.carshop.entity.Item;
import com.team9.carshop.entity.Member;
import com.team9.carshop.entity.Order;
import com.team9.carshop.entity.OrderItem;
import com.team9.carshop.enums.DeliveryStatus;
import com.team9.carshop.exception.ItemNotFoundException;
import com.team9.carshop.exception.MemberNotFoundException;
import com.team9.carshop.repository.ItemRepository;
import com.team9.carshop.repository.MemberRepository;
import com.team9.carshop.repository.OrderRepository;

import java.math.BigDecimal;
import java.util.stream.Stream;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import org.springframework.transaction.annotation.Transactional;

@Transactional(readOnly = true)
@Service
@RequiredArgsConstructor
public class OrderService {

    private final OrderRepository orderRepository;
    private final ItemRepository itemRepository;
    private final MemberRepository memberRepository;

    /**
     * 주문 생성 로직
     */
    @Transactional
    public OrderResponseDto createOrder(Long memberId, OrderRequestDto orderRequestDto) {

        Order order = new Order();

        Member member = memberRepository.findById(memberId)
            .orElseThrow(() -> new MemberNotFoundException("유효하지 않은 멤버입니다."));

        order.setMember(member);
        order.setReceiverName(orderRequestDto.getReceiverName());
        order.setReceiverPhone(orderRequestDto.getReceiverPhone());
        order.setRequestMessage(orderRequestDto.getRequestMessage());

        Delivery delivery = new Delivery();
        delivery.setAddress(orderRequestDto.getReceiverAddress());
        delivery.setStatus(DeliveryStatus.ORDERED);

        order.setDelivery(delivery);

        List<OrderItem> orderItems = orderRequestDto.getOrderItems().stream().map(dto -> {
            OrderItem orderItem = new OrderItem();
            Item item = itemRepository.findById(dto.getItemId())
                .orElseThrow(() -> new ItemNotFoundException("유효하지 않은 아이템입니다."));
            orderItem.setItem(item);
            orderItem.setOrder(order);
            orderItem.setCount(dto.getCount());
            orderItem.setPrice(item.getPrice());
            orderItem.setDiscount(item.getDiscount());
            orderItem.calculateDiscountPrice();
            orderItem.calculateTotalPrice();
            return orderItem;
        }).toList();

        order.setOrderItems(orderItems);

        Order savedOrder = orderRepository.save(order);

        OrderResponseDto orderResponseDto = new OrderResponseDto();
        orderResponseDto.setOrderNumber(savedOrder.getOrderNumber());

        return orderResponseDto;
    }



    public Optional<Order> getOrder(Long id) {
        return orderRepository.findById(id);
    }

    @Transactional
    public Order updateOrder(Order order) {
        return orderRepository.save(order);
    }

    @Transactional
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

    public List<Order> getOrdersByMemberId(Long memberId) {
        return orderRepository.findAllByMemberId(memberId);
    }
}