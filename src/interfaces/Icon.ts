export type MagickSchool =
    | 'evocation'
    | 'illusion'
    | 'necromancy'
    | 'enchantment'
    | 'divination'
    | 'transmutation'
    | 'conjuration'
    | 'abjuration';

export interface Icon {
    school: MagickSchool;
    url: string;
}

export function MagickSchoolGuard(arg: string): arg is MagickSchool {
    return (
        arg === 'evocation' ||
        arg === 'illusion' ||
        arg === 'necromancy' ||
        arg === 'enchantment' ||
        arg === 'divination' ||
        arg === 'transmutation' ||
        arg === 'conjuration' ||
        arg === 'abjuration'
    );
}
