import { Dnd5eApiPreview, CommonFetchHookInputs, GraphqlLikeResponse, Spell, GetSpellParams } from '../interfaces';
import { getEnvironmentDetails } from '../helpers';

export interface IDnd5eApiClient {
    getSpellList(inputs: CommonFetchHookInputs): void;
    getSpell(inputs: GetSpellParams): void;
}

export class Dnd5eApiClient implements IDnd5eApiClient {
    constructor() {
        this.baseApiUrl = getEnvironmentDetails().dd5eApi;
    }

    baseApiUrl: string;

    public getSpellList({ setIsLoading, setError, setData }: CommonFetchHookInputs): void {
        const spellList = '/api/spells';
        this.fetchData<GraphqlLikeResponse<Dnd5eApiPreview>>(`${this.baseApiUrl}${spellList}`)
            .then((data: GraphqlLikeResponse<Dnd5eApiPreview>) => {
                setData(data.results);
            })
            .catch((error) => {
                setError(error.message);
            })
            .finally(() => {
                setIsLoading(false);
            });
    }

    public getSpell({ setIsLoading, setError, setData, urlRef }: GetSpellParams): void {
        this.fetchData<Spell>(`${this.baseApiUrl}${urlRef}`)
            .then((data) => {
                setData(data);
            })
            .catch((error) => setError(error.message))
            .finally(() => setIsLoading(false));
    }

    private fetchData<DataType>(url: string): Promise<DataType> {
        return fetch(url).then((res) => res.json());
    }
}
