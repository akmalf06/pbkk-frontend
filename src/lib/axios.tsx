import axios from 'axios';
import toast from 'react-hot-toast';

const axiosClient = axios.create({
  baseURL: 'https://dev.justtips.id/api',
  headers: {
    Authorization: '',
  },
});

axiosClient.defaults.withCredentials = false;

axiosClient.interceptors.request.use(function (config) {
  const token = localStorage.getItem('token');
  if (config.headers) {
    config.headers.Authorization = token ? `${token}` : '';
  }
  return config;
});

axiosClient.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    if (error.response.code == 401) {
      localStorage.removeItem('token');
    }
    const messages = error.response.data.message;
    if (messages !== null || messages !== undefined) {
      if (typeof messages === 'string') {
        toast.error(messages);
      }
      if (typeof messages === 'object') {
        for (const key in messages) {
          for (const message of messages[key]) {
            toast.error(message);
          }
        }
      }
    }
    return Promise.reject(error);
  }
);

export default axiosClient;
