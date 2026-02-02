package com.park.park.service;

import com.park.park.dto.VehicleDto;
import com.park.park.mapper.VehicleMapper;
import com.park.park.repository.VehicleRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class VehicleService {

    private final VehicleRepository vehicleRepository;
    private final VehicleMapper vehicleMapper;

    public List<VehicleDto> getVehicles() {
        return vehicleRepository.findAll()
                .stream()
                .map(vehicleMapper::toDto)
                .toList();
    }

    public VehicleDto create(VehicleDto dto) {
        var entity = vehicleMapper.toEntity(dto);
        var saved = vehicleRepository.save(entity);
        return vehicleMapper.toDto(saved);
    }

}
