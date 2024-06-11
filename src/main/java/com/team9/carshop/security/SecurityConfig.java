package com.team9.carshop.security;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

@Configuration // 이 클래스를 Spring 설정 클래스로 지정
@EnableWebSecurity // Spring Security를 활성화
public class SecurityConfig {

  private final JwtFilter jwtFilter;
  private final UserDetailsService userDetailsService;

  // JwtFilter와 UserDetailsService를 주입받음
  public SecurityConfig(JwtFilter jwtFilter, UserDetailsService userDetailsService) {
    this.jwtFilter = jwtFilter;
    this.userDetailsService = userDetailsService;
  }

  @Bean // 비밀번호를 암호화하는 인코더를 빈으로 등록
  public PasswordEncoder passwordEncoder() {
    return new BCryptPasswordEncoder();
  }

  @Bean // 인증 관리자를 빈으로 등록
  public AuthenticationManager authenticationManager(AuthenticationConfiguration authenticationConfiguration) throws Exception {
    return authenticationConfiguration.getAuthenticationManager();
  }

  @Bean // 보안 필터 체인을 설정하는 메서드
  public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
    http.csrf(csrf -> csrf.disable()) // CSRF 보호를 비활성화
        .authorizeHttpRequests(auth -> auth
            .requestMatchers("/auth/login", "/signup").permitAll() // /auth/login과 /signup 경로는 인증 없이 접근 가능
            .anyRequest().authenticated() // 그 외 모든 요청은 인증 필요
        )
        .sessionManagement(session -> session
            .sessionCreationPolicy(SessionCreationPolicy.STATELESS)) // 세션을 사용하지 않음
        .addFilterBefore(jwtFilter, UsernamePasswordAuthenticationFilter.class); // JWT 필터를 인증 필터 앞에 추가

    return http.build();
  }
}
