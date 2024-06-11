package com.team9.carshop.entity;

import com.team9.carshop.enums.MemberRole;
import java.util.ArrayList;
import java.util.List;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
<<<<<<< HEAD
=======
import lombok.Builder;
>>>>>>> dev
import lombok.Getter;
import jakarta.persistence.*;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.SQLDelete;
import org.hibernate.annotations.Where;

<<<<<<< HEAD
@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@SQLDelete(sql = "UPDATE member SET is_deleted = true WHERE id = ?")
@Where(clause = "is_deleted = false")
=======
@Builder
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor//(access = AccessLevel.PROTECTED)
@SQLDelete(sql = "UPDATE member SET isDeleted = true WHERE id = ?")
@Where(clause = "isDeleted = false")
@Entity
>>>>>>> dev
public class Member extends BaseEntity {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "member_id")
    private Long id;

    @OneToMany(mappedBy = "member")
    private List<Review> reviews = new ArrayList<>();

    @OneToMany(mappedBy = "member")
    private List<Item> items = new ArrayList<>();

    @OneToMany(mappedBy = "member")
    private List<Order> orders = new ArrayList<>();

<<<<<<< HEAD
=======
    @Column(length = 50, nullable = false, unique = true)
    private String loginId;

    @Column(length = 50, nullable = false)
    private String password;

>>>>>>> dev
    @Column(length = 50, nullable = false)
    private String name;

    @Column(length = 255, nullable = false)
    private String email;

    @Column(length = 20, nullable = false)
    private String phone;

    @Column(length = 255, nullable = false)
    private String address;

    @Enumerated(EnumType.STRING)
    private MemberRole role = MemberRole.USER;

}