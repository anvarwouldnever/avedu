import { useEffect, useState } from 'react'
import { GetProgress } from '../../../api/methods/home/progress';

export const getProgress = () => {

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [progress, setProgress] = useState<any>()

    useEffect(() => {
        const fetchProgress = async () => {
            try {
                const response = await GetProgress()
                setProgress(response?.data)
            } catch (e) {
                console.log(e?.response?.data)
                setError(e?.response?.data?.message || 'Ошибка загрузки аккаунта');
            } finally {
                setLoading(false);
            }
        };
    
        fetchProgress();
    }, []);

    return { progress, loading, error };
}