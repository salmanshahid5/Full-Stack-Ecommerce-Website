import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";

// Safely retrieve the token
let TOKEN = null;
try {
  const persistedRoot = localStorage.getItem("persist:root");
  if (persistedRoot) {
    const user = JSON.parse(JSON.parse(persistedRoot).user);
    TOKEN = user?.currentUser?.accessToken || null; // Optional chaining to avoid errors
  }
} catch (error) {
  console.error("Error retrieving token:", error);
}

// Create public request instance
export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

// Create user request instance
export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: TOKEN ? `Bearer ${TOKEN}` : undefined }, // Use undefined if TOKEN is null
});
