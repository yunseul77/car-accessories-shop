package com.team9.carshop;
import com.team9.carshop.entity.Delivery;
import com.team9.carshop.entity.Item;
import com.team9.carshop.entity.Member;
import com.team9.carshop.entity.Order;
import com.team9.carshop.entity.OrderItem;
import com.team9.carshop.repository.DeliveryRepository;
import com.team9.carshop.repository.ItemRepository;
import com.team9.carshop.repository.MemberRepository;
import com.team9.carshop.repository.OrderItemRepository;
import com.team9.carshop.repository.OrderRepository;
import java.util.UUID;
import com.team9.carshop.enums.DeliveryStatus;
import com.team9.carshop.enums.OrderStatus;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.annotation.Commit;
import org.springframework.transaction.annotation.Transactional;

import java.math.BigDecimal;
import java.util.Random;
import java.util.concurrent.atomic.AtomicInteger;

import static org.assertj.core.api.Assertions.assertThat;

@SpringBootTest
@Transactional
@Commit
public class DataInsertionTest {

    @Autowired
    private DeliveryRepository deliveryRepository;

    @Autowired
    private ItemRepository itemRepository;

    @Autowired
    private MemberRepository memberRepository;

    @Autowired
    private OrderRepository orderRepository;

    @Autowired
    private OrderItemRepository orderItemRepository;

    private final Random random = new Random();
    private final AtomicInteger uniqueId = new AtomicInteger(0);

    @Test
    public void initializeData() {
        Member member = memberRepository.findById(25L).orElseThrow(() -> new RuntimeException("Member not found"));
        Item item347 = itemRepository.findById(347L).orElseThrow(() -> new RuntimeException("Item not found"));

        for (int n = 0; n < 10; n++) {
            Delivery delivery = createDelivery();
            deliveryRepository.save(delivery);

            Order order = createOrder(member, delivery, uniqueId.incrementAndGet());
            orderRepository.save(order);

            for (int o = 0; o < 5; o++) {
                OrderItem orderItem = createOrderItem(order, item347);
                orderItemRepository.save(orderItem);
            }
        }

        // 데이터 검증
        assertThat(orderRepository.findAll()).hasSize(10);
        assertThat(orderItemRepository.findAll()).hasSize(50);
    }

    private Delivery createDelivery() {
        Delivery delivery = new Delivery();
        delivery.setAddress("Address " + random.nextInt(1000));
        delivery.setStatus(DeliveryStatus.values()[random.nextInt(DeliveryStatus.values().length)]);
        return delivery;
    }

    private Order createOrder(Member member, Delivery delivery, int uniqueId) {
        Order order = new Order();
        order.setDelivery(delivery);
        order.setMember(member);

        // UUID와 현재 시간을 사용하여 유일한 order_number 생성 (11자로 자름)
        String orderNumber = "Ord" + (UUID.randomUUID().toString().replace("-", "").substring(0, 3) + System.currentTimeMillis()).substring(0, 8);
        int maxLength = 11; // 데이터베이스에서 정의된 최대 길이
        if (orderNumber.length() > maxLength) {
            orderNumber = orderNumber.substring(0, maxLength);
        }
        order.setOrderNumber(orderNumber);

        order.setReceiverName(member.getName() + uniqueId);
        order.setReceiverPhone("010-5678-" + String.format("%04d", uniqueId));
        order.setStatus(OrderStatus.values()[random.nextInt(OrderStatus.values().length)]);
        return order;
    }

    private OrderItem createOrderItem(Order order, Item item) {
        OrderItem orderItem = new OrderItem();
        orderItem.setOrder(order);
        orderItem.setItem(item);
        orderItem.setCount(random.nextInt(10) + 1);
        orderItem.setPrice(item.getPrice());
        orderItem.setDiscount(item.getDiscount());

        // Calculate the discount price and ensure it's set
        if (item.getDiscount() != null && item.getDiscount().compareTo(BigDecimal.ZERO) > 0) {
            orderItem.setDiscountPrice(item.getPrice().subtract(item.getDiscount()));
        } else {
            orderItem.setDiscountPrice(item.getPrice());
        }

        orderItem.setTotalPrice(orderItem.getDiscountPrice().multiply(BigDecimal.valueOf(orderItem.getCount())));
        return orderItem;
    }
}