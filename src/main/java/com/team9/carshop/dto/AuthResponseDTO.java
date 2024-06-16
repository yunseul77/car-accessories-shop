package com.team9.carshop.dto;


public class AuthResponseDTO {
  private String accessToken;
  private String refreshToken;

  public AuthResponseDTO(String accessToken, String refreshToken) {
    this.accessToken = accessToken;
    this.refreshToken = refreshToken;
  }

  // Getter 메서드
  public String getAccessToken() {
    return accessToken;
  }

  public String getRefreshToken() {
    return refreshToken;
  }
}
