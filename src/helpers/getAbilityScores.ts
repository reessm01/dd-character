export const getAbilityScores = (): string[] => {
    return ['charisma', 'constitution', 'dexterity', 'intelligence', 'strength', 'wisdom'];
};

export const parsedRegexSavingThrows = ['death', ...getAbilityScores()].join('|');

export const parsedRegexAbilityScores = getAbilityScores().join('|');
