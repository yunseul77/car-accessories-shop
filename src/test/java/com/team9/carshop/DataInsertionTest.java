package com.team9.carshop;

import com.team9.carshop.entity.*;
import com.team9.carshop.enums.*;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.test.annotation.Rollback;
import org.springframework.test.context.junit.jupiter.SpringExtension;
import org.springframework.transaction.annotation.Transactional;
import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;
import java.util.Random;

@ExtendWith(SpringExtension.class)
@DataJpaTest
@AutoConfigureTestDatabase(replace = AutoConfigureTestDatabase.Replace.NONE)
public class DataInsertionTest {

    @PersistenceContext
    private EntityManager entityManager;

    @Test
    @Transactional
    @Rollback(false)
    public void insertTestData() {
        // Members
        List<Member> members = new ArrayList<>();
        for (int i = 1; i <= 5; i++) {
            Member member = Member.builder()
                .loginId("login" + i)
                .password("password" + i)
                .name("Member" + i)
                .email("member" + i + "@example.com")
                .phone("010-1234-567" + i)
                .address("Address " + i)
                .role(MemberRole.USER)
                .build();
            entityManager.persist(member);
            members.add(member);
        }

        // Categories
        List<Category> categories = new ArrayList<>();
        for (int i = 1; i <= 3; i++) {
            Category category = new Category();
            category.setName("Category " + i);
            entityManager.persist(category);
            categories.add(category);
        }

        // Items
        List<Item> items = new ArrayList<>();
        for (int i = 1; i <= 10; i++) {
            Item item = Item.builder()
                .name("Item" + i)
                .price(BigDecimal.valueOf(10000 + i * 1000))
                .discount(BigDecimal.valueOf(10))
                .stockQuantity(100)
                .titleImageUrl("http://example.com/image" + i)
                .description("Description of Item " + i)
                .member(members.get(new Random().nextInt(members.size())))
                .build();
            item.setCategories(categories);
            entityManager.persist(item);
            items.add(item);
        }

        // Orders and OrderItems
        for (int i = 1; i <= 5; i++) {
            Order order = new Order();
            order.setOrderNumber("ORD" + i);
            order.setReceiverName("Receiver" + i);
            order.setReceiverPhone("010-9876-543" + i);
            order.setRequestMessage("Please deliver between 9AM and 5PM.");
            order.setTotalPrice(BigDecimal.valueOf(50000 + i * 10000));
            order.setStatus(OrderStatus.ORDER);
            order.setMember(members.get(new Random().nextInt(members.size())));

            // Delivery
            Delivery delivery = new Delivery();
            delivery.setAddress("Delivery Address " + i);
            delivery.setStatus(DeliveryStatus.ORDERED);
            delivery.setOrder(order);
            entityManager.persist(delivery);
            order.setDelivery(delivery);

            entityManager.persist(order);

            for (int j = 1; j <= 3; j++) {
                OrderItem orderItem = new OrderItem();
                orderItem.setOrder(order);
                orderItem.setItem(items.get(new Random().nextInt(items.size())));
                orderItem.setCount(1);
                orderItem.setPrice(BigDecimal.valueOf(20000 + j * 5000));
                orderItem.setDiscount(BigDecimal.valueOf(5));
                entityManager.persist(orderItem);
            }
        }

        // Reviews
        for (int i = 1; i <= 10; i++) {
            Review review = new Review();
            review.setSummary("Review summary " + i);
            review.setDescription("Review description " + i);
            review.setImageUrl("http://example.com/review" + i);
            review.setRatingValue(BigDecimal.valueOf(4.5));
            review.setMember(members.get(new Random().nextInt(members.size())));
            review.setItem(items.get(new Random().nextInt(items.size())));
            entityManager.persist(review);
        }

        // Carts and CartItems
        for (int i = 1; i <= 3; i++) {
            Cart cart = new Cart();
            entityManager.persist(cart);

            for (int j = 1; j <= 3; j++) {
                CartItem cartItem = new CartItem();
                cartItem.setCart(cart);
                cartItem.setProductId("PID" + j);
                cartItem.setQuantity(new Random().nextInt(5) + 1);
                entityManager.persist(cartItem);
            }
        }
    }
}