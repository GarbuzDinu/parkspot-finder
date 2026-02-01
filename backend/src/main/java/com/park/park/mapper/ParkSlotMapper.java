package com.park.park.mapper;

import com.park.park.dto.ParkSlotDto;
import com.park.park.entity.ParkSlot;

public class ParkSlotMapper {

    private ParkSlotMapper() {
        // prevent instantiation
    }

    // ✅ Entity → DTO
    public static ParkSlotDto toDto(ParkSlot entity) {
        if (entity == null) {
            return null;
        }

        return new ParkSlotDto(
                entity.getId(),
                entity.getName(),
                entity.getAddress(),
                entity.getFreeSlots(),
                entity.getBusySlots(),
                entity.getRating()
        );
    }

    // ✅ DTO → Entity
    public static ParkSlot toEntity(ParkSlotDto dto) {
        if (dto == null) {
            return null;
        }

        return new ParkSlot(
                dto.getId(),
                dto.getName(),
                dto.getAddress(),
                dto.getFreeSlots(),
                dto.getBusySlots(),
                dto.getRating()
        );
    }
}
