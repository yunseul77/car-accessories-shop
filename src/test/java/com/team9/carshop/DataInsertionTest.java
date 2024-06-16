package com.team9.carshop;

import com.team9.carshop.entity.*;
import com.team9.carshop.enums.DeliveryStatus;
import com.team9.carshop.enums.MemberRole;
import com.team9.carshop.enums.OrderStatus;
import com.team9.carshop.repository.*;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.annotation.Commit;
import org.springframework.transaction.annotation.Transactional;

import java.math.BigDecimal;
import java.util.List;
import java.util.Random;
import java.util.concurrent.atomic.AtomicInteger;

import static org.assertj.core.api.Assertions.assertThat;

@SpringBootTest
@Transactional
@Commit
public class DataInsertionTest {

    @Autowired
    private CartRepository cartRepository;

    @Autowired
    private CartItemRepository cartItemRepository;

    @Autowired
    private CategoryRepository categoryRepository;

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

    @Autowired
    private ReviewRepository reviewRepository;

    private final Random random = new Random();
    private final AtomicInteger uniqueId = new AtomicInteger(0);

    @Test
    public void initializeData() {
        // 여러 개의 회원 추가
        for (int i = 0; i < 10; i++) {
            Member member = createMember();
            memberRepository.save(member);

            // 여러 개의 카테고리 추가
            for (int j = 0; j < 3; j++) {
                Category category = createCategory();
                categoryRepository.save(category);

                // 여러 개의 상품 추가
                for (int k = 0; k < 5; k++) {
                    Item item = createItem(category, member);
                    itemRepository.save(item);

                    // 여러 개의 리뷰 추가
                    for (int l = 0; l < 3; l++) {
                        Review review = createReview(member, item);
                        reviewRepository.save(review);
                    }
                }
            }

            // 장바구니 및 장바구니 아이템 추가
            Cart cart = new Cart();
            cartRepository.save(cart);

            for (int m = 0; m < 5; m++) {
                CartItem cartItem = createCartItem(cart);
                cartItemRepository.save(cartItem);
            }

            // 주문 및 주문 아이템 추가
            for (int n = 0; n < 5; n++) {
                Delivery delivery = createDelivery();
                deliveryRepository.save(delivery);

                Order order = createOrder(member, delivery, uniqueId.incrementAndGet()); // 주문 번호에 고유 번호 추가
                orderRepository.save(order);

                for (int o = 0; o < 5; o++) {
                    OrderItem orderItem = createOrderItem(order, itemRepository.findAll().get(random.nextInt((int) itemRepository.count())));
                    orderItemRepository.save(orderItem);
                }
            }
        }

        // 데이터 검증
        assertThat(memberRepository.findAll()).hasSize(10);
        assertThat(categoryRepository.findAll()).hasSize(30);
        assertThat(itemRepository.findAll()).hasSize(150);
        assertThat(cartRepository.findAll()).hasSize(10);
        assertThat(cartItemRepository.findAll()).hasSize(50);
        assertThat(orderRepository.findAll()).hasSize(50);
        assertThat(orderItemRepository.findAll()).hasSize(250);
        assertThat(reviewRepository.findAll()).hasSize(450);
    }

    private Member createMember() {
        int id = uniqueId.incrementAndGet();
        return Member.builder()
            .loginId("login" + id)
            .password("password" + id)
            .name("Member Name" + id)
            .email("member" + id + "@example.com")
            .phone("010-1234-" + String.format("%04d", id))
            .address("Address " + id)
            .role(MemberRole.values()[random.nextInt(MemberRole.values().length)])
            .build();
    }

    private Category createCategory() {
        Category category = new Category();
        category.setName("Category " + random.nextInt(100));
        return category;
    }

    private Item createItem(Category category, Member member) {
        Item item = Item.builder()
            .name("Product " + random.nextInt(1000))
            .price(BigDecimal.valueOf(random.nextDouble() * 100))
            .discount(BigDecimal.valueOf(random.nextInt(50)))
            .stockQuantity(random.nextInt(100))
            .titleImageUrl("http://example.com/title" + random.nextInt(1000))
            .contentImageUrl("http://example.com/content" + random.nextInt(1000))
            .description("Description " + random.nextInt(1000))
            .categories(List.of(category))
            .member(member)
            .build();
        item.calculateDiscountPrice();
        return item;
    }

    private Review createReview(Member member, Item item) {
        Review review = new Review();
        review.setMember(member);
        review.setItem(item);
        review.setSummary("Summary " + random.nextInt(1000));
        review.setDescription("Description " + random.nextInt(1000));
        review.setImageUrl("http://example.com/image" + random.nextInt(1000));
        review.setRatingValue(BigDecimal.valueOf(random.nextDouble() * 5).setScale(1, BigDecimal.ROUND_HALF_UP));
        return review;
    }

    private CartItem createCartItem(Cart cart) {
        CartItem cartItem = new CartItem();
        cartItem.setProductId("Product" + random.nextInt(1000));
        cartItem.setQuantity(random.nextInt(10) + 1);
        cartItem.setCart(cart);
        return cartItem;
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
        order.setOrderNumber("Order" + uniqueId);
        order.setReceiverName(member.getName() + uniqueId); // 고유한 receiver name 설정
        order.setReceiverPhone("010-5678-" + String.format("%04d", uniqueId)); // 고유한 receiver phone 설정
        order.setStatus(OrderStatus.values()[random.nextInt(OrderStatus.values().length)]);
        order.setTotalPrice(BigDecimal.valueOf(random.nextDouble() * 1000));
        return order;
    }

    private OrderItem createOrderItem(Order order, Item item) {
        OrderItem orderItem = new OrderItem();
        orderItem.setOrder(order);
        orderItem.setItem(item);
        orderItem.setCount(random.nextInt(10) + 1);
        orderItem.setPrice(item.getPrice());
        orderItem.setDiscount(item.getDiscount());
        orderItem.calculateDiscountPrice();
        orderItem.setTotalPrice(orderItem.getDiscountPrice().multiply(BigDecimal.valueOf(orderItem.getCount())));
        return orderItem;
    }
}