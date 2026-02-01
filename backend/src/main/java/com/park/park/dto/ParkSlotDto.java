package com.park.park.dto;

public class ParkSlotDto {

    private Long id;
    private String name;
    private String address;
    private int freeSlots;
    private int busySlots;

    public int getRating() {
        return rating;
    }

    public void setRating(int rating) {
        this.rating = rating;
    }

    private int rating;

    // ✅ No-args constructor
    public ParkSlotDto() {}

    // ✅ All-args constructor
    public ParkSlotDto(Long id, String name, String address, int freeSlots, int busySlots, int rating) {
        this.id = id;
        this.name = name;
        this.address = address;
        this.freeSlots = freeSlots;
        this.busySlots = busySlots;
        this.rating = rating;
    }

    // ✅ Getters & setters
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
}
