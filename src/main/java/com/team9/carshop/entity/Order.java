package com.team9.carshop.entity;

import com.team9.carshop.enums.OrderStatus;

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

import java.math.BigDecimal;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@SQLDelete(sql = "UPDATE orders SET is_deleted = true WHERE id = ?")
@Where(clause = "is_deleted = false")
@Table(name = "orders")
public class Order extends BaseEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "delivery_id")
    private Delivery delivery;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "member_id")
    private Member member;

    @OneToMany(mappedBy = "order")
    private List<OrderItem> orderItems = new ArrayList<>();

    @Enumerated(EnumType.STRING)
    private OrderStatus status = OrderStatus.ORDER;

    @Column(unique = true, length = 11, nullable = false)
    private String orderNumber;

    @Column(unique = true, length = 50, nullable = false)
    private String receiverName;

    @Column(unique = true, length = 20, nullable = false)
    private String receiverPhone;

    @Column(length = 500)
    private String requestMessage;

    @Column(precision = 12, scale = 2)
    private BigDecimal totalPrice;
}