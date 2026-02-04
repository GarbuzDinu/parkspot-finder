import axios, { AxiosRequestConfig } from "axios";

const apiClient = axios.create({
  baseURL: "",
});
export const customInstance = async <T>(
  config: AxiosRequestConfig,
  options?: AxiosRequestConfig,
): Promise<T> => {
  const { data } = await apiClient({ ...config, ...options });
  return data;
};
