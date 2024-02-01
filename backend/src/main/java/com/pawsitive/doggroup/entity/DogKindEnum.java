package com.pawsitive.doggroup.entity;

import lombok.Getter;

@Getter
public enum DogKindEnum {
    BICHON("비숑"), POMERANIAN("포메라니안");
    private final String name;

    DogKindEnum(String name) {
        this.name = name;
    }

    public static DogKindEnum stringToEnum(String s) {
        for (DogKindEnum value : DogKindEnum.values()) {
            if (value.getName().equals(s)) {
                return value;
            }
        }
        return null;
    }
}