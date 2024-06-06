import type { AxiosInstance, AxiosResponse, AxiosError, AxiosRequestConfig } from 'axios';
import axios from 'axios';

const axiosInstance: AxiosInstance = axios.create({
  baseURL: '/api',
});

let accessToken = '';

function setAccessToken(newToken: string): void {
  accessToken = newToken;
}

axiosInstance.interceptors.request.use((config) => {
  if (!config.headers.Authorization) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }
  return config;
});

axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => response,
  async (error: AxiosError): Promise<AxiosResponse> => {
    const prevRequest = error.config as AxiosRequestConfig & { sent?: boolean };
    if (error?.response?.status === 403 && !prevRequest.sent) {
      const response = await axios<{ accessToken: string }>('/api/tokens/refresh');
      accessToken = response.data.accessToken;
      prevRequest.sent = true;
      if (!prevRequest.headers) {
        prevRequest.headers = {};
      }
      prevRequest.headers.Authorization = `Bearer ${accessToken}`;
      return axiosInstance(prevRequest);
    }
    return Promise.reject(error);
  },
);

export { setAccessToken };

export default axiosInstance;
