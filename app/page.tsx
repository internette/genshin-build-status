"use client";
import { useContext } from "react";
import UuidInputForm from "./components/uuidInputForm/uuidInputForm";
import { UserSessionContext } from "./contexts/userSession/userSession";
import CharacterList from "./components/characterList/characterList";
export default function Home() {
  const { userSessionInfo } = useContext(UserSessionContext);
  
  return (
    <>{
      userSessionInfo.uuid ?
      <><CharacterList /></> :
      <UuidInputForm />
    }</>
  );
}
