package com.team9.carshop.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
public class SecurityConfig {

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
            .authorizeRequests(authorizeRequests ->
                authorizeRequests.anyRequest().permitAll()  // 모든 요청을 허용
            )
            .csrf(csrf -> csrf.disable());  // CSRF 보호 비활성화 (개발 환경에서만 사용)
        return http.build();
    }
}
