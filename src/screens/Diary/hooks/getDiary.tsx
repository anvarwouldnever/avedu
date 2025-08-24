import { useEffect, useState } from 'react'
import { GetDiary } from '../../../api/methods/diary/diary';

export const getDiary = (date: string) => {

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [diary, setDiary] = useState<any>()

    useEffect(() => {
        const fetchDiary = async () => {
            try {
                const response = await GetDiary(date)
                setDiary(response?.data)
            } catch (e) {
                console.log(e)
                setError(e?.response?.data?.message || 'Ошибка загрузки аккаунта');
            } finally {
                setLoading(false);
            }
        };
    
        fetchDiary();
    }, [date]);

    return { diary, loading, error };
}