package com.park.park.mapper;

import com.park.park.dto.ParkingSessionDto;
import com.park.park.entity.ParkingSession;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface ParkingSessionMapper {

    @Mapping(source = "userId.id", target = "userId")
    @Mapping(source = "parkSlotId.id", target = "parkSlotId")
    @Mapping(source = "vehicleId.id", target = "vehicleId")
    ParkingSessionDto toDto(ParkingSession entity);
}