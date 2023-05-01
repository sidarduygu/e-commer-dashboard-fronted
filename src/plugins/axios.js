import axiosOriginal from 'axios';
import { useAuthStore } from '@/stores';
import { helper } from '@/utils/helper';

const axios = axiosOriginal.create({
  baseURL: import.meta.env.VITE_API_URL,
  timeout: 5000,
  headers: {
    "Accept": 'application/json',
    'Content-Type': 'application/json',
    'X-Requested-With': 'XMLHttpRequest',
  },
  withCredentials: false
});

axios.interceptors.request.use((config) => {
  const authStore = useAuthStore();
  if(authStore.isAuthenticated) {
    config.headers.Authorization = `Bearer ${authStore.token}`
  }
  return config
})

axios.interceptors.response.use(
  (response) => {
    if(response.data && response.data.message){
      helper.showSuccess(response.data.message)
    }
    return response
  },
  (error) => {
    helper.showSuccess(error)
    return Promise.reject(error)
  }
);

export default axios;


