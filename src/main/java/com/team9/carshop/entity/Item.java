package com.team9.carshop.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.team9.carshop.dto.ItemDto;
import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import jakarta.persistence.*;
import lombok.*;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;
import org.hibernate.annotations.SQLDelete;
import org.hibernate.annotations.Where;

@Builder
@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@SQLDelete(sql = "UPDATE Item SET is_deleted = true WHERE item_id = ?")
@Where(clause = "is_deleted = false")
public class Item extends BaseEntity {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "item_id")
    private Long id;

    @Builder.Default
    @OneToMany(mappedBy = "item", cascade = CascadeType.REMOVE)
    private List<Review> reviews = new ArrayList<>();

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "member_id")
    private Member member;

    @Builder.Default
    @ManyToMany
    @JoinTable(name = "category_item",
        joinColumns = @JoinColumn(name = "item_id"),
        inverseJoinColumns = @JoinColumn(name = "category_id"))
    private List<Category> categories = new ArrayList<>();

    @Column(length = 255, nullable = false)
    private String name;

    @Column(nullable = false, precision = 12, scale = 2)
    private BigDecimal price;

    @Builder.Default
    @Column(precision = 4, scale = 2)
    private BigDecimal discount = BigDecimal.ZERO;

    @Column(precision = 12, scale = 2)
    private BigDecimal discountPrice;

    @Column(nullable = false)
    private int stockQuantity;

    @Column(length = 1000)
    private String titleImageUrl;

    @Column(length = 1000)
    private String contentImageUrl;

    @Lob
    private String description;

    // Item -> ItemDto 변환 메서드
    public static ItemDto toDto(Item item) {
        ItemDto itemDto = new ItemDto();

        itemDto.setId(item.getId());
        itemDto.setName(item.getName());
        itemDto.setPrice(item.getPrice());
        itemDto.setDiscount(item.getDiscount());
        itemDto.setDiscountPrice(item.getDiscountPrice());
        itemDto.setStockQuantity(item.getStockQuantity());
        itemDto.setTitleImageUrl(item.getTitleImageUrl());
        itemDto.setContentImageUrl(item.getContentImageUrl());
        itemDto.setDescription(item.getDescription());

        return itemDto;
    }

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

    public void addCategory(Category category) {
        this.categories.add(category);
    }
}