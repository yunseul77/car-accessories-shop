package com.team9.carshop.controller;

import static com.team9.carshop.service.MemberService.*;


import com.team9.carshop.dto.MemberJoinRequestDTO;
import com.team9.carshop.dto.MemberJoinResponseDTO;
import com.team9.carshop.entity.Member;
import com.team9.carshop.exception.SignupException;
import com.team9.carshop.service.MemberService;
import jakarta.validation.Valid;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RequiredArgsConstructor
@RequestMapping("/auth")
@RestController
public class MemberJoinController {

  private final MemberService memberService;

  @CrossOrigin(origins = "http://localhost:3000")
  @PostMapping("/signup")
  public ResponseEntity<MemberJoinResponseDTO> signup(@Valid @RequestBody MemberJoinRequestDTO memberJoinRequestDTO) {
    if (!memberJoinRequestDTO.getPassword1().equals(memberJoinRequestDTO.getPassword2())) {
      throw new SignupException("비밀번호가 일치하지 않습니다.");
    }
    MemberJoinResponseDTO responseDTO = memberService.joinMember(memberJoinRequestDTO);
    return ResponseEntity.ok(responseDTO);
  }
}

