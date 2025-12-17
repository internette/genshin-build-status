import { useEffect, useContext } from "react";
import Image from "next/image";
import { UserSessionContext } from "@/app/contexts/userSession/userSession";
import { CharacterSessionContext } from "@/app/contexts/charactersSession/charactersSession";
import { CharacterDetails } from "@/app/models/Character";
export default function CharacterList({ setFocusedCharacter }: { setFocusedCharacter: (character: CharacterDetails | null) => void }) {
    const { charactersSessionInfo, setCharactersSessionInfo } = useContext(CharacterSessionContext);
    const { characters } = charactersSessionInfo;
    const { userSessionInfo } = useContext(UserSessionContext); 
    const { uuid } = userSessionInfo;

    useEffect(() => {
        const fetchCharacters = async () => {
            if(!uuid) return;
            if(characters.length === 0){
                const response = await fetch("/api/characters", {
                    method: "POST",
                    body: JSON.stringify({ uuid: uuid })
                });
                const data = await response.json();
                setCharactersSessionInfo({ characters: data.characters });
                setFocusedCharacter(data.characters[0]);
            }
        };
        fetchCharacters();
    }, [uuid, setCharactersSessionInfo, characters.length, setFocusedCharacter]);
    return <aside>
        <ul>{characters.map(character => {
            return <li key={character.id} onClick={()=> setFocusedCharacter(character)}>
                <p>{character.name}</p>
                <Image src={character.images.icon} alt={`${character.name} thumbnail.`} fill={true}/>
            </li>;
        })}</ul>
    </aside>;
}