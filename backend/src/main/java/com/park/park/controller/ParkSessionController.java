package com.park.park.controller;

import com.park.park.dto.ParkingSessionDto;
import com.park.park.service.ParkSessionService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/park-sessions")
@RequiredArgsConstructor
public class ParkSessionController {

    public final ParkSessionService parkSessionService;

    @GetMapping
    public List<ParkingSessionDto> getParkSessions() {
        return parkSessionService.getParkingSessions();
    }

    @PostMapping
    public ResponseEntity<ParkingSessionDto> createParkSession(@RequestBody ParkingSessionDto dto) {
        ParkingSessionDto create = parkSessionService.create(dto);
        return ResponseEntity.status(HttpStatus.CREATED).body(create);
    }
}
