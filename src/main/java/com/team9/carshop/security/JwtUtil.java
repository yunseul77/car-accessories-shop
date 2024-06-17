package com.team9.carshop.security;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import javax.crypto.spec.SecretKeySpec;
import java.security.Key;
import java.util.Base64;
import java.util.Date;

@Component // 이 클래스를 Spring의 빈으로 등록
public class JwtUtil {

  // application.properties 파일에서 jwt.secret 값을 가져옴
  @Value("${jwt.secret}")
  private String secret;

  // application.properties 파일에서 access token의 만료 시간을 가져옴
  @Value("${jwt.access.expiration}")
  private Long accessExpiration;

  // application.properties 파일에서 refresh token의 만료 시간을 가져옴
  @Value("${jwt.refresh.expiration}")
  private Long refreshExpiration;

  // 비밀 키를 가져오기 위한 메서드
  private Key getSigningKey() {
    // Base64로 인코딩된 비밀 키를 디코딩하여 바이트 배열로 변환
    byte[] keyBytes = Base64.getDecoder().decode(secret);
    // HMAC-SHA 알고리즘에 사용할 비밀 키 객체를 생성
    return new SecretKeySpec(keyBytes, SignatureAlgorithm.HS256.getJcaName());
  }

  // Access Token을 생성하는 메서드
  public String generateAccessToken(String username) {
    return Jwts.builder()
        .setSubject(username) // 토큰의 주제(여기서는 사용자 이름)를 설정
        .setIssuedAt(new Date()) // 토큰 발행 시간을 현재 시간으로 설정
        .setExpiration(new Date(System.currentTimeMillis() + accessExpiration)) // 토큰 만료 시간을 설정
        .signWith(SignatureAlgorithm.HS256, getSigningKey()) // 서명 알고리즘과 비밀 키를 설정
        .compact(); // JWT 토큰을 생성하여 문자열로 반환
  }

  // Refresh Token을 생성하는 메서드
  public String generateRefreshToken(String username) {
    return Jwts.builder()
        .setSubject(username) // 토큰의 주제(여기서는 사용자 이름)를 설정
        .setIssuedAt(new Date()) // 토큰 발행 시간을 현재 시간으로 설정
        .setExpiration(new Date(System.currentTimeMillis() + refreshExpiration)) // 토큰 만료 시간을 설정
        .signWith(SignatureAlgorithm.HS256, getSigningKey()) // 서명 알고리즘과 비밀 키를 설정
        .compact(); // JWT 토큰을 생성하여 문자열로 반환
  }

  // 토큰에서 사용자 이름을 추출하는 메서드
  public String getUsernameFromToken(String token) {
    Claims claims = Jwts.parser()
        .setSigningKey(getSigningKey()) // 서명 검증을 위한 비밀 키를 설정
        .parseClaimsJws(token) // 토큰을 파싱
        .getBody();

    return claims.getSubject(); // 클레임에서 사용자 이름을 추출하여 반환
  }

  // 토큰이 유효한지 검증하는 메서드
  public boolean validateToken(String token) {
    try {
      Jwts.parser()
          .setSigningKey(getSigningKey())
          .parseClaimsJws(token);
      return true; // 토큰이 유효하면 true 반환
    } catch (Exception e) {
      return false; // 토큰이 유효하지 않으면 false 반환
    }
  }
}
