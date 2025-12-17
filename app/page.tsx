"use client";
import { useContext } from "react";
import UuidInputForm from "./components/uuidInputForm/uuidInputForm";
import CharacterScreen from "./components/characterScreen/characterScreen";
import { UserSessionContext } from "./contexts/userSession/userSession";
export default function Home() {
  const { userSessionInfo } = useContext(UserSessionContext);
  return (
    <>{
      userSessionInfo.uuid ?
      <CharacterScreen /> :
      <UuidInputForm />
    }</>
  );
}
