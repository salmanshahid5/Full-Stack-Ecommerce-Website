import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";

const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3NzNjNTg3NjkxZGQyY2I0N2FjNTU4ZSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTczNTY5ODE5OSwiZXhwIjoxNzM1OTU3Mzk5fQ.ZtiRsbcnLdqjgdnhqK0gtjr5t8DAHa7k_N_3gS2YuBI"

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});
