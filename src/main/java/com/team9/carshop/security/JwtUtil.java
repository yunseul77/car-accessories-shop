package com.team9.carshop.security;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.ExpiredJwtException;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.security.Keys;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import javax.crypto.SecretKey;
import java.util.Base64;
import java.util.Date;

@Component // 이 클래스를 Spring의 빈으로 등록
public class JwtUtil {

  @Value("${jwt.secret}") // application.properties 파일에서 jwt.secret 값을 가져옴
  private String secret;

  @Value("${jwt.access.expiration}") // application.properties 파일에서 access token의 만료 시간을 가져옴
  private Long accessExpiration;

  @Value("${jwt.refresh.expiration}") // application.properties 파일에서 refresh token의 만료 시간을 가져옴
  private Long refreshExpiration;

  // 비밀 키를 가져오기 위한 메서드
  private SecretKey getSigningKey() {
    // Base64로 인코딩된 비밀 키를 디코딩하여 SecretKey 객체 생성
    byte[] keyBytes = Base64.getDecoder().decode(secret); // 비밀 키 디코딩
    return Keys.hmacShaKeyFor(keyBytes); // SecretKey 객체 생성
  }

  // Access Token을 생성하는 메서드
  public String generateAccessToken(String username, Long memberId) {
    return Jwts.builder()
        .setSubject(username) // 토큰의 주제(여기서는 사용자 이름)를 설정
        .claim("memberId", memberId) // 토큰에 memberId 클레임 추가
        .setIssuedAt(new Date()) // 토큰 발행 시간을 현재 시간으로 설정
        .setExpiration(new Date(System.currentTimeMillis() + accessExpiration)) // 토큰 만료 시간을 설정
        .signWith(getSigningKey(), SignatureAlgorithm.HS256) // 서명 알고리즘과 비밀 키를 설정
        .compact(); // JWT 토큰을 생성하여 문자열로 반환
  }

  // Refresh Token을 생성하는 메서드
  public String generateRefreshToken(String username, Long memberId) {
    return Jwts.builder()
        .setSubject(username) // 토큰의 주제(여기서는 사용자 이름)를 설정
        .claim("memberId", memberId) // 토큰에 memberId 클레임 추가
        .setIssuedAt(new Date()) // 토큰 발행 시간을 현재 시간으로 설정
        .setExpiration(new Date(System.currentTimeMillis() + refreshExpiration)) // 토큰 만료 시간을 설정
        .signWith(getSigningKey(), SignatureAlgorithm.HS256) // 서명 알고리즘과 비밀 키를 설정
        .compact(); // JWT 토큰을 생성하여 문자열로 반환
  }

  // 토큰에서 사용자 이름을 추출하는 메서드
  public String getUsernameFromToken(String token) {
    try {
      Claims claims = Jwts.parserBuilder()
          .setSigningKey(getSigningKey()) // 서명 검증을 위한 비밀 키를 설정
          .build()
          .parseClaimsJws(token) // 토큰을 파싱
          .getBody();
      return claims.getSubject(); // 클레임에서 사용자 이름을 추출하여 반환
    } catch (ExpiredJwtException e) {
      return null; // 토큰이 만료된 경우 null 반환
    }
  }

  // 토큰에서 memberId를 추출하는 메서드
  public Long getMemberIdFromToken(String token) {
    try {
      Claims claims = Jwts.parserBuilder()
          .setSigningKey(getSigningKey()) // 서명 검증을 위한 비밀 키를 설정
          .build()
          .parseClaimsJws(token) // 토큰을 파싱
          .getBody();
      return claims.get("memberId", Long.class); // 클레임에서 memberId를 추출하여 반환
    } catch (ExpiredJwtException e) {
      return null; // 토큰이 만료된 경우 null 반환
    }
  }

  // 토큰이 유효한지 검증하는 메서드
  public boolean validateToken(String token) {
    try {
      Jwts.parserBuilder()
          .setSigningKey(getSigningKey()) // 서명 검증을 위한 비밀 키를 설정
          .build()
          .parseClaimsJws(token); // 토큰을 파싱
      return true; // 토큰이 유효하면 true 반환
    } catch (Exception e) {
      return false; // 토큰이 유효하지 않으면 false 반환
    }
  }
}