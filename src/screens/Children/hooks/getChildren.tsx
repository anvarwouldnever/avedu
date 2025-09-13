import { useEffect, useState } from 'react'
import { GetChildren } from '../../../api/methods/children/children';
import { alertHandler } from '../../../utils/alertHandler';
import { checkNetwork } from '../../../utils/checkNetwork';

export const getChildren = () => {

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [children, setChildren] = useState<any>()

    useEffect(() => {
        const fetchChildren = async () => {
            try {
                const network = await checkNetwork()
                if (!network) { alertHandler(); return; }
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