import axios, { AxiosRequestConfig } from "axios";

const apiClient = axios.create({
  baseURL: "http://localhost:8080",
//   auth: {
//     username: "user",
//     password: "37f75526-b6b0-4887-bef7-651fcf57f1b1",
//   },
});
export const customInstance = async <T>(
  config: AxiosRequestConfig,
  options?: AxiosRequestConfig,
): Promise<T> => {
  const { data } = await apiClient({ ...config, ...options });
  return data;
};
