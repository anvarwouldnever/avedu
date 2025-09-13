import { useEffect, useState } from 'react';
import { GetText } from '../../../api/methods/system/text';
import { store } from '../../../store/store';
import { alertHandler } from '../../../utils/alertHandler';
import { checkNetwork } from '../../../utils/checkNetwork';

const cachedLabels: Record<string, any> = {};

export const getText = () => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchLabels = async () => {
            const lang = store.language;

            if (cachedLabels[lang]) {
                store.setText(cachedLabels[lang]);
                setLoading(false);
                return;
            }

            try {
                console.log('run')
                const network = await checkNetwork()
                if (!network) { alertHandler(); return; }
                const response = await GetText();
                const text = response?.data;
                cachedLabels[lang] = text;
                store.setText(text);
            } catch (e: any) {
                console.log(e);
                setError(e?.response?.data?.message || 'Ошибка загрузки текста');
            } finally {
                setLoading(false);
            }
        };

        fetchLabels();
    }, [store.language]);

    return { loading, error };
};
