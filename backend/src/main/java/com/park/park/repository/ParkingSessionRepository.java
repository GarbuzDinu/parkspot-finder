package com.park.park.repository;

import com.park.park.entity.ParkingSession;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.UUID;

@Repository
public interface ParkingSessionRepository extends JpaRepository<ParkingSession, UUID> {
}
