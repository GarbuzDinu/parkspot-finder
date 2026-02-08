package com.park.park.dto;

import lombok.Data;

import java.util.UUID;

@Data
public class ParkSlotDto {
    private UUID id;
    private String name;
    private String address;
    private Double lat;
    private Double lng;
    private Integer totalSlots;
    private Integer freeSlots;
    private Double rating;
}
