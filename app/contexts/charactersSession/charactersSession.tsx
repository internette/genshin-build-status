"use client"
import { createContext, useState } from "react";
import { CharactersSession, CharactersSessionInfo } from "../../models/CharactersSession";

export const CharacterSessionContext = createContext<CharactersSession>({ 
    charactersSessionInfo: { characters: [] },
    setCharactersSessionInfo: (_characters) => {}
});

export const CharactersSessionProvider = ({ children }:{ children: React.ReactNode })=> {
    const [characters, setCharacters] = useState<CharactersSessionInfo>({ characters: [] });
    
    return (
        <CharacterSessionContext.Provider value={{ charactersSessionInfo: characters, setCharactersSessionInfo: setCharacters }}>
            {children}
        </CharacterSessionContext.Provider>
    );
}