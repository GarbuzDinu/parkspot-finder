package com.park.park.controller;

import com.park.park.entity.ParkSlot;
import com.park.park.repository.ParkSlotRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/park-slots")
public class ParkSlotController {

    private final ParkSlotRepository repository;

    // ✅ Constructor for dependency injection
    public ParkSlotController(ParkSlotRepository repository) {
        this.repository = repository;
    }

    // ✅ 1. Get all park slots
    @GetMapping
    public List<ParkSlot> getAll() {
        return repository.findAll();
    }

    // ✅ 2. Get a park slot by id
    @GetMapping("/{id}")
    public ResponseEntity<ParkSlot> getById(@PathVariable Long id) {
        return repository.findById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    // ✅ 3. Add a new park slot
    @PostMapping
    public ParkSlot create(@RequestBody ParkSlot slot) {
        return repository.save(slot);
    }

    // ✅ 4. Update a park slot
    @PutMapping("/{id}")
    public ResponseEntity<ParkSlot> update(@PathVariable Long id, @RequestBody ParkSlot updatedSlot) {
        return repository.findById(id)
                .map(slot -> {
                    slot.setName(updatedSlot.getName());
                    slot.setAddress(updatedSlot.getAddress());
                    slot.setFreeSlots(updatedSlot.getFreeSlots());
                    slot.setBusySlots(updatedSlot.getBusySlots());
                    repository.save(slot);
                    return ResponseEntity.ok(slot);
                })
                .orElse(ResponseEntity.notFound().build());
    }

    // ✅ 5. Delete a park slot
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id) {
        return repository.findById(id)
                .map(slot -> {
                    repository.delete(slot);
                    return ResponseEntity.noContent().<Void>build();
                })
                .orElse(ResponseEntity.notFound().build());
    }

    // ✅ 6. Test endpoint
    @GetMapping("/test")
    public List<ParkSlot> testAll() {
        List<ParkSlot> slots = repository.findAll();
        slots.forEach(slot -> System.out.println(slot.getId() + " " + slot.getName()));
        return slots;
    }
}
