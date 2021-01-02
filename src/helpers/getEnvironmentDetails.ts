import { Config, Environments, environments } from '../environments/environments';

export const getEnvironmentDetails = (): Config => {
    const env = ((process.env.REACT_APP_ENV as string) as keyof Environments) || ('local' as keyof Environments);

    return environments[env];
};
