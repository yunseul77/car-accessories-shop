package com.team9.carshop.dto;


public class RefreshTokenResponseDTO {
  private String accessToken;

  public RefreshTokenResponseDTO(String accessToken) {
    this.accessToken = accessToken;
  }

  // Getter 메서드
  public String getAccessToken() {
    return accessToken;
  }
}
