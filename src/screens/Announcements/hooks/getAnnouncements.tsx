import { useEffect, useState } from 'react'
import { GetAnnouncements } from '../../../api/methods/announcements/announcements';

let cachedAnnouncements: any = null;

export const getAnnouncements = () => {
    const [loading, setLoading] = useState(!cachedAnnouncements);
    const [error, setError] = useState<string | null>(null);
    const [announcements, setAnnouncements] = useState<any>(cachedAnnouncements);

    useEffect(() => {
        if (cachedAnnouncements) return;

        const fetchAnnouncements = async () => {
            try {
                const response = await GetAnnouncements();
                cachedAnnouncements = response?.data;
                setAnnouncements(response?.data);
            } catch (e: any) {
                console.log(e);
                setError(e?.response?.data?.message || 'Ошибка загрузки объявлений');
            } finally {
                setLoading(false);
            }
        };

        fetchAnnouncements();
    }, []);

    return { announcements, loading, error };
};
