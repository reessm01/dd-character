import { useEffect, useState } from 'react';
import { Dnd5eApiPreview, GraphqlLikeResponse } from '../interfaces';
import { Dnd5eApiClient } from '../services';

export interface IUseMagicSchools {}

export const useMagicSchools = () => {
    const [magicSchools, setMagicSchools] = useState<Dnd5eApiPreview[]>([]);
    const [isMagicSchoolsLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        const apiClient = new Dnd5eApiClient();
        setIsLoading(true);
        apiClient
            .getMagicSchools()
            .then((data: GraphqlLikeResponse<Dnd5eApiPreview>) => {
                setMagicSchools(data.results);
            })
            .catch((error) => setError(error.message))
            .finally(() => setIsLoading(false));
    }, []);

    return { magicSchools, isMagicSchoolsLoading, error };
};
