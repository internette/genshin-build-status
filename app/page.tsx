"use client";
import { useContext, useState } from "react";
import UuidInputForm from "./components/uuidInputForm/uuidInputForm";
import { UserSessionContext } from "./contexts/userSession/userSession";
import CharacterList from "./components/characterList/characterList";
import CharacterDetails from "./components/characterDetails.tsx/characterDetails";
import { CharacterDetails as CharacterDetailsType } from "./models/Character";
export default function Home() {
  const { userSessionInfo } = useContext(UserSessionContext);
  const [focusedCharacter, setFocusedCharacter] = useState< CharacterDetailsType | null>(null);  
  return (
    <>{
      userSessionInfo.uuid ?
      <div>
        <CharacterList setFocusedCharacter={setFocusedCharacter} />
        <CharacterDetails character={focusedCharacter} />
      </div> :
      <UuidInputForm />
    }</>
  );
}
