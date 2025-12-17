import { useState } from "react";
import CharacterList from "../../components/characterList/characterList";
import CharacterDetails from "../../components/characterDetails.tsx/characterDetails";
import { CharacterDetails as CharacterDetailsType } from "../../models/Character";


export default function CharacterScreen() {
    const [focusedCharacter, setFocusedCharacter] = useState< CharacterDetailsType | null>(null);  
    console.log(focusedCharacter);
    return <div>
        <CharacterList setFocusedCharacter={setFocusedCharacter} />
        {focusedCharacter && <CharacterDetails character={focusedCharacter} />}
    </div>
}