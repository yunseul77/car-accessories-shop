package com.team9.carshop.dto;

public class AuthRequestDTO {
  private String username;
  private String password;

  // Getter와 Setter 메서드
  public String getUsername() {
    return username;
  }

  public void setUsername(String username) {
    this.username = username;
  }

  public String getPassword() {
    return password;
  }

  public void setPassword(String password) {
    this.password = password;
  }
}
