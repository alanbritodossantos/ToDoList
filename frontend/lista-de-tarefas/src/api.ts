// src/api.ts

import axios from "axios";

const api = axios.create({
  baseURL: "https://localhost:7210/api", // Substitua pelo endereço e porta do seu backend
});

export default api;
