import { useContext } from "react";
import { CharacterSessionContext } from "@/app/contexts/charactersSession/charactersSession";  

export default function CharacterDetails() {
    const { charactersSessionInfo } = useContext(CharacterSessionContext);
    const { characters } = charactersSessionInfo;
    return <main>
        
    </main>
}