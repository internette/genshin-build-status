import { Dispatch, SetStateAction } from "react";
import { CharacterDetails } from "./Character";

export interface CharactersSession {
    charactersSessionInfo: CharactersSessionInfo,
    setCharactersSessionInfo: Dispatch<SetStateAction<CharactersSessionInfo>>
}

export interface CharactersSessionInfo {
    characters: CharacterDetails[] | []
}