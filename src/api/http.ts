import axios from 'axios';

export const http = axios.create({
  baseURL: 'https://shift-winter-2023-backend.onrender.com/api/',
  timeout: 1000,
});
