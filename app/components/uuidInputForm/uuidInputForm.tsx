"use client";
import { useState, useContext } from "react";
import { UserSessionContext } from "@/app/contexts/userSession/userSession";
import UuidInput from "../uuidInput/uuidInput";

export default function UuidInputForm (){
    const { setUserSessionInfo } = useContext(UserSessionContext);
    const [ uuid, setUuid ] = useState<string>("");
    const getNickname = async (uuid: string): Promise<string> => {
        const response = await fetch("/api/playerInfo", {
            method: "POST",
            body: JSON.stringify({ uuid })
        });
        const playerInfo = await response.json();
        return playerInfo.nickname;
    }
    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        if(uuid.length === 9 ) {
            const nickname = await getNickname(uuid);
            setUserSessionInfo({ uuid: uuid, nickname: nickname });
        }
    }
  return <form id="uuidForm" onSubmit={handleSubmit}>
            <UuidInput setUuid={setUuid} />
        <button type="submit">Save Uuid</button>
    </form>;
};