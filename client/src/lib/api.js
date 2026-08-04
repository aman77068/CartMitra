import axios from "axios";

export const API_BASE_URL =
  import.meta.env.VITE_API_URL || "http://localhost:5001";

export const apiClient = axios.create({
  baseURL: API_BASE_URL,
});

export const buildApiUrl = (path) => `${API_BASE_URL}${path}`;
