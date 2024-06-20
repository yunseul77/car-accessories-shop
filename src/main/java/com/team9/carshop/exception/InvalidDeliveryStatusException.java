package com.team9.carshop.exception;

public class InvalidDeliveryStatusException extends RuntimeException {

    public InvalidDeliveryStatusException() {
        super();
    }

    public InvalidDeliveryStatusException(String message) {
        super(message);
    }

    public InvalidDeliveryStatusException(String message, Throwable cause) {
        super(message, cause);
    }

    public InvalidDeliveryStatusException(Throwable cause) {
        super(cause);
    }
}

