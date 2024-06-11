package com.team9.carshop.dto;

public class AuthResponseDTO {
  private String token;

  public AuthResponseDTO(String token) {
    this.token = token;
  }

  // Getter 메서드
  public String getToken() {
    return token;
  }
}
