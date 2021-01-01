import { Config, Environments, environments } from '../environments/environments';

export const getEnvironmentDetails = (): Config => {
    const env = process.env.REACT_APP_ENV as keyof Environments;

    return environments[env];
};
