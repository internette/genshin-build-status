export interface Skill {
    skill: {
        name: Map<string, string>;
    }
    level: {
        base: number;
        extra: number;
    }
}

export interface Stat {
    fightPropName: Map<string, string>;
    isPercent: boolean;
    value: number;
}

interface Weapon {
    name: Map<string, string>;
    id: number,
    level: number,
    maxLevelL: number
}

export interface CharacterDetails {
    name:  string,
    id: number,
    level: number,
    maxLevel: number,
    stats: Stat[],
    skills: Skill[],
    weapon: Weapon
}