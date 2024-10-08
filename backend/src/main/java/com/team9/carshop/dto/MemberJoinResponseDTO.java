package com.team9.carshop.dto;


import lombok.AllArgsConstructor;
import lombok.Data;

@Data
public class MemberJoinResponseDTO {
  private Long id;
  private String loginId;
  private String name;
  private String email;
  private String phone;
  private String address;
  private String role;


  public MemberJoinResponseDTO(Long id, String loginId, String name, String email, String phone, String address, String role) {
    this.id = id;
    this.loginId = loginId;
    this.name = name;
    this.email = email;
    this.phone = phone;
    this.address = address;
    this.role = role;
  }
}
