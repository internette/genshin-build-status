import { useState } from "react";
import CharacterList from "../../components/characterList/characterList";
import CharacterDetails from "../../components/characterDetails.tsx/characterDetails";
import { CharacterDetails as CharacterDetailsType } from "../../models/Character";


export default function CharacterScreen() {
    const [focusedCharacter, setFocusedCharacter] = useState< CharacterDetailsType | null>(null);  
    return <div>
        <CharacterList setFocusedCharacter={setFocusedCharacter} />
        <CharacterDetails character={focusedCharacter} />
    </div>
}