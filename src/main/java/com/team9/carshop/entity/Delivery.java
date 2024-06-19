package com.team9.carshop.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import com.team9.carshop.enums.DeliveryStatus;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.SQLDelete;
import org.hibernate.annotations.Where;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor//(access = AccessLevel.PROTECTED) // 생성자 생성 x, 가짜 객체를 만들기 위한 허용
@SQLDelete(sql = "UPDATE delivery SET is_deleted = true WHERE delivery_id =?")
@Where(clause = "is_deleted = false")
public class Delivery extends BaseEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY) //순차적 숫자 부여
    @Column(name = "delivery_id") //제약조건
    private Long id;

    @OneToOne(fetch = FetchType.LAZY, mappedBy = "delivery")//지연로딩 필요시 부름, 딜리버리가 셋팅한거로 따라 가겠다
    private Order order;

    @Column(length = 500, nullable = false)
    private String address;

    @Enumerated(EnumType.STRING)//DB저장시 String 으로 저장
    private DeliveryStatus status = DeliveryStatus.ORDERED;

}