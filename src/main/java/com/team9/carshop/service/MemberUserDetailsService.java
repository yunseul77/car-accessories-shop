package com.team9.carshop.service;

import com.team9.carshop.entity.Member;
import com.team9.carshop.repository.MemberRepository;
import com.team9.carshop.security.CustomUserDetails;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.Collections;

@Service // 이 클래스를 Spring의 서비스 빈으로 등록
public class MemberUserDetailsService implements UserDetailsService {

  @Autowired
  private MemberRepository memberRepository;

  @Override
  public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
    // 데이터베이스에서 사용자를 찾습니다.
    Member member = memberRepository.findByLoginId(username)
        .orElseThrow(() -> new UsernameNotFoundException("User not found with username: " + username));

    // 사용자 정보를 반환합니다.
    return new CustomUserDetails(member.getId(), member.getLoginId(), member.getPassword(), Collections.emptyList());
  }
}
