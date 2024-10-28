import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: process.env.VUE_APP_API_URL,
  // Aquí puedes añadir más configuraciones como headers por defecto
});

export default axiosInstance;