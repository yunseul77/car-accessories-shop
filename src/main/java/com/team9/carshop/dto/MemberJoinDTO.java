package com.team9.carshop.dto;


import com.team9.carshop.entity.Member;
import com.team9.carshop.enums.MemberRole;
import jakarta.transaction.Transactional;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class MemberJoinDTO {

  private Long id;

  @NotEmpty(message = "사용자ID는 필수 항목입니다.")
  @Pattern(regexp = "[ㄱ-ㅎ가-힣a-z0-9_]{5,30}$", message = "아이디는 특수문자를 제외한 5자 이상이여야 합니다.")
  private String loginId;

  @NotEmpty(message = "비밀번호는 필수 항목입니다.")
  @Pattern(regexp = "(?=.*[0-9])(?=.*[a-zA-Z]).{8,16}", message = "최소 하나의 문잔 및 숫자를 포함한 8 ~ 16자 이여야 합니다.")
  private String password1;

  @NotEmpty(message = "비밀번호 확인은 필수 항목입니다.")
  @Pattern(regexp = "(?=.*[0-9])(?=.*[a-zA-Z]).{8,16}", message = "최소 하나의 문잔 및 숫자를 포함한 8 ~ 16자 이여야 합니다.")
  private String password2;

  @NotEmpty(message = "이름은 필수 항목입니다.")
  @Size(min = 3, max = 50)
  private String name;

  @NotEmpty(message = "E-mail은 필수 항목입니다.")
  @Size(min = 3, max = 50)
  @Email //이메일 형식 확인
  private String email;

  @NotEmpty(message = "휴대폰 번호는 필수 항목입니다.")
  @Pattern(regexp = "^01([0|1|6|7|8|9])-?([0-9]{3,4}-?([0-9]{4})$", message = "휴대폰 번호를 확인해 주세요.")
  @Size(min = 12, max = 13)
  private String phone;

  @Size(min = 3, max = 100)
  private String address;

  @NotEmpty(message = "가입유형 선택은 필수 항목입니다.")
  private MemberRole role;


  @lombok.Builder
  public MemberJoinDTO(String loginId, String password1, String password2, String name, String email, String phone,
      String address, MemberRole role) {
    this.loginId = loginId;
    this.password1 = password1;
    this.password2 = password2;
    this.name = name;
    this.email = email;
    this.phone = phone;
    this.address = address;
    this.role = role;
  }
  
  public Member toEntity(){
    return Member.builder()
        .loginId(loginId)
        .password(password1)
        .password(password2)
        .name(name)
        .email(email)
        .phone(phone)
        .address(address)
        .role(role)
        .build();
  }

//  @Transactional
//  //Service 층에서 가입할 회원정보를 Repository 층에 전달
//  public boolean join(MemberJoinDTO memberJoinDTO){
//    String rawPassword = memberJoinDTO.getPassword();
//    String encPassword = bCryptPasswordEncoder.encode(rawPassword); //비밀번호 암호화
//    memberJoinDTO.setPassword(encPassword);
//    memberJoinDTO.setRole(MemberRole.USER); //user role 지정
//    memberRepository.save(memberJoinDTO.toEntity()); //toEntity로 Dto의 정보를 바탕으로 생성된 Entity 객체를 리턴 받은 뒤, Repository 층에서 DB에 회원정보를 저장
//  }
}
