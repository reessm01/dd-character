export interface MagicSchoolColors {
    school: string;
    color: string;
}

export const getMagicSchoolColors = (): MagicSchoolColors[] => {
    return [
        {
            school: 'evocation',
            color: '#d9ffcc',
        },
        {
            school: 'illusion',
            color: '#ffffcc',
        },
        {
            school: 'necromancy',
            color: '#ffcccc',
        },
        {
            school: 'enchantment',
            color: '#ffebcc',
        },
        {
            school: 'divination',
            color: '#ebccff',
        },
        {
            school: 'transmutation',
            color: '#ffccff',
        },
        {
            school: 'conjuration',
            color: '#ccffff',
        },
        {
            school: 'abjuration',
            color: '#ccebff',
        },
    ];
};
