package com.team9.carshop.exception;

public class SaleNotFoundException extends RuntimeException {

    public SaleNotFoundException() {
        super();
    }

    public SaleNotFoundException(String message) {
        super(message);
    }

    public SaleNotFoundException(String message, Throwable cause) {
        super(message, cause);
    }

    public SaleNotFoundException(Throwable cause) {
        super(cause);
    }
}
