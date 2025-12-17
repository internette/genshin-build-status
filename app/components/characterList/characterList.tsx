import { useEffect, useContext } from "react";
import { UserSessionContext } from "@/app/contexts/userSession/userSession";
import { CharacterSessionContext } from "@/app/contexts/charactersSession/charactersSession";
export default function CharacterList() {
    const { charactersSessionInfo, setCharactersSessionInfo } = useContext(CharacterSessionContext);
    const { characters } = charactersSessionInfo;
    const { userSessionInfo } = useContext(UserSessionContext); 
    const { uuid } = userSessionInfo;

    useEffect(() => {
        const fetchCharacters = async () => {
            if(!uuid) return;
            const response = await fetch("/api/characters", {
                method: "POST",
                body: JSON.stringify({ uuid: uuid })
            });
            const data = await response.json();
            setCharactersSessionInfo({ characters: data.characters });
        };
        fetchCharacters();
    }, [uuid, setCharactersSessionInfo]);
    return <aside>
        <ul>{characters.map(character => {
            return <li key={character.avatarId}>
                <p>{character.name}</p>
                <img src={character.images.icon} alt={`${character.name} thumbnail.`}/>
            </li>;
        })}</ul>
    </aside>;
}