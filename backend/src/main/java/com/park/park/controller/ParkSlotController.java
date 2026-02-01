package com.park.park.controller;

import com.park.park.dto.ParkSlotDto;
import com.park.park.service.ParkSlotService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/park-slots")
public class ParkSlotController {

    private final ParkSlotService service;

    // ✅ Constructor injection
    public ParkSlotController(ParkSlotService service) {
        this.service = service;
    }

    // ✅ 1. Get all park slots
    @GetMapping
    public List<ParkSlotDto> getAll() {
        return service.getAll();
    }

    // ✅ 2. Get park slot by id
    @GetMapping("/{id}")
    public ResponseEntity<ParkSlotDto> getById(@PathVariable Long id) {
        return service.getById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    // ✅ 3. Create new park slot
    @PostMapping
    public ResponseEntity<ParkSlotDto> create(@RequestBody ParkSlotDto dto) {
        ParkSlotDto created = service.create(dto);
        return ResponseEntity.ok(created);
    }

    // ✅ 4. Update park slot
    @PutMapping("/{id}")
    public ResponseEntity<ParkSlotDto> update(
            @PathVariable Long id,
            @RequestBody ParkSlotDto dto
    ) {
        return service.update(id, dto)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    // ✅ 5. Delete park slot
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id) {
        boolean deleted = service.delete(id);
        return deleted
                ? ResponseEntity.noContent().build()
                : ResponseEntity.notFound().build();
    }
}
