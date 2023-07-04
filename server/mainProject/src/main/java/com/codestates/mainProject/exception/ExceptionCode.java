package com.codestates.mainProject.exception;

import lombok.Getter;

public enum ExceptionCode {
    MEMBER_NOT_FOUND(404, "user not found"),
    MEMBER_EXIST(409, "user exists"),
    POST_NOT_FOUND(404, "question not found"),
    CREWING_NOT_FOUND(404, "question not found");


    @Getter
    private int status;

    @Getter
    private String message;

    ExceptionCode(int code, String message) {
        this.status = code;
        this.message = message;
    }
}