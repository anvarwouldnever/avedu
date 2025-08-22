import { useEffect, useState } from 'react'
import { GetProfile } from '../../../api/methods/profile/profile';

export const getProfile = () => {

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [profile, setProfile] = useState<any>()

    useEffect(() => {
        const fetchProfile = async () => {
            try {
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