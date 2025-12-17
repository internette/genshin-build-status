"use client";
import { useContext, useState } from "react";
import UuidInputForm from "./components/uuidInputForm/uuidInputForm";
import { UserSessionContext } from "./contexts/userSession/userSession";
import CharacterList from "./components/characterList/characterList";
import { CharacterDetails } from "./models/Character";
export default function Home() {
  const { userSessionInfo } = useContext(UserSessionContext);
  const [focusedCharacter, setFocusedCharacter] = useState< CharacterDetails| null>(null);  
  return (
    <>{
      userSessionInfo.uuid ?
      <><CharacterList focusedCharacter={focusedCharacter} setFocusedCharacter={setFocusedCharacter} /></> :
      <UuidInputForm />
    }</>
  );
}
