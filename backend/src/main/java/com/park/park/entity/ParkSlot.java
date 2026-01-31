package com.park.park.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "park_slot")
public class ParkSlot {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    private String address;

    @Column(name = "free_slots")
    private int freeSlots;

    @Column(name = "busy_slots")
    private int busySlots;

    // ✅ No-args constructor
    public ParkSlot() {}

    // ✅ All-args constructor
    public ParkSlot(Long id, String name, String address, int freeSlots, int busySlots) {
        this.id = id;
        this.name = name;
        this.address = address;
        this.freeSlots = freeSlots;
        this.busySlots = busySlots;
    }

    // ✅ Getters and setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public String getAddress() { return address; }
    public void setAddress(String address) { this.address = address; }

    public int getFreeSlots() { return freeSlots; }
    public void setFreeSlots(int freeSlots) { this.freeSlots = freeSlots; }

    public int getBusySlots() { return busySlots; }
    public void setBusySlots(int busySlots) { this.busySlots = busySlots; }

    // ✅ Optional: toString() for debugging
    @Override
    public String toString() {
        return "ParkSlot{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", address='" + address + '\'' +
                ", freeSlots=" + freeSlots +
                ", busySlots=" + busySlots +
                '}';
    }
}
