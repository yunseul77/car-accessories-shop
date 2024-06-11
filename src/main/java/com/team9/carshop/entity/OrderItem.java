package com.team9.carshop.entity;

<<<<<<< HEAD
=======
import java.math.BigDecimal;
>>>>>>> dev
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.SQLDelete;
import org.hibernate.annotations.Where;
import org.springframework.format.annotation.DateTimeFormat;
import jakarta.persistence.*;
import java.time.LocalDateTime;
import lombok.NoArgsConstructor;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor(access = AccessLevel.PUBLIC) // 접근 제어자를 PUBLIC으로 변경
<<<<<<< HEAD
@SQLDelete(sql = "UPDATE order_item SET is_deleted = true WHERE id = ?")
@Where(clause = "is_deleted = false")
=======
@SQLDelete(sql = "UPDATE order_item SET isDeleted = true WHERE id = ?")
@Where(clause = "isDeleted = false")
>>>>>>> dev

public class OrderItem extends BaseEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "orderitem_id")
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "order_id")
    private Order order;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "item_id")
    private Item item;

    @Column(nullable = false)
    private int count;

<<<<<<< HEAD
=======
    @Column(precision = 12, scale = 2)
    private BigDecimal price;

    @Column(precision = 4, scale = 2)
    private BigDecimal discount = BigDecimal.ZERO;

    @Column(precision = 12, scale = 2)
    private BigDecimal discountPrice;

    @Column(precision = 12, scale = 2)
    private BigDecimal totalPrice;


    //==discountPrice 자동계산 메서드==//
    @PrePersist
    @PreUpdate
    public void calculateDiscountPrice() {
        if (price != null && discount != null) {
            this.discountPrice = price.subtract(
                price.multiply(discount.divide(new BigDecimal(100))));
        } else {
            this.discountPrice = price;
        }
    }
>>>>>>> dev
}
