import { parsedRegexDamageTypes } from './getDamageTypes';
import { parsedRegexAbilityScores, parsedRegexSavingThrows } from './getAbilityScores';
import ordinal from 'ordinal';

export type TagOptions = 'b';

export interface TextFormatOptions {
    tag: TagOptions;
}

export interface RegExCollection {
    re: RegExp;
    options: TextFormatOptions;
    description?: string;
    examples?: string;
}

const regexNths = () =>
    new Array(100)
        .fill(0)
        .map((_, index) => ordinal(index))
        .join('|');

export const regexCollection: RegExCollection[] = [
    {
        re: /(?<!_)(?:(\d{1,2})?d\d{1,3})(?!_)/gi,
        options: { tag: 'b' },
        examples: '1d10, 4d4, etc.',
    },
    {
        re: /(?<!_)(?:AC\s[1-9]\d?|AC)(?!_)/g,
        options: { tag: 'b' },
        examples: 'AC 20, AC, AC 2',
    },
    {
        re: new RegExp(`(?<!_)(?:(${parsedRegexDamageTypes})\\s(damage(')?(s)?)?)(?!_)`, 'gi'),
        options: { tag: 'b' },
        examples: 'acid damage',
    },
    {
        re: new RegExp(`(?<!_)(?:((${parsedRegexSavingThrows})\\s)?saving\\sthrow(s)?)(?!_)`, 'gi'),
        options: { tag: 'b' },
        examples: 'death saving throws, charisma saving throw, etc.',
    },
    {
        re: new RegExp(`(?<!_)${regexNths()}(\\slevel(\\sor\\s(higher|lower))?)?(?!_)`, 'gi'),
        options: { tag: 'b' },
        examples: 'death saving throws, charisma saving throw, etc.',
    },
    {
        re: new RegExp(`(?<!_)(?:(?:(?:range(?:d)?|melee)\\s)?spell\\sattack)(?!_)`, 'gi'),
        options: { tag: 'b' },
        examples: 'ranged spell attack, spell attack, etc.',
    },
    {
        re: new RegExp(`(?<!_)(?:(ranged|melee)\\sattack(s)?)(?!_)`, 'gi'),
        options: { tag: 'b' },
        examples: 'ranged spell attack, spell attack, etc.',
    },
    {
        re: /(?<!_)(?:((?:[0-9]|[1-9][0-9]|100)\s)?(hit point(?:s)?))(?!_)/gi,
        options: { tag: 'b' },
        examples: '10 hit points, hit point/s, etc.',
    },
    {
        re: new RegExp(`(?<!_)(?:(${parsedRegexAbilityScores})(\\sof\\s(?:[0-9]|[1-9][0-9]|100)\\s\\(\\+(\\d{1,3})\\)|score)?)(?!_)`, 'gi'),
        options: { tag: 'b' },
        examples: '10 hit points, hit point/s, etc.',
    },
    {
        re: new RegExp(`(?<!_)(?:(${parsedRegexAbilityScores})\\sscore(s)?)(?!_)`, 'gi'),
        options: { tag: 'b' },
        examples: '10 hit points, hit point/s, etc.',
    },
    {
        re: /(?<!_)(?:(-)?(\d{1,6})(\s|-)?)((foot|feet|day(s)?|week(s)?|year(s)?|inch(es)?|yard(s)?|minute(s)?|second(s)?|hour(s)?|or\s(more|less|lower))(-radius)?)?(?!_)/gi,
        options: { tag: 'b' },
        examples: '10 hit points, hit point/s, etc.',
    },
    {
        re: /(?<!_)(?:attack\sbonus(')?)(?!_)/gi,
        options: { tag: 'b' },
        examples: '10 hit points, hit point/s, etc.',
    },
    {
        re: /(?<!_)(?:(spellcasting)\sability\smodifier(\s\+\syour\sproficiency\sbonus)?)(?!_)/gi,
        options: { tag: 'b' },
        examples: '10 hit points, hit point/s, etc.',
    },
    {
        re: new RegExp(`(?<!_)(?:attack\\sroll(s)?)(?!_)`, 'gi'),
        options: { tag: 'b' },
        examples: 'attack roll/s',
    },
];
