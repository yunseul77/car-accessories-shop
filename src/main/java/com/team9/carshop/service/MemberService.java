package com.team9.carshop.service;

import com.team9.carshop.dto.MemberJoinRequestDTO;
import com.team9.carshop.dto.MemberJoinResponseDTO;
import com.team9.carshop.entity.Member;
import com.team9.carshop.enums.MemberRole;
import com.team9.carshop.repository.MemberRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service // 이 클래스를 Spring의 서비스 빈으로 등록
@RequiredArgsConstructor // Lombok을 사용하여 모든 final 필드에 대한 생성자를 자동으로 생성
public class MemberService {

  private final MemberRepository memberRepository; // 멤버 리포지토리
  private final PasswordEncoder passwordEncoder; // 비밀번호 인코더

  // 멤버 가입 처리 메서드
  public MemberJoinResponseDTO joinMember(MemberJoinRequestDTO memberJoinRequestDTO) {
    // Member 정적 팩토리 메서드를 사용하여 멤버 객체 생성
    Member member = Member.createMember(
        memberJoinRequestDTO.getLoginId(),
        memberJoinRequestDTO.getName(),
        memberJoinRequestDTO.getEmail(),
        memberJoinRequestDTO.getPhone(),
        memberJoinRequestDTO.getAddress(),
        MemberRole.fromString(memberJoinRequestDTO.getRole()), // 역할 문자열을 MemberRole enum으로 변환
        passwordEncoder.encode(memberJoinRequestDTO.getPassword1()) // 비밀번호를 인코딩
    );

    Member savedMember = memberRepository.save(member); // 멤버 저장

    // 저장된 멤버 정보를 사용하여 응답 DTO 생성
    return new MemberJoinResponseDTO(
        savedMember.getId(),
        savedMember.getLoginId(),
        savedMember.getName(),
        savedMember.getEmail(),
        savedMember.getPhone(),
        savedMember.getAddress(),
        savedMember.getRole().name()
    );
  }
}
