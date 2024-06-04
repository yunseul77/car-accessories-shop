package com.team9.carshop.controller;

import static com.team9.carshop.service.MemberService.*;

import com.team9.carshop.dto.MemberJoinDTO;
import com.team9.carshop.entity.Member;
import com.team9.carshop.service.MemberService;
import jakarta.validation.Valid;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RequiredArgsConstructor
@RestController
@RequestMapping("member")
public class MemberJoinController {


  private final MemberService memberService;

//  @PostMapping("/singup")
//  public String singup(@Valid MemberJoinDTO memberJoinDTO, BindingResult bindingResult) {
//    if (bindingResult.hasErrors()) {
//      return "singup_form";
//    }
//    if (!memberJoinDTO.getPassword1().equals(memberJoinDTO.getPassword2())) {
//      bindingResult.rejectValue("pssword2", "passwordInCorrect", "비밀번호가 일치하지 않습니다."); //확인필요
//      return "singup_form";
//    }
////    MemberService.joinMember(memberJoinDTO.getLoginId(), memberJoinDTO.getName(),
////        memberJoinDTO.getEmail(),
////        memberJoinDTO.getPhone(), memberJoinDTO.getAddress(), memberJoinDTO.getRole());
//
//    return "redirect:/";
//  }
}
