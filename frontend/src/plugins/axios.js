import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'http://localhost:5000',
  // Aquí puedes añadir más configuraciones como headers por defecto
});

export default axiosInstance;