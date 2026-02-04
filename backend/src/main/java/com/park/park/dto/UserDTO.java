package com.park.park.dto;

import lombok.Data;
import utils.Role;

import java.util.Set;
import java.util.UUID;

@Data
public class UserDTO {
    private UUID id;
    private String email;
    private String firstName;
    private String lastName;
    private String phoneNumber;
    private String username;
    private Set<Role> roles;
}
