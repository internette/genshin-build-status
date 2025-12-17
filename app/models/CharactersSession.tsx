import { Dispatch, SetStateAction } from "react";

export interface CharactersSession {
    charactersSessionInfo: CharactersSessionInfo,
    setCharactersSessionInfo: Dispatch<SetStateAction<CharactersSessionInfo>>
}

export interface Character {
    avatarId: number;
    name: string;
    level: number;
    costumeId: number | null;
}

export interface CharactersSessionInfo {
    characters: Character[] | []
}