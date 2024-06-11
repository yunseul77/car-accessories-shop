package com.team9.carshop.entity;

<<<<<<< HEAD
=======
import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
>>>>>>> dev
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

@Entity
<<<<<<< HEAD
=======
@Builder
>>>>>>> dev
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor(access = AccessLevel.PROTECTED)
<<<<<<< HEAD
@SQLDelete(sql = "UPDATE member SET isDeleted = true WHERE id = ?")
@Where(clause = "isDeleted = false")
=======
@SQLDelete(sql = "UPDATE member SET is_deleted = true WHERE id = ?")
@Where(clause = "is_deleted = false")
@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "id")
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
>>>>>>> dev
public class Member extends BaseEntity {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "member_id")
    private Long id;

<<<<<<< HEAD
    @OneToMany(mappedBy = "member")
=======
    @OneToMany(mappedBy = "member", fetch = FetchType.LAZY)
    @JsonManagedReference
>>>>>>> dev
    private List<Review> reviews = new ArrayList<>();

    @OneToMany(mappedBy = "member")
    private List<Item> items = new ArrayList<>();

    @OneToMany(mappedBy = "member")
<<<<<<< HEAD
    private List<Order> orders = new ArrayList<>();

=======
    @JsonBackReference
    private List<Order> orders = new ArrayList<>();

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