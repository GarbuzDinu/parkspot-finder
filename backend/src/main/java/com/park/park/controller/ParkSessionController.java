package com.park.park.controller;

import com.park.park.dto.ParkingSessionDto;
import com.park.park.service.ParkSessionService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/api/park-sessions")
@RequiredArgsConstructor
public class ParkSessionController {

    public final ParkSessionService parkSessionService;

    @GetMapping
    public List<ParkingSessionDto> getParkSessions() {
        return parkSessionService.getParkingSessions();
    }

    @GetMapping("/{id}")
    public ResponseEntity<ParkingSessionDto> getParkSessionById(@PathVariable UUID id) {
        return ResponseEntity.ok(parkSessionService.getParkingSessionById(id));
    }

    @PostMapping
    public ResponseEntity<ParkingSessionDto> createParkSession(@RequestBody ParkingSessionDto dto) {
        ParkingSessionDto create = parkSessionService.create(dto);
        return ResponseEntity.status(HttpStatus.CREATED).body(create);
    }

    @PutMapping("/{id}")
    public ResponseEntity<ParkingSessionDto> updateParkSession(@PathVariable UUID id, @RequestBody ParkingSessionDto dto) {
        return ResponseEntity.ok(parkSessionService.update(id, dto));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteParkSession(@PathVariable UUID id) {
        parkSessionService.delete(id);
        return ResponseEntity.noContent().build();
    }
}
