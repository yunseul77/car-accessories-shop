package com.team9.carshop.entity;

import jakarta.persistence.*;
import lombok.*;

import java.io.Serializable;
import org.hibernate.annotations.SQLDelete;
import org.hibernate.annotations.Where;

@Embeddable
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@EqualsAndHashCode
class CategoryItemId implements Serializable {

    private Long categoryId;
    private Long itemId;
}

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@SQLDelete(sql = "UPDATE category_item SET isDeleted = true WHERE category_id = ? AND item_id = ?")
@Where(clause = "isDeleted = false")
@Table(name = "category_item")
public class CategoryItem extends BaseEntity {

    @EmbeddedId
    private CategoryItemId categoryItemId;

    @MapsId("categoryId")
    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "category_id", nullable = false)
    private Category category;

    @MapsId("itemId")
    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "item_id", nullable = false)
    private Item item;

}