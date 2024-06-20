package com.team9.carshop.enums;


public enum MemberRole {
    USER("일반회원"),
    SELLER("판매자");

    private final String displayName;

    MemberRole(String displayName) {
        this.displayName = displayName;
    }

    public String getDisplayName() {
        return displayName;
    }

    public static MemberRole fromString(String role) {
        for (MemberRole memberRole : MemberRole.values()) {
            if (memberRole.name().equalsIgnoreCase(role)) {
                return memberRole;
            }
        }
        throw new IllegalArgumentException("Invalid role: " + role);
    }
}

