import axios from 'axios';
import { BASE_URL } from 'consts/client';
import { HTTPClient } from './httpClient';

const axiosClient = axios.create({
  baseURL: BASE_URL,
  timeout: 20000,
});

export const httpClient = new HTTPClient(axiosClient);