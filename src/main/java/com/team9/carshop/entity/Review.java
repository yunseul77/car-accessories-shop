package com.team9.carshop.entity;

<<<<<<< HEAD
=======
import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
>>>>>>> dev
import jakarta.persistence.*;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.SQLDelete;

import java.math.BigDecimal;
import org.hibernate.annotations.Where;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor(access = AccessLevel.PROTECTED)
<<<<<<< HEAD
@SQLDelete(sql = "UPDATE review SET isDeleted = true WHERE id = ?")
@Where(clause = "isDeleted = false")
=======
//@SQLDelete(sql = "UPDATE review SET is_deleted = true WHERE id = ?")
//@Where(clause = "is_deleted = false")
@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "id")
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
>>>>>>> dev
public class Review extends BaseEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "review_id")
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "member_id")
    private Member member;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "item_id")
<<<<<<< HEAD
=======
    @JsonBackReference
>>>>>>> dev
    private Item item;

    @Column(length = 500)
    private String summary;

    @Lob
    private String description;

    @Column(length = 1000)
    private String imageUrl;

    @Column(precision = 2, scale = 1, nullable = false)
    private BigDecimal ratingValue;

<<<<<<< HEAD
=======
//    //소프트 딜리트를 위한 메서드인데 베이스엔티티가 프라이빗이라 오류뜸
//    public void setDeleted() {
//        this.is_deleted = true;
//    }
>>>>>>> dev
}