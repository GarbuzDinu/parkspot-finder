package com.park.park.service;

import com.park.park.dto.ParkSlotDto;
import com.park.park.entity.ParkSlot;
import com.park.park.mapper.ParkSlotMapper;
import com.park.park.repository.ParkSlotRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class ParkSlotService {

    private final ParkSlotRepository repository;
    private final ParkSlotMapper parkSlotMapper;

    public List<ParkSlotDto> getAll() {
        return repository.findAll()
                .stream()
                .map(parkSlotMapper::toDto)
                .toList();
    }

    public Optional<ParkSlotDto> getById(UUID id) {
        return repository.findById(id)
                .map(parkSlotMapper::toDto);
    }

    public ParkSlotDto create(ParkSlotDto dto) {
        ParkSlot entity = parkSlotMapper.toEntity(dto);
        ParkSlot saved = repository.save(entity);
        return parkSlotMapper.toDto(saved);
    }

    public Optional<ParkSlotDto> update(UUID id, ParkSlotDto dto) {
        return repository.findById(id)
                .map(existing -> {
                    existing.setName(dto.getName());
                    existing.setAddress(dto.getAddress());
                    existing.setRating(dto.getRating());

                    ParkSlot updated = repository.save(existing);
                    return parkSlotMapper.toDto(updated);
                });
    }

    public boolean delete(UUID id) {
        if (!repository.existsById(id)) {
            return false;
        }

        repository.deleteById(id);
        return true;
    }
}
