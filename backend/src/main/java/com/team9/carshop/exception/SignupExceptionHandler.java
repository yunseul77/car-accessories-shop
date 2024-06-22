package com.team9.carshop.exception;

import java.util.HashMap;
import java.util.Map;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;

@ControllerAdvice // 애플리케이션 전역에 발생하는 예외를 처리할 수 있음.
public class SignupExceptionHandler {

  //입력한 정보가 잘못된 경우
  @ExceptionHandler/*특정 예외가 밠생시 어떻게 처리할지 정의*/(MethodArgumentNotValidException.class) //@Vailed 값을 사용하여 유효성 검사가 실패하면 예외발생
  @ResponseStatus(HttpStatus.BAD_REQUEST) //400에러
  public ResponseEntity<Map<String, String>> handleValidationExceptions(MethodArgumentNotValidException ex) {
    Map<String, String> errors = new HashMap<>();
    ex.getBindingResult().getFieldErrors().forEach(error ->
        errors.put(error.getField(), error.getDefaultMessage()));
    return new ResponseEntity<>(errors, HttpStatus.BAD_REQUEST);
  }

  // 비밀번호가 일치하지 않은 경우
  @ExceptionHandler(SignupException.class)
  @ResponseStatus(HttpStatus.BAD_REQUEST)
  public ResponseEntity<Map<String, String>> handleSingupException(SignupException ex){
    Map<String, String> errors = new HashMap<>();
    errors.put("error", ex.getMessage());
    return new ResponseEntity<>(errors, HttpStatus.BAD_REQUEST);
  }

}
