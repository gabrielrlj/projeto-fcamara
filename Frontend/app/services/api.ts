import axios from 'axios';

const expoIp = "localhost";

const api = axios.create({
  baseURL: `http://${expoIp}:8080`,
  timeout: 10000,
});

export default api;