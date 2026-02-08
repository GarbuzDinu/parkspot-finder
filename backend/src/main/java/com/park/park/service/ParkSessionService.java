package com.park.park.service;

import com.park.park.dto.ParkingSessionDto;
import com.park.park.entity.ParkingSession;
import com.park.park.mapper.ParkingSessionMapper;
import com.park.park.repository.ParkSlotRepository;
import com.park.park.repository.ParkingSessionRepository;
import com.park.park.repository.UserRepository;
import com.park.park.repository.VehicleRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class ParkSessionService {

    private final ParkingSessionRepository parkingSessionRepository;
    private final ParkingSessionMapper parkingSessionMapper;
    private final UserRepository userRepository;
    private final ParkSlotRepository parkSlotRepository;
    private final VehicleRepository vehicleRepository;

    public List<ParkingSessionDto> getParkingSessions() {
        return parkingSessionRepository.findAll()
                .stream()
                .map(parkingSessionMapper::toDto)
                .toList();
    }

    public ParkingSessionDto getParkingSessionById(UUID id) {
        return parkingSessionRepository.findById(id)
                .map(parkingSessionMapper::toDto)
                .orElseThrow(() -> new RuntimeException("Parking session not found with id: " + id));
    }

    public ParkingSessionDto create(ParkingSessionDto dto) {
        ParkingSession entity = new ParkingSession();
        entity.setUserId(userRepository.findById(dto.getUserId())
                .orElseThrow(() -> new IllegalArgumentException("User not found with id: " + dto.getUserId())));
        entity.setParkSlotId(parkSlotRepository.findById(dto.getParkSlotId())
                .orElseThrow(() -> new IllegalArgumentException("ParkSlot not found with id: " + dto.getParkSlotId())));
        entity.setVehicleId(vehicleRepository.findById(dto.getVehicleId())
                .orElseThrow(() -> new IllegalArgumentException("Vehicle not found with id: " + dto.getVehicleId())));
        entity.setStartTime(dto.getStartTime());
        entity.setEndTime(dto.getEndTime());
        // Need to change later, when FE is ready
        entity.setStatus(null);

        var saved = parkingSessionRepository.save(entity);
        return parkingSessionMapper.toDto(saved);
    }

    @Transactional
    public ParkingSessionDto update(UUID id, ParkingSessionDto dto) {
        ParkingSession existingSession = parkingSessionRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Parking session not found with id: " + id));

        existingSession.setStartTime(dto.getStartTime());
        existingSession.setEndTime(dto.getEndTime());
        // later
        // existingSession.setStatus(null);

        return parkingSessionMapper.toDto(parkingSessionRepository.save(existingSession));
    }

    @Transactional
    public void delete(UUID id) {
        parkingSessionRepository.deleteById(id);
    }
}
