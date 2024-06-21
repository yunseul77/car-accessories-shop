package com.team9.carshop.security;

import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;

@Component // 이 클래스를 Spring의 빈으로 등록하여, 필터로 사용할 수 있도록 설정합니다.
public class JwtFilter extends OncePerRequestFilter {

  private final JwtUtil jwtUtil;
  private final UserDetailsService userDetailsService;

  public JwtFilter(JwtUtil jwtUtil, UserDetailsService userDetailsService) {
    this.jwtUtil = jwtUtil;
    this.userDetailsService = userDetailsService;
  }

  @Override
  protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain chain)
      throws ServletException, IOException {
    String token = null; // 요청에서 추출한 JWT 토큰을 저장할 변수
    String loginId = null; // JWT 토큰에서 추출한 사용자 이름을 저장할 변수
    Long memberId = null; // JWT 토큰에서 추출한 사용자 ID를 저장할 변수

    // 요청에 포함된 쿠키들을 검사하여, 이름이 "accessToken"인 쿠키를 찾습니다.
    if (request.getCookies() != null) {
      for (Cookie cookie : request.getCookies()) {
        if (cookie.getName().equals("accessToken")) {
          token = cookie.getValue(); // JWT 토큰 값을 가져옵니다.
          loginId = jwtUtil.getUsernameFromToken(token); // JWT 토큰에서 사용자 이름을 추출합니다.
          memberId = jwtUtil.getMemberIdFromToken(token); // JWT 토큰에서 사용자 ID를 추출합니다.
        }
      }
    }

    // 토큰이 유효하지 않거나, 사용자 이름이 없으면 필터 체인 중단
    if (token == null || !jwtUtil.validateToken(token) || loginId == null) {
      chain.doFilter(request, response);
      return;
    }

    // 사용자 이름이 존재하고, 현재 SecurityContext에 인증 정보가 없는 경우에만 인증을 수행합니다.
    if (loginId != null && SecurityContextHolder.getContext().getAuthentication() == null) {
      // 사용자 이름으로 사용자 세부 정보를 로드합니다.
      UserDetails userDetails = userDetailsService.loadUserByUsername(loginId);

      // JWT 토큰이 유효한 경우, Spring Security 컨텍스트에 인증 정보를 설정합니다.
      if (jwtUtil.validateToken(token)) {
        // 인증 객체를 생성하여, 사용자 세부 정보와 권한을 설정합니다.
        UsernamePasswordAuthenticationToken authentication =
            new UsernamePasswordAuthenticationToken(userDetails, null, userDetails.getAuthorities());

        // 요청에 대한 추가 세부 정보를 설정합니다.
        authentication.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));

        // 인증 정보를 SecurityContext에 설정합니다.
        SecurityContextHolder.getContext().setAuthentication(authentication);
      }
    }

    // 요청을 다음 필터로 전달합니다.
    chain.doFilter(request, response);
  }
}

