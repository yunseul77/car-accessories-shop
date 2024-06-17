package com.team9.carshop.service;

import com.team9.carshop.dto.MemberJoinRequestDTO;
import com.team9.carshop.dto.MemberJoinResponseDTO;
import com.team9.carshop.entity.Member;
import com.team9.carshop.repository.MemberRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Lazy;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@RequiredArgsConstructor
@Service
public class MemberService {

  private final MemberRepository memberRepository;
  private final @Lazy PasswordEncoder passwordEncoder;

  public MemberJoinResponseDTO joinMember(MemberJoinRequestDTO memberJoinRequestDTO) {
    Member member = new Member();
    member.setLoginId(memberJoinRequestDTO.getLoginId());
    member.setName(memberJoinRequestDTO.getName());
    member.setEmail(memberJoinRequestDTO.getEmail());
    member.setPhone(memberJoinRequestDTO.getPhone());
    member.setAddress(memberJoinRequestDTO.getAddress());
    member.setRole(memberJoinRequestDTO.getRole());
    member.setPassword(passwordEncoder.encode(memberJoinRequestDTO.getPassword1()));

    Member savedMember = memberRepository.save(member);

    return new MemberJoinResponseDTO(
        savedMember.getId(),
        savedMember.getLoginId(),
        savedMember.getName(),
        savedMember.getEmail(),
        savedMember.getPhone(),
        savedMember.getAddress(),
        savedMember.getRole()
    );
  }
}
