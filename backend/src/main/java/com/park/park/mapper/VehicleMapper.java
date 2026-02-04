package com.park.park.mapper;

import com.park.park.dto.VehicleDto;
import com.park.park.entity.Vehicle;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface VehicleMapper {
    VehicleDto toDto(Vehicle entity);

    Vehicle toEntity(VehicleDto dto);
}