package com.park.park.dto;

import lombok.Data;
import utils.ParkingSessionStatus;

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
    private ParkingSessionStatus status;
}
