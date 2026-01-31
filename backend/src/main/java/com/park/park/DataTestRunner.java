package com.park.park;

import com.park.park.repository.ParkSlotRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class DataTestRunner implements CommandLineRunner {

    private final ParkSlotRepository repository;

    public DataTestRunner(ParkSlotRepository repository) {
        this.repository = repository;
    }

    @Override
    public void run(String... args) {
        System.out.println("All park slots from DB:");
        repository.findAll().forEach(slot ->
                System.out.println(slot.getId() + " " + slot.getName() + slot.getBusySlots())
        );
    }
}
