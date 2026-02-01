package com.park.park.service;

import com.park.park.dto.ParkSlotDto;
import com.park.park.entity.ParkSlot;
import com.park.park.mapper.ParkSlotMapper;
import com.park.park.repository.ParkSlotRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ParkSlotService {

    private final ParkSlotRepository repository;

    public ParkSlotService(ParkSlotRepository repository) {
        this.repository = repository;
    }

    // ✅ 1. Get all park slots
    public List<ParkSlotDto> getAll() {
        return repository.findAll()
                .stream()
                .map(ParkSlotMapper::toDto)
                .toList();
    }

    // ✅ 2. Get park slot by id
    public Optional<ParkSlotDto> getById(Long id) {
        return repository.findById(id)
                .map(ParkSlotMapper::toDto);
    }

    // ✅ 3. Create new park slot
    public ParkSlotDto create(ParkSlotDto dto) {
        ParkSlot entity = ParkSlotMapper.toEntity(dto);
        ParkSlot saved = repository.save(entity);
        return ParkSlotMapper.toDto(saved);
    }

    // ✅ 4. Update park slot
    public Optional<ParkSlotDto> update(Long id, ParkSlotDto dto) {
        return repository.findById(id)
                .map(existing -> {
                    existing.setName(dto.getName());
                    existing.setAddress(dto.getAddress());
                    existing.setFreeSlots(dto.getFreeSlots());
                    existing.setBusySlots(dto.getBusySlots());
                    existing.setRating(dto.getRating());

                    ParkSlot updated = repository.save(existing);
                    return ParkSlotMapper.toDto(updated);
                });
    }

    // ✅ 5. Delete park slot
    public boolean delete(Long id) {
        if (!repository.existsById(id)) {
            return false;
        }

        repository.deleteById(id);
        return true;
    }
}
