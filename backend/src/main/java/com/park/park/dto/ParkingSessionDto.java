package com.park.park.dto;

import lombok.Data;

import java.time.LocalDateTime;
import java.util.UUID;

@Data
public class ParkingSessionDto {
    private UUID id;
    private UUID userId;
    private UUID parkSlotId;
    private UUID vehicleId;
    private LocalDateTime startTime;
    private LocalDateTime endTime;
    private String status;
}