export interface Environments {
    local: Config;
}

export interface Config {
    dd5eApi: string;
    iconFinderApiKey: string;
}

const local: Config = {
    dd5eApi: 'https://www.dnd5eapi.co',
    iconFinderApiKey: process.env.REACT_APP_ICON_FINDER_API_KEY as string,
};

export const environments: Environments = {
    local,
};
