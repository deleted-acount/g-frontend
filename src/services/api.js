import axios from 'axios';

// Create axios instance with base URL
const api = axios.create({
  baseURL: 'http://localhost:1337/api', 
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add request interceptor to add auth token if it exists
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Auth API calls
export const authAPI = {
  // Send OTP
  sendOTP: async (mobileNumber) => {
    try {
      const response = await api.post('/auth/send-otp', {
        mobileNumber,
      });
      return response.data;
    } catch (error) {
      throw error.response?.data || error;
    }
  },

  // Verify OTP
  verifyOTP: async (mobileNumber, otp) => {
    try {
      const response = await api.post('/auth/verify-otp', {
        mobileNumber,
        otp,
      });
      return response.data;
    } catch (error) {
      throw error.response?.data || error;
    }
  },

  // Register user
  register: async (userData) => {
    try {
      const response = await api.post('/auth/local/register', userData);
      return response.data;
    } catch (error) {
      throw error.response?.data || error;
    }
  },

  // Login user
  login: async (identifier, password) => {
    try {
      const response = await api.post('/auth/local', {
        identifier,
        password,
      });
      return response.data;
    } catch (error) {
      throw error.response?.data || error;
    }
  },
};

export default api; 