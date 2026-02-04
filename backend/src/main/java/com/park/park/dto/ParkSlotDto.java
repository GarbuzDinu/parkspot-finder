package com.park.park.dto;

import lombok.Data;

import java.util.UUID;

@Data
public class ParkSlotDto {
    private UUID id;
    private String name;
    private Integer capacity;
    private Integer occupied;
    private String address;
    private String city;
    private Double rating;
    private Double price;
}
