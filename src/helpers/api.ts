import axios, { AxiosRequestConfig } from 'axios';

async function request(options: AxiosRequestConfig) {
  return await axios({ baseURL: 'http://localhost:4000/api', ...options });
}

export async function post(endpoint: string, data: any) {
  return await request({ url: endpoint, method: 'POST', data });
}
