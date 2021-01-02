import { Dnd5eApiPreview } from './Dnd5eApiPreview';

export interface Damage {
    damage_type: Dnd5eApiPreview;
    damage_at_slot_level: {
        [key: number]: string;
    };
}
