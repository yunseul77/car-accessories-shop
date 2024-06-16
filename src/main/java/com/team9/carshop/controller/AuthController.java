package com.team9.carshop.controller;


import com.team9.carshop.dto.AuthRequestDTO;
import com.team9.carshop.dto.AuthResponseDTO;
import com.team9.carshop.dto.RefreshTokenResponseDTO;
import com.team9.carshop.security.JwtUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletResponse;

@RestController // 이 클래스를 RESTful 웹 서비스의 컨트롤러로 지정
@RequestMapping("/auth") // 이 클래스의 기본 URL 경로를 /auth로 설정
public class AuthController {

  @Autowired // Spring이 AuthenticationManager를 주입하도록 설정
  private AuthenticationManager authenticationManager;

  @Autowired // Spring이 JwtUtil을 주입하도록 설정
  private JwtUtil jwtUtil;

  @PostMapping("/login") // HTTP POST 요청을 처리
  public AuthResponseDTO login(@RequestBody AuthRequestDTO authRequest, HttpServletResponse response) throws AuthenticationException {
    // 사용자의 인증 정보를 확인
    Authentication authentication = authenticationManager.authenticate(
        new UsernamePasswordAuthenticationToken(authRequest.getUsername(), authRequest.getPassword()));

    // 인증된 사용자 정보를 가져옴
    UserDetails userDetails = (UserDetails) authentication.getPrincipal();
    // Access Token과 Refresh Token을 생성
    String accessToken = jwtUtil.generateAccessToken(userDetails.getUsername());
    String refreshToken = jwtUtil.generateRefreshToken(userDetails.getUsername());

    // 쿠키에 Access Token과 Refresh Token을 설정
    Cookie accessTokenCookie = new Cookie("accessToken", accessToken);
    accessTokenCookie.setHttpOnly(true);
    accessTokenCookie.setPath("/");
    response.addCookie(accessTokenCookie);

    Cookie refreshTokenCookie = new Cookie("refreshToken", refreshToken);
    refreshTokenCookie.setHttpOnly(true);
    refreshTokenCookie.setPath("/");
    response.addCookie(refreshTokenCookie);

    // Access Token과 Refresh Token을 응답
    return new AuthResponseDTO(accessToken, refreshToken);
  }

  @PostMapping("/refresh") // HTTP POST 요청을 처리
  public RefreshTokenResponseDTO refresh(@CookieValue(value = "refreshToken") String refreshToken) {
    // Refresh Token이 유효한지 검증
    if (jwtUtil.validateToken(refreshToken)) {
      // Refresh Token에서 사용자 이름을 추출
      String username = jwtUtil.getUsernameFromToken(refreshToken);
      // 새로운 Access Token을 생성
      String newAccessToken = jwtUtil.generateAccessToken(username);

      // 새로운 Access Token을 응답
      return new RefreshTokenResponseDTO(newAccessToken);
    } else {
      throw new RuntimeException("Invalid Refresh Token");
    }
  }
}
