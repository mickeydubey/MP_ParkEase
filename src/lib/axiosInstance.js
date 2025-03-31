import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_PUBLIC_PARKEASE_API_URL || 'http://localhost:3000',
});

axiosInstance.interceptors.request.use(
  (config) => {
    try {
      const rawToken = localStorage.getItem("authToken");
      if (rawToken) {
        const token = rawToken.replace(/['"]+/g, ""); // Clean any stringified quotes
        config.headers["Authorization"] = `Bearer ${token}`;
      }
    } catch (error) {
      console.warn("⚠️ Error attaching auth token", error);
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default axiosInstance;
