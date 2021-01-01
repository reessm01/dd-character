export interface Environments {
    local: Config;
}

export interface Config {
    dd5eApi: string;
}

const local: Config = {
    dd5eApi: 'https://www.dnd5eapi.co',
};

export const environments: Environments = {
    local,
};
