package com.team9.carshop.exception;

// SignupException 클래스: 회원가입 중 문제가 생겼을 때 사용할 예외 클래스
public class SignupException extends RuntimeException {
  public SignupException(String message) {
    super(message);
  }
}

