import { Damage } from './Damage';
import { Dnd5eApiPreview } from './Dnd5eApiPreview';

export interface Spell {
    index: string;
    name: string;
    desc: string[];
    higher_level: string[];
    range: string;
    components: string[];
    material: string;
    ritual: boolean;
    duration: string;
    concentration: boolean;
    casting_time: string;
    level: number;
    attack_type: string;
    damage: Damage;
    school: Dnd5eApiPreview;
    classes: Dnd5eApiPreview[];
    subclasses: Dnd5eApiPreview[];
    url: string;
}
