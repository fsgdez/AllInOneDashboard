import axios from 'axios';

// —————————————————————————————————————————————————————————————————————————————————————————————————
// Axios Defaults
// —————————————————————————————————————————————————————————————————————————————————————————————————
const axiosInstance = axios.create({
  baseURL: window.location.origin,
  headers: {},
});

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  },
);

export default axiosInstance;
