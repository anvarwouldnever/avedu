import axios from "axios";
import * as SecureStore from 'expo-secure-store';

const BASE_URL = 'https://api.yangidunyo.uz/api';

const api = axios.create({
    baseURL: BASE_URL,
});

api.interceptors.request.use(
    async (config: any) => {
        if (!config.skipAuth) {
            const token = await SecureStore.getItemAsync('access_token');
            if (token) {
                config.headers.Authorization = `Bearer ${token}`;
            }
        }
        return config;
    },
    (error) => Promise.reject(error)
);

export default api;