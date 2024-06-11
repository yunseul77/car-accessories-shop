package com.team9.carshop.entity;

import jakarta.persistence.*;
import java.util.ArrayList;
import lombok.*;
import org.hibernate.annotations.SQLDelete;
import org.hibernate.annotations.Where;
import java.util.List;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@SQLDelete(sql = "UPDATE Category SET is_deleted = true WHERE id = ?")
@Where(clause = "is_deleted = false")
public class Category extends BaseEntity {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "category_id")
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "parent_id")
    private Category parent;

    @ManyToMany
    private List<Item> itemList = new ArrayList<>();

    @Column(name = "category_name", length = 255, nullable = false)
    private String name;
}