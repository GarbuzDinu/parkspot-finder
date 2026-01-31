package com.park.park.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "parking_slots")
public class ParkingSlotEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, unique = true)
    private String slotNumber;

    @Column(nullable = false)
    private boolean occupied;

    @Column(nullable = false)
    private String level; // e.g. B1, B2, Ground

    // Constructors
    public ParkingSlotEntity() {}

    public ParkingSlotEntity(String slotNumber, boolean occupied, String level) {
        this.slotNumber = slotNumber;
        this.occupied = occupied;
        this.level = level;
    }

    // Getters & Setters
    public Long getId() { return id; }
    public String getSlotNumber() { return slotNumber; }
    public void setSlotNumber(String slotNumber) { this.slotNumber = slotNumber; }

    public boolean isOccupied() { return occupied; }
    public void setOccupied(boolean occupied) { this.occupied = occupied; }

    public String getLevel() { return level; }
    public void setLevel(String level) { this.level = level; }
}
