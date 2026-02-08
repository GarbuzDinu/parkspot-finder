package com.park.park.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.UUID;

@Entity
@Table(name = "park_slot") // Adjust table name if needed
@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class ParkSlot {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private UUID id;

    @Column(name = "name", nullable = false)
    private String name;

    @Column(name = "address", nullable = false)
    private String address;

    @Column(name = "lat", nullable = false)
    private Double lat;

    @Column(name = "lng", nullable = false)
    private Double lng;

    @Column(name = "total_slots", nullable = false)  // Matches frontend 'totalSlots'
    private Integer totalSlots;

    @Column(name = "free_slots", nullable = false)  // Matches frontend 'freeSlots'
    private Integer freeSlots;

    @Column(name = "rating", nullable = false)
    private Double rating;
}
