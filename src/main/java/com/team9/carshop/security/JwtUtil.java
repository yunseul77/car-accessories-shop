package com.team9.carshop.security;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.security.Keys;
import java.util.Date;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import java.security.Key;
import java.util.Base64;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;
import io.jsonwebtoken.security.Keys;



@Component //
public class JwtUtil {

  // 시크릿 키 설정
  @Value("${jwt.secret}")
  private String secret;

  // 만료시간 설정
  @Value("${jwt.expiration}")
  private Long expiration;

  //시크릿키 가져오기, BASE64 인코딩된 비밀키를 디코딩
  private Key getsigngkey(){
    byte[] keyBytes = Base64.getDecoder().decode(secret);
    return Keys.hmacShaKeyFor(keyBytes); //HMAC-SHA 알고리즘 사용하여 시크릿 키 생성
  }

  //jwt 토큰을 생성하는 메서드
  public String generateToken(String username){
    return Jwts.builder()
        .setSubject(username) // 사용자 이름 설정
        .setIssuedAt(new Date()) // 토큰 발생시간을 현시간으로 설정
        .setExpiration(new Date(System.currentTimeMillis() + expiration)) // 토큰만료시간 설정
        .signWith(getsigngkey(), SignatureAlgorithm.HS256) // 서명 알고리즘과 시크릿 키를 설정
        .compact(); //토큰을 생성하여 문자열로 반환
  }

  //토큰에서 사용자 이름을 가져오기
  public String getUsernameFromToken(String token){
    Claims claims = Jwts.parserBuilder() // 토큰을 파싱하여 클레임(토큰정보)를 가져옴
        .setSigningKey(getsigngkey()) //서명 검증용 시크릿 키 설정
        .build()
        .parseClaimsJws(token) // 토큰을 파싱
        .getBody();

    return  claims.getSubject(); // 클레임에서 사용자 이름을 추출후 반환
  }

  // 토큰을 유효성 검증
  public boolean vaildateToken(String token){
    try{ // 토큰을 파싱하여 검증
      Jwts.parserBuilder()
          .setSigningKey(getsigngkey())
          .build()
          .parseClaimsJws(token);
      return true; //토큰이 유효하면 반환
    } catch (Exception e){
      return false; // 토큰이 유효하지 못하면 반환
    }
  }
}
