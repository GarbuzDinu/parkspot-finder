package com.park.park.service;

import com.park.park.dto.CreateUserRequest;
import com.park.park.dto.UserDTO;
import com.park.park.entity.User;
import com.park.park.mapper.UserMapper;
import com.park.park.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class UserService {

    private final UserRepository userRepository;
    private final UserMapper userMapper;
    private final PasswordEncoder passwordEncoder;

    public List<UserDTO> getAllUsers() {
        return userRepository.findAll().stream()
                .map(userMapper::toDto)
                .collect(Collectors.toList());
    }

    public UserDTO getUserById(UUID id) {
        return userRepository.findById(id)
                .map(userMapper::toDto)
                .orElseThrow(() -> new RuntimeException("User not found with id: " + id));
    }

    @Transactional
    public UserDTO createUser(CreateUserRequest request) {

        User user = new User();
        user.setId(null);
        user.setUsername(request.getUsername());
        user.setPassword(passwordEncoder.encode(request.getPassword()));

        return userMapper.toDto(userRepository.save(user));
    }

    @Transactional
    public UserDTO updateUser(UUID id, UserDTO dto) {
        User existingUser = userRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("User not found with id: " + id));

        existingUser.setUsername(dto.getUsername());

        return userMapper.toDto(userRepository.save(existingUser));
    }

    @Transactional
    public void deleteUser(UUID id) {
        userRepository.deleteById(id);
    }
}
