package com.team9.carshop.controller;

import com.team9.carshop.dto.AuthRequestDTO;
import com.team9.carshop.dto.AuthResponseDTO;
import com.team9.carshop.dto.RefreshTokenResponseDTO;
import com.team9.carshop.security.JwtUtil;
import com.team9.carshop.security.CustomUserDetails;
import com.team9.carshop.service.MemberUserDetailsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.web.bind.annotation.*;

import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletResponse;
import java.io.IOException;

@RestController // 이 클래스를 RESTful 웹 서비스의 컨트롤러로 지정
@RequestMapping("/auth") // 이 클래스의 기본 URL 경로를 /auth로 설정
public class AuthController {

  @Autowired // Spring이 AuthenticationManager를 주입하도록 설정
  private AuthenticationManager authenticationManager;

  @Autowired // Spring이 JwtUtil을 주입하도록 설정
  private JwtUtil jwtUtil;

  @Autowired // Spring이 MemberUserDetailsService를 주입하도록 설정
  private MemberUserDetailsService userDetailsService;

  @PostMapping("/login") // HTTP POST 요청을 처리
  public AuthResponseDTO login(@RequestBody AuthRequestDTO authRequest, HttpServletResponse response) throws AuthenticationException, IOException {
    // 사용자의 인증 정보를 확인
    Authentication authentication = authenticationManager.authenticate(
        new UsernamePasswordAuthenticationToken(authRequest.getUsername(), authRequest.getPassword()));

    // 인증된 사용자 정보를 가져옴
    CustomUserDetails userDetails = (CustomUserDetails) authentication.getPrincipal();
    Long memberId = userDetails.getMemberId(); // 사용자 ID를 가져옴
    // Access Token과 Refresh Token을 생성
    String accessToken = jwtUtil.generateAccessToken(userDetails.getUsername(), memberId);
    String refreshToken = jwtUtil.generateRefreshToken(userDetails.getUsername(), memberId);

    // 쿠키에 Access Token과 Refresh Token을 설정
    Cookie accessTokenCookie = new Cookie("accessToken", accessToken);
    accessTokenCookie.setHttpOnly(true); // 클라이언트 측 스크립트에서 쿠키를 사용할 수 없도록 설정
    accessTokenCookie.setPath("/"); // 쿠키의 유효 경로를 설정
    response.addCookie(accessTokenCookie); // 응답에 쿠키를 추가

    Cookie refreshTokenCookie = new Cookie("refreshToken", refreshToken);
    refreshTokenCookie.setHttpOnly(true); // 클라이언트 측 스크립트에서 쿠키를 사용할 수 없도록 설정
    refreshTokenCookie.setPath("/"); // 쿠키의 유효 경로를 설정
    response.addCookie(refreshTokenCookie); // 응답에 쿠키를 추가

    // Access Token과 Refresh Token을 응답
    return new AuthResponseDTO(accessToken, refreshToken);
  }

  @PostMapping("/refresh") // HTTP POST 요청을 처리
  public RefreshTokenResponseDTO refresh(@CookieValue(value = "refreshToken") String refreshToken, HttpServletResponse response) {
    // Refresh Token이 유효한지 검증
    if (jwtUtil.validateToken(refreshToken)) {
      // Refresh Token에서 사용자 ID를 추출
      Long memberId = jwtUtil.getMemberIdFromToken(refreshToken);
      // 새로운 Access Token을 생성
      String newAccessToken = jwtUtil.generateAccessToken(jwtUtil.getUsernameFromToken(refreshToken), memberId);

      // 새로운 Access Token을 응답
      Cookie accessTokenCookie = new Cookie("accessToken", newAccessToken);
      accessTokenCookie.setHttpOnly(true); // 클라이언트 측 스크립트에서 쿠키를 사용할 수 없도록 설정
      accessTokenCookie.setPath("/"); // 쿠키의 유효 경로를 설정
      response.addCookie(accessTokenCookie); // 응답에 쿠키를 추가

      return new RefreshTokenResponseDTO(newAccessToken);
    } else {
      throw new RuntimeException("Invalid Refresh Token");
    }
  }
}
