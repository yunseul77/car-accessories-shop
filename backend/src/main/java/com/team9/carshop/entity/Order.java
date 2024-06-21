package com.team9.carshop.entity;

import com.team9.carshop.enums.OrderStatus;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.Random;
import org.hibernate.annotations.SQLDelete;
import org.hibernate.annotations.Where;
import jakarta.persistence.*;
import java.util.ArrayList;
import java.util.List;

import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor///(access = AccessLevel.PROTECTED)
@SQLDelete(sql = "UPDATE orders SET is_deleted = true WHERE orders_id = ?")
@Where(clause = "is_deleted = false")
@Table(name = "orders")
public class Order extends BaseEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "orders_id")
    private Long id;

    @OneToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JoinColumn(name = "delivery_id")
    private Delivery delivery;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "member_id")
    private Member member;

    @OneToMany(mappedBy = "order", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<OrderItem> orderItems = new ArrayList<>();

    @Enumerated(EnumType.STRING)
    private OrderStatus status = OrderStatus.ORDER;

    @Column(unique = true, length = 11, nullable = false)
    private String orderNumber;

    @Column(length = 50, nullable = false)
    private String receiverName;

    @Column(length = 20, nullable = false)
    private String receiverPhone;

    @Column(length = 500)
    private String requestMessage;

    //== 주문번호 자동생성 메서드 ==//
    @PrePersist
    protected void OnCreate() {
        if (this.orderNumber == null) {
            this.orderNumber = addOrderNumber();
        }
    }

    private String addOrderNumber() {
        LocalDate now = LocalDate.now();
        DateTimeFormatter yyMMdd = DateTimeFormatter.ofPattern("yyMMdd");
        String create = now.format(yyMMdd);

        Random random = new Random();
        StringBuilder randomPart = new StringBuilder(5);
        for(int i = 0; i < 5; i++) {
            randomPart.append(random.nextInt(10));
        }
        return create + randomPart;
    }
}