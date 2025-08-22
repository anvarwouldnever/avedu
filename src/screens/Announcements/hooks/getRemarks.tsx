import { useEffect, useState } from 'react'
import { GetRemarks } from '../../../api/methods/announcements/remarks';

let cachedRemarks: any = null;

export const getRemarks = () => {
    const [loading, setLoading] = useState(!cachedRemarks);
    const [error, setError] = useState<string | null>(null);
    const [remarks, setRemarks] = useState<any>(cachedRemarks);

    useEffect(() => {
        if (cachedRemarks) return;

        const fetchRemarks = async () => {
            try {
                console.log('zap remarks')
                const response = await GetRemarks();
                cachedRemarks = response?.data;
                setRemarks(response?.data);
            } catch (e: any) {
                console.log(e);
                setError(e?.response?.data?.message || 'Ошибка загрузки примечаний');
            } finally {
                setLoading(false);
            }
        };

        fetchRemarks();
    }, []);

    return { remarks, loading, error };
};
