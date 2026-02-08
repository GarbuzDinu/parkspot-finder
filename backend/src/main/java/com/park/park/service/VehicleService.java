package com.park.park.service;

import com.park.park.dto.VehicleDto;
import com.park.park.entity.Vehicle;
import com.park.park.mapper.VehicleMapper;
import com.park.park.repository.VehicleRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.UUID;

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

    public VehicleDto getVehicleById(UUID id) {
        return vehicleRepository.findById(id)
                .map(vehicleMapper::toDto)
                .orElseThrow(() -> new RuntimeException("Vehicle not found with id: " + id));
    }

    public VehicleDto create(VehicleDto dto) {
        var entity = vehicleMapper.toEntity(dto);
        var saved = vehicleRepository.save(entity);
        return vehicleMapper.toDto(saved);
    }

    @Transactional
    public VehicleDto update(UUID id, VehicleDto dto) {
        Vehicle existingVehicle = vehicleRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Vehicle not found with id: " + id));

        existingVehicle.setNumber(dto.getNumber());

        return vehicleMapper.toDto(vehicleRepository.save(existingVehicle));
    }

    @Transactional
    public void delete(UUID id) {
        vehicleRepository.deleteById(id);
    }
}
