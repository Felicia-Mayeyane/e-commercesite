import axios from 'axios';

// Base URL for API requests
const BASE_URL = 'http://localhost:1500/api/';

// Function to retrieve token from local storage
const getToken = () => {
  try {
    const persistedState = JSON.parse(localStorage.getItem('persist:root'));
    if (persistedState && persistedState.user) {
      const user = JSON.parse(persistedState.user);
      return user.currentUser ? user.currentUser.accessToken : '';
    }
  } catch (e) {
    console.error('Error retrieving token:', e);
  }
  return '';
};

// Create an Axios instance for public requests (no authentication)
export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

// Create an Axios instance for authenticated requests
export const userRequest = axios.create({
  baseURL: BASE_URL,
});

// Add an interceptor to attach the token dynamically
userRequest.interceptors.request.use(
  (config) => {
    const token = getToken(); // Get the token
    console.log('Token retrieved:', token); // Debugging line
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`; // Set the token in the headers
    }
    return config;
  },
  (error) => {
    console.error('Request error:', error); // Debugging line
    return Promise.reject(error);
  }
);
