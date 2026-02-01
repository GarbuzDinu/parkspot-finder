import { customInstance } from "../config/axiosConfig";
import { CreateUserRequest, UserDTO } from "./model/user";

export const createUser = async (data: CreateUserRequest): Promise<UserDTO> => {
    return customInstance<UserDTO>({
        url: "/api/users",
        method: "POST",
        data,
    });
};
