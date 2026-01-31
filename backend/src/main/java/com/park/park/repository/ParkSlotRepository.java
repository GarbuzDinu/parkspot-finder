package com.park.park.repository;

import com.park.park.entity.ParkSlot;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ParkSlotRepository extends JpaRepository<ParkSlot, Long> {
}
