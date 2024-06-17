package com.team9.carshop.security;

import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;
import java.io.IOException;
import com.team9.carshop.security.JwtUtil;


@Component // 이 클래스를 Spring의 빈으로 등록
public class JwtFilter extends OncePerRequestFilter {

  private JwtUtil jwtUtil;
  private UserDetailsService userDetailsService;

  // 세터 메서드 추가
  @Autowired
  public void setJwtUtil(JwtUtil jwtUtil) {
    this.jwtUtil = jwtUtil;
  }

  @Autowired
  @Lazy
  public void setUserDetailsService(UserDetailsService userDetailsService) {
    this.userDetailsService = userDetailsService;
  }

  @Override
  protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain chain)
      throws ServletException, IOException {
    String authorizationHeader = request.getHeader("Authorization"); // 요청 헤더에서 Authorization 값을 가져옴

    String token = null;
    String username = null;

    if (authorizationHeader != null && authorizationHeader.startsWith("Bearer ")) {
      token = authorizationHeader.substring(7); // Bearer 접두사를 제거하여 토큰을 추출
      username = jwtUtil.getUsernameFromToken(token); // 토큰에서 사용자 이름을 추출
    }

    if (username != null && SecurityContextHolder.getContext().getAuthentication() == null) {
      UserDetails userDetails = userDetailsService.loadUserByUsername(username); // 사용자 이름으로 사용자 세부 정보를 로드

      if (jwtUtil.vaildateToken(token)) { // 토큰이 유효한지 검증
        UsernamePasswordAuthenticationToken authentication =
            new UsernamePasswordAuthenticationToken(userDetails, null, userDetails.getAuthorities());
        authentication.setDetails(new WebAuthenticationDetailsSource().buildDetails(request)); // 인증 정보를 설정
        SecurityContextHolder.getContext().setAuthentication(authentication); // Spring Security의 컨텍스트에 인증 정보를 설정
      }
    }

    chain.doFilter(request, response); // 다음 필터로 요청을 전달
  }
}
