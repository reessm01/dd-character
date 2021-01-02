import { getEnvironmentDetails } from './index';
import { Icon } from '../interfaces';

export const getIcon = (school: string) => {
    const environment = getEnvironmentDetails();
    const token = environment.iconFinderApiKey;

    const initIconList: Icon[] = [
        { school: 'evocation', url: '' },
        { school: 'illusion', url: '' },
        { school: 'necromancy', url: 'https://api.iconfinder.com/v4/icons/7112664/formats/png/32/download?token=' },
        { school: 'enchantment', url: '' },
        { school: 'divination', url: '' },
        { school: 'transmutation', url: '' },
        { school: 'conjuration', url: '' },
        { school: 'abjuration', url: '' },
    ];

    const masterIconList = initIconList.map((icon) => ({ ...icon, url: `${icon.url}${token}` }));

    return masterIconList.find((icon) => icon.school === school)?.url || '';
};
