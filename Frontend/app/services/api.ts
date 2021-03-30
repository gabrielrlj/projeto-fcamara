import axios from 'axios';

const expoIp = "192.168.100.79";

const api = axios.create({
  baseURL: `http://${expoIp}:8080`,
  timeout: 10000,
});

export default api;