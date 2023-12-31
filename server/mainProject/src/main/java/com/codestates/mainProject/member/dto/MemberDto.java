package com.codestates.mainProject.member.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Pattern;
import javax.validation.constraints.Size;
import java.time.LocalDateTime;

public class MemberDto {
    @Getter
    @AllArgsConstructor
    public static class Post{
        @Email(message = "이메일 형식이 아닙니다.")
        @NotBlank(message = "이메일은 필수로 입력해야하는 값입니다.")
        private String email;
        @Size(max = 8, message = "유저 네임은 8글자를 넘길 수 없습니다.")
        @NotBlank(message = "유저 네임은 필수로 입력해야하는 값입니다.")
        private String userName;
        @NotBlank
        @Pattern(regexp = "^(?=.*[0-9])(?=.*[A-Za-z])(?=.*[@#$%^&+=`~!*()_;'|-])(?=\\S+$).{8,}$", message = "비밀번호는 영문, 숫자, 특수문자를 포함하여 8자리 이상이여야 합니다.")
        private String password;
        private String activityArea;
        private String imageUrl;
    }
    @Getter
    @Setter
    @AllArgsConstructor
    public static class Put{
        @Size(max = 8, message = "유저 네임은 8글자를 넘길 수 없습니다.")
        private String userName;
        private String activityArea;
        private String imageUrl;
    }
    @Getter
    @Setter
    @AllArgsConstructor
    public static class PutPassword{
        private String currentPassword;
        @Pattern(regexp = "^(?=.*[0-9])(?=.*[A-Za-z])(?=.*[@#$%^&+=`~!*()_;'|-])(?=\\S+$).{8,}$", message = "비밀번호는 영문, 숫자, 특수문자를 포함하여 8자리 이상이여야 합니다.")
        private String newPassword;
    }
    @Getter
    @Setter
    @AllArgsConstructor
    @NoArgsConstructor
    public static class Delete{
        private String password;
    }
    @Getter
    @Setter
    @AllArgsConstructor
    public static class Exist{
        @Email(message = "이메일 형식이 아닙니다.")
        private String email;
        @Size(max = 8, message = "유저 네임은 8글자를 넘길 수 없습니다.")
        private String userName;
    }

    @Getter
    @Setter
    @AllArgsConstructor
    @NoArgsConstructor
    public static class Response{
        private String email;
        private String userName;
        private String activityArea;
        private String imageUrl;
        private LocalDateTime createdAt;
        private long totalPostCount;
    }
}
