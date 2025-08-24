import { useEffect, useState } from 'react'
import { GetChildren } from '../../../api/methods/children/children';

export const getChildren = () => {

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [children, setChildren] = useState<any>()

    useEffect(() => {
        const fetchChildren = async () => {
            try {
                const response = await GetChildren()
                setChildren(response?.data)
            } catch (e) {
                console.log(e)
                setError(e?.response?.data?.message || 'Ошибка загрузки детей');
            } finally {
                setLoading(false);
            }
        };
    
        fetchChildren();
    }, []);

    return { children, loading, error };
}