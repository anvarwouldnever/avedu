import axios from "axios";
import * as SecureStore from 'expo-secure-store';
import { store } from "../store/store";

const BASE_URL = 'https://api.avtechedu.uz/api/v1/';

const api = axios.create({
    baseURL: BASE_URL,
});

api.interceptors.request.use(
    async (config: any) => {

        const token = await SecureStore.getItemAsync('token');
        const cid = await SecureStore.getItemAsync('cid');
        
        if (!config.skipAuth) {
            if (token) {
                config.headers.Authorization = `Bearer ${token}`;
            }
        }

        config.headers['X-Localization'] = store?.language || 'ru';
        config.headers['cid'] = cid;
        
        return config;
    },
    (error) => Promise.reject(error)
);

export default api;