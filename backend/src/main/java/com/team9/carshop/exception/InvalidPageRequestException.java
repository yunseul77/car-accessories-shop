package com.team9.carshop.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.BAD_REQUEST)
public class InvalidPageRequestException extends RuntimeException {

    public InvalidPageRequestException() {
        super();
    }

    public InvalidPageRequestException(String message) {
        super(message);
    }

    public InvalidPageRequestException(String message, Throwable cause) {
        super(message, cause);
    }

    public InvalidPageRequestException(Throwable cause) {
        super(cause);
    }
}
