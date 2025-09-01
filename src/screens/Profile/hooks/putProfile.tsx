import { useState } from 'react';
import { PutProfile } from '../../../api/methods/profile/update';

export const putProfile = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState(false);

    const updateProfile = async (firstName: string, lastName: string, fatherName: string, gender: number, birthday: string, email: string, address: object) => {
        setLoading(true);
        setError(null);
        setSuccess(false);

        try {
            const response = await PutProfile( firstName, lastName, fatherName, gender, birthday, email, address);
            setSuccess(true);
            return response?.data;
        } catch (e: any) {
            console.log(e?.response?.data);
            setError(e?.response?.data?.message || 'Ошибка обновления профиля');
            throw e;
        } finally {
            setLoading(false);
        }
    };

    return { updateProfile, loading, error, success };
};
