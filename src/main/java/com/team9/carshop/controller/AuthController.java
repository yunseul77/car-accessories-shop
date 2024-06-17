package com.team9.carshop.controller;

import com.team9.carshop.dto.AuthRequestDTO;
import com.team9.carshop.dto.AuthResponseDTO;
import com.team9.carshop.security.JwtUtil;
import javax.security.sasl.AuthenticationException;
import org.apache.catalina.Session;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.context.annotation.RequestScope;

@RequestMapping("/auth")
@RestController
public class AuthController {

  @Autowired
  private AuthenticationManager authenticationManager;

  @Autowired
  private JwtUtil jwtUtil;

//  @PostMapping("/login")
//  public AuthResponseDTO login(@RequestBody AuthRequestDTO authRequest)
//      throws AuthenticationException {
//    Authentication authentication = authenticationManager.authenticate( //사용자 인증정보 확인
//        new UsernamePasswordAuthenticationToken(authRequest.getUsername(),
//            authRequest.getPassword()));
//
//    //인증된 사용자 정보 가져오기
//    UserDetails userDetails = (UserDetails) authentication.getPrincipal();
//
//    //토큰 생성
//    String token = jwtUtil.generateToken(userDetails.getUsername());
//
//    //토큰 응답
//    return new AuthResponseDTO(token);
//  }
}
