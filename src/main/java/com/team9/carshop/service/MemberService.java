//package com.team9.carshop.service;
//
//import com.team9.carshop.dto.MemberJoinDTO;
//import com.team9.carshop.entity.Member;
//import com.team9.carshop.enums.MemberRole;
//import com.team9.carshop.repository.MemberRepository;
//import jakarta.transaction.Transactional;
//import lombok.RequiredArgsConstructor;
//import org.springframework.stereotype.Service;
//import org.springframework.security.crypto.password.PasswordEncoder;
//
//@RequiredArgsConstructor
//@Service
//public class MemberService {
//
//  private final MemberRepository memberRepository;
//  private final PasswordEncoder passwordEncoder;
//
////  @Transactional(rollbackFor = ) 오류방지
//
//
//  public Member joinMember(MemberJoinDTO memberJoinDTO){
//    Member member = new Member();
//    member.setLoginId(memberJoinDTO.getLoginId());
//    member.setName(memberJoinDTO.getName());
//    member.setEmail(memberJoinDTO.getEmail());
//    member.setPhone(memberJoinDTO.getPhone());
//    member.setAddress(memberJoinDTO.getAddress());
//    member.setRole(memberJoinDTO.getRole());
//    member.setPassword(passwordEncoder.encode(memberJoinDTO.getPassword1()));
////    this.memberRepository.save(member);
//    return member;
//  }
//
//}