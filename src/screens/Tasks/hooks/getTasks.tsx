import { useEffect, useState } from 'react'
import { GetTasks } from '../../../api/methods/tasks/tasks';

export const getTasks = () => {

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [tasks, setTasks] = useState<any>();

    useEffect(() => {

        const fetchTasks = async () => {
            try {
                const response = await GetTasks();
                setTasks(response?.data);
            } catch (e: any) {
                console.log(e);
                setError(e?.response?.data?.message || 'Ошибка загрузки заданий');
            } finally {
                setLoading(false);
            }
        };

        fetchTasks();
    }, []);

    return { tasks, loading, error };
};