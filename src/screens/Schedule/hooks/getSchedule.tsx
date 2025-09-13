import { useEffect, useState } from 'react'
import { GetSchedule } from '../../../api/methods/schedule/schedule';
import { alertHandler } from '../../../utils/alertHandler';
import { checkNetwork } from '../../../utils/checkNetwork';

export const getSchedule = (date: string) => {

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [schedule, setschedule] = useState<any>()

    useEffect(() => {
        const fetchSchedule = async () => {
            try {
                const network = await checkNetwork()
                if (!network) { alertHandler(); return; }
                const response = await GetSchedule(date)
                setschedule(response?.data)
            } catch (e) {
                console.log(e?.response?.data)
                setError(e?.response?.data?.message || 'Ошибка загрузки расписания');
            } finally {
                setLoading(false);
            }
        };
    
        fetchSchedule();
    }, [date]);

    return { schedule, loading, error };
}