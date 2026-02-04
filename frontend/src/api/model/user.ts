export interface UserDTO {
    id: string;
    username: string;
}

export interface CreateUserRequest {
    username: string;
    password?: string;
}
