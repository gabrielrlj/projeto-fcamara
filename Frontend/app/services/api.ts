import axios from 'axios';

const expoIp = "192.168.100.7";

const api = axios.create({
  baseURL: `http://${expoIp}:19000`,
  timeout: 10000,
});

export default api;