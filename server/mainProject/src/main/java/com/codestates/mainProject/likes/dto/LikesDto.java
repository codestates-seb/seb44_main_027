package com.codestates.mainProject.likes.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotNull;
import javax.validation.constraints.Positive;

public class LikesDto {

    @Getter
    @AllArgsConstructor
    public static class PostDto {
        @Positive
        private long memberId;
        private long postId;
        private long crewingId;
        private long commentId;
    }

    @Getter
    @Setter
    public static class response {

    }
}
