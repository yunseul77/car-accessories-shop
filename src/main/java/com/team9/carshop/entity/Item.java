package com.team9.carshop.entity;

<<<<<<< HEAD
=======
import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
>>>>>>> dev
import jakarta.persistence.*;
import lombok.*;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;
import org.hibernate.annotations.SQLDelete;
import org.hibernate.annotations.Where;

<<<<<<< HEAD
=======
@Builder
>>>>>>> dev
@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor(access = AccessLevel.PROTECTED)
<<<<<<< HEAD
@SQLDelete(sql = "UPDATE Item SET isDeleted = true WHERE id = ?")
@Where(clause = "isDeleted = false")
=======
@SQLDelete(sql = "UPDATE Item SET is_deleted = true WHERE id = ?")
@Where(clause = "is_deleted = false")
@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "id")
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
>>>>>>> dev
public class Item extends BaseEntity {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "item_id")
    private Long id;

    @OneToMany(mappedBy = "item")
    private List<Review> reviews = new ArrayList<>();

    @OneToMany(mappedBy = "item")
<<<<<<< HEAD
    private List<CategoryItem> categoryItems = new ArrayList<>();
=======
    private List<OrderItem> orderItems = new ArrayList<>();
>>>>>>> dev

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "member_id")
    private Member member;

<<<<<<< HEAD
=======
    @ManyToMany
    private List<Category> categories = new ArrayList<>();

>>>>>>> dev
    @Column(length = 255, nullable = false)
    private String name;

    @Column(nullable = false, precision = 12, scale = 2)
    private BigDecimal price;

    @Column(precision = 4, scale = 2)
    private BigDecimal discount = BigDecimal.ZERO;

<<<<<<< HEAD
=======
    @Column(precision = 12, scale = 2)
    private BigDecimal discountPrice;

>>>>>>> dev
    @Column(nullable = false)
    private int stockQuantity;

    @Column(length = 1000)
    private String imageUrl;

    @Lob
    private String description;

<<<<<<< HEAD
=======
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