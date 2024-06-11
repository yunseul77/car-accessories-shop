package com.team9.carshop.entity;

import jakarta.persistence.*;
<<<<<<< HEAD
=======
import java.util.ArrayList;
>>>>>>> dev
import lombok.*;
import org.hibernate.annotations.SQLDelete;
import org.hibernate.annotations.Where;

<<<<<<< HEAD
=======
import java.util.List;

>>>>>>> dev

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor(access = AccessLevel.PROTECTED)
<<<<<<< HEAD
@SQLDelete(sql = "UPDATE Category SET is_deleted = true WHERE id = ?")
@Where(clause = "is_deleted = false")
=======
@SQLDelete(sql = "UPDATE Category SET isDeleted = true WHERE id = ?")
@Where(clause = "isDeleted = false")
>>>>>>> dev
public class Category extends BaseEntity {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "category_id")
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "parent_id")
    private Category parent;

<<<<<<< HEAD
    @Column(length = 255, nullable = false)
    private String name;

=======
    @ManyToMany
    @JoinTable(name = "category_item",
            joinColumns = @JoinColumn(name = "category_id"),
            inverseJoinColumns = @JoinColumn(name = "item_id"))
    private List<Item> items = new ArrayList<>();

    @Column(name = "category_name", length = 255, nullable = false)
    private String name;
>>>>>>> dev
}