"use client";
import { useContext } from "react";
import UuidInputForm from "./components/uuidInputForm/uuidInputForm";
import { UserSessionContext } from "./contexts/userSession/userSession";
export default function Home() {
  const { userSessionInfo } = useContext(UserSessionContext);
  return (
    <>{
      userSessionInfo.uuid ? 
      <p>Your UUID is: {userSessionInfo.uuid}</p> :
      <UuidInputForm />
    }</>
  );
}
