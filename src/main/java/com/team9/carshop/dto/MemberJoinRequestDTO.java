package com.team9.carshop.dto;

import com.team9.carshop.enums.MemberRole;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;
import lombok.Data;

@Data
public class MemberJoinRequestDTO {

  @NotEmpty(message = "로그인 ID는 필수입니다.")
  @Pattern(regexp = "[ㄱ-ㅎ가-힣a-z0-9_]{5,30}$", message = "아이디는 특수문자를 제외한 5자 이상이여야 합니다.")
  private String loginId;

  @NotEmpty(message = "이름은 필수입니다.")
  private String name;

  @NotEmpty(message = "이메일은 필수입니다.")
  @Email(message = "유효하지 않은 이메일 형식입니다.")
  private String email;

  @NotEmpty(message = "전화번호는 필수입니다.")
  @Pattern(regexp = "^01([0|1|6|7|8|9])-?([0-9]{3,4}-?([0-9]{4})$)", message = "휴대폰 번호를 확인해 주세요.")
  private String phone;

  @NotEmpty(message = "주소는 필수입니다.")
  private String address;

  @NotEmpty(message = "비밀번호는 필수입니다.")
  @Pattern(regexp = "(?=.*[0-9])(?=.*[a-zA-Z]).{8,16}", message = "최소 하나의 문잔 및 숫자를 포함한 8 ~ 16자 이여야 합니다.")
  private String password1;

  @NotEmpty(message = "비밀번호 확인은 필수입니다.")
  @Pattern(regexp = "(?=.*[0-9])(?=.*[a-zA-Z]).{8,16}", message = "최소 하나의 문잔 및 숫자를 포함한 8 ~ 16자 이여야 합니다.")
  private String password2;

  @NotEmpty(message = "역할은 필수입니다.")
  private String role;
}
