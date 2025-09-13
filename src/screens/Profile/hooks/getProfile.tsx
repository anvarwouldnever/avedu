import { useEffect, useState } from 'react'
import { GetProfile } from '../../../api/methods/profile/profile';
import { alertHandler } from '../../../utils/alertHandler';
import { checkNetwork } from '../../../utils/checkNetwork';

export const getProfile = () => {

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [profile, setProfile] = useState<any>()

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const network = await checkNetwork()
                if (!network) { alertHandler(); return; }
                const response = await GetProfile()
                setProfile(response?.data)
            } catch (e) {
                console.log(e)
                setError(e?.response?.data?.message || 'Ошибка загрузки аккаунта');
            } finally {
                setLoading(false);
            }
        };
    
        fetchProfile();
    }, []);

    return { profile, loading, error };
}