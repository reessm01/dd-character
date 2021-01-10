import { Dnd5eApiPreview, GraphqlLikeResponse, Spell } from '../interfaces';
import { getEnvironmentDetails } from '../helpers';

export interface IDnd5eApiClient {
    getSpellList(): Promise<GraphqlLikeResponse<Dnd5eApiPreview>>;
    getSpell(urlRef: string): Promise<Spell>;
    getMagicSchools(): Promise<GraphqlLikeResponse<Dnd5eApiPreview>>;
}

export class Dnd5eApiClient implements IDnd5eApiClient {
    baseApiUrl: string;
    constructor() {
        this.baseApiUrl = getEnvironmentDetails().dd5eApi;
    }

    public getSpellList(): Promise<GraphqlLikeResponse<Dnd5eApiPreview>> {
        const spellList = '/api/spells';

        return this.fetchData<GraphqlLikeResponse<Dnd5eApiPreview>>(spellList);
    }

    public getSpell(urlRef: string): Promise<Spell> {
        return this.fetchData<Spell>(urlRef);
    }

    public getMagicSchools() {
        const magicSchools = '/api/magic-schools';

        return this.fetchData<GraphqlLikeResponse<Dnd5eApiPreview>>(magicSchools);
    }

    private fetchData<DataType>(endpoint: string): Promise<DataType> {
        return fetch(`${this.baseApiUrl}${endpoint}`).then((res) => res.json());
    }
}
