package com.team9.carshop.enums;

public enum MemberRole {
    USER, ADMIN, SELLER;

    // 문자열을 받아서 해당하는 enum 값을 반환하는 메서드
    public static MemberRole fromString(String role) {
        if (role != null) {
            for (MemberRole memberRole : MemberRole.values()) {
                if (role.equalsIgnoreCase(memberRole.name())) {
                    return memberRole;
                }
            }
        }
        throw new IllegalArgumentException("No enum constant " + MemberRole.class.getCanonicalName() + "." + role);
    }
}
