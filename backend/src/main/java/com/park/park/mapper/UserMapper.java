package com.park.park.mapper;

import com.park.park.dto.UserDTO;
import com.park.park.entity.User;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface UserMapper {
    UserDTO toDto(User entity);

    User toEntity(UserDTO dto);
}
