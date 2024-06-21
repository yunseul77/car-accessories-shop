package com.team9.carshop.dto;

import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;
import org.hibernate.validator.constraints.UniqueElements;

@Getter
@Setter
@Builder
@ToString
@NoArgsConstructor
@AllArgsConstructor
public class LoginDTO {

  @NotNull
  @UniqueElements
  @Size(min = 3, max = 50)
  private String loginIdId;

  @NotNull
  @Size(min = 3, max = 50)
  private String password;
}
