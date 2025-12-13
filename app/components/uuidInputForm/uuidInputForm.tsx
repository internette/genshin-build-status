"use client";
import { useState, useContext } from "react";
import { UserSessionContext } from "@/app/contexts/userSession/userSession";
import UuidInput from "../uuidInput/uuidInput";

export default function UuidInputForm (){
    const { setUserSessionInfo } = useContext(UserSessionContext);
    const [ uuid, setUuid ] = useState<string>("");
    const getUsername = async (uuid: string): Promise<string> => {
        const response = await fetch("/api/playerInfo", {
            method: "POST",
            body: JSON.stringify({ uuid })
        });
        const playerInfo = await response.json();
        return playerInfo.username;
    }
    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        const username = await getUsername(uuid);
        setUserSessionInfo({ uuid: uuid, username: username });
    }
  return <form onSubmit={handleSubmit}>
            <UuidInput setUuid={setUuid} />
        <button type="submit">Save Uuid</button>
    </form>;
};