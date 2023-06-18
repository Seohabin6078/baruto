package com.baruto.baruto.member.dto;

import com.baruto.baruto.validator.NotSpace;
import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;

public class MemberDto {
    @Getter
    public static class Post {
        @NotBlank(message = "이메일은 필수 항목 입니다.")
        @Email(message = "올바른 이메일 형식이 아닙니다.")
        private String email;

        @NotBlank(message = "비밀번호는 필수 항목 입니다.")
        private String password;

        @NotBlank(message = "이름은 필수 항목 입니다.")
        private String nickname;
    }

    @Getter
    @Setter
    public static class Patch {
        private Long memberId;

        @NotSpace(message = "비밀번호는 공백이 아니어야 합니다.")
        private String password;

        @NotSpace(message = "회원 이름은 공백이 아니어야 합니다.")
        private String nickname;
    }

    @Getter
    @Setter
    public static class Response {
        private Long memberId;
        private String email;
        private String nickname;
    }
}
