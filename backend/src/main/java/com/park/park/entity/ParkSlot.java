package com.park.park.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.UUID;

@Entity
@Table(name = "park_slot")
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

    @Column(name = "capacity", nullable = false)
    private Integer capacity;

    @Column(name = "occupied", nullable = false)
    private Boolean occupied;

    @Column(name = "address", nullable = false)
    private String address;

    @Column(name = "city", nullable = false)
    private String city;

    @Column(name = "rating", nullable = false)
    private Double rating;

    @Column(name = "price", nullable = false)
    private Double price;
}
