import { NextRequest, NextResponse } from "next/server";
import { EnkaClient } from "enka-network-api";
import { Skill, Stat } from "@/app/models/Character";
const enka = new EnkaClient();
enka.cachedAssetsManager.cacheDirectoryPath = "./cache";
enka.cachedAssetsManager.cacheDirectorySetup();
enka.cachedAssetsManager.fetchAllContents();

const getCharacterDetails = async (character) => {
    const { characterData } = character;
    const allSkills = character.skillLevels.map((skillLevelObj: Skill) => {
        const { skill, level } = skillLevelObj;
        const formattedSkill = {
            name: skill.name.get("en"),
            level: {
                base: level.base,
                extra: level.extra
            }
        };
        return formattedSkill
    });
    
    const allStats = character.stats.statProperties.map((stats: Stat) => {
        const stat = {};
        const statName = stats.fightPropName.get("en");
        stat[`${statName}`] = (stats.isPercent ? `${Math.floor(stats.value) * 100}%`: Math.floor(stats.value));
        return stat;
    });

    const characterWeapon = {
        name: character.weapon.weaponData.name.get("en"),
        id: character.weapon.weaponData.id,
        level: character.weapon.level,
        maxLevel: character.weapon.maxLevel
    }

    const characterBuild = {
        name:  characterData.name.get("en"),
        id: characterData.id,
        level: character.level,
        maxLevel: character.maxLevel,
        stats: allStats,
        skills: allSkills,
        weapon: characterWeapon,
        images: {
            icon: characterData.icon.url
        }
    };
    return characterBuild;
}

export async function POST(request: NextRequest) {
    const { uuid } = await request.json();
    const { characters } = await enka.fetchUser(uuid);
    const charactersWithDetails = await Promise.all(characters.map(async (character) => {
        const characterBuild = await getCharacterDetails(character);
        return characterBuild;
    }));

    return NextResponse.json({ characters: charactersWithDetails });
}   