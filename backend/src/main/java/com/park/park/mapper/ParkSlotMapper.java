package com.park.park.mapper;

import com.park.park.dto.ParkSlotDto;
import com.park.park.entity.ParkSlot;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface ParkSlotMapper {
    ParkSlotDto toDto(ParkSlot parkSlot);

    ParkSlot toEntity(ParkSlotDto parkSlotDto);
}
