import { useEffect, useState } from 'react'
import { GetProgress } from '../../../api/methods/home/progress';
import { alertHandler } from '../../../utils/alertHandler';
import { checkNetwork } from '../../../utils/checkNetwork';

// глобальный кеш (живёт пока приложение открыто)
let cachedProgress: any = null;

export const getProgress = () => {
    const [loading, setLoading] = useState(!cachedProgress);
    const [error, setError] = useState<string | null>(null);
    const [progress, setProgress] = useState<any>(cachedProgress);

    useEffect(() => {
        if (cachedProgress) {
            setProgress(cachedProgress);
            setLoading(false);
            return;
        }

        const fetchProgress = async () => {
            try {
                const network = await checkNetwork()
                if (!network) return alertHandler();

                const response = await GetProgress();
                cachedProgress = response?.data; // сохраняем в кеш
                setProgress(response?.data);
            } catch (e: any) {
                console.log(e?.response?.data);
                setError(e?.response?.data?.message || 'Ошибка загрузки аккаунта');
            } finally {
                setLoading(false);
            }
        };

        fetchProgress();
    }, []);

    return { progress, loading, error };
}
