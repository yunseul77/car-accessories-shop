package com.team9.carshop.dto;

public class AuthRequestDTO {
  private String loginId;
  private String password;

  // Getter와 Setter 메서드
  public String getLoginId() {
    return loginId;
  }

  public void setLoginId(String loginId) {
    this.loginId = loginId;
  }

  public String getPassword() {
    return password;
  }

  public void setPassword(String password) {
    this.password = password;
  }
}
