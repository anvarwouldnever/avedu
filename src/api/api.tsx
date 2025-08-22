import axios from "axios";
import * as SecureStore from 'expo-secure-store';
import { store } from "../store/store";

const BASE_URL = 'https://api.avtechedu.uz/api/v1/';

const api = axios.create({
    baseURL: BASE_URL,
});

api.interceptors.request.use(
    async (config: any) => {
        if (!config.skipAuth) {
            // const token = await SecureStore.getItemAsync('access_token');
            const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIzIiwianRpIjoiNmE5NDZiOTk5YmIwYWZkODIyYWQ0NjhjZDhlNDY0MTExNjZiMzZjZmFjODk3YWQ0ZmM3YmM3ZTNiZWNhMjJlMTM0MDU5NzM0NGViMWQ5MjUiLCJpYXQiOjE3NTU3NzY1MjUuMzc1OTA1LCJuYmYiOjE3NTU3NzY1MjUuMzc1OTA5LCJleHAiOjE3ODczMTI1MjUuMzExOTU1LCJzdWIiOiIxMyIsInNjb3BlcyI6W119.MLsug_NS7iyHZqcZZvNxZCS_YUv835iEUX2dQMItw_SS6MiCnShajKjI8x8LLYT-murIsiBkRVGdBoq0jeEurLbgwZb_8UV6R-MYJj80XsKC8VdSKMzZ6M7TNzKsbq4jNePV1gtkBvSyreKeBKOCRFwPTDqACP6X5jUFcXWLsRFDYln5sI3pRIHHY_VlfB0amUf0WVfNkuR4zZFIOJhw2YqRdSbtLaA7sSSsOcxVSXaMpNzfNYmm_sWs4Bkpx34oRIEHNGOxdicPTMAPeWqdvlIDVG-RkVwEbf_5sxeTs0J_1qobBjU4z9mDNXEo4NDtJkEECKYAYvLiQxOObVIjLjJyXNyqrYtqYilFTepUgG69HzyFvRlFYPoR9vZOJpO7b9-sbrxfZcL4N0E6k1eKpIISY36GxKGPH4KRAypGqmETMkcQY9xTU193Ujj96KZYFaMHufcS3nkcARJ0MJZ_1t4j3yhunITC9v6X5PBdjQO0rU4-qG1CEFoH2qTcCoLv7w9H6Zw7QHPHau1YoY5hAjgtaMOggUO7Laja8JJX59-0CMYquvgMHui0UFnnyh0oxRt_O7eKWTgxraVfq9qr7BUtYXtckdxHkVMgvqqAyiro1uxaI2E0p90v9LdA8CRYjDlOQvZkVfNyGVXgGgJYPBneXSS6ura_ZkuoUG5XwT0'
            if (token) {
                config.headers.Authorization = `Bearer ${token}`;
            }
        }

        config.headers['X-Localization'] = store?.language || 'ru';
        
        return config;
    },
    (error) => Promise.reject(error)
);

export default api;