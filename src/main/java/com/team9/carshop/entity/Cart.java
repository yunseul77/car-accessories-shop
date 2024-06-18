package com.team9.carshop.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import java.util.ArrayList;
import java.util.List;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.SQLDelete;
import org.hibernate.annotations.Where;

@Getter @Setter
@AllArgsConstructor
@NoArgsConstructor //(access = AccessLevel.PROTECTED)
@SQLDelete(sql = "UPDATE Category SET is_deleted = true WHERE cart_id = ?")
@Where(clause = "is_deleted = false")
@Entity
public class Cart extends BaseEntity {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "cart_id")
    private Long id;

    @OneToMany(mappedBy = "cart", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<CartItem> Items = new ArrayList<>();

}

