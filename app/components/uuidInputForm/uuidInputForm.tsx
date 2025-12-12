"use client";
import { useState, useContext } from "react";
import { UserSessionContext } from "@/app/contexts/userSession/userSession";
import UuidInput from "../uuidInput/uuidInput";

export default function UuidInputForm (){
    const { setUserSessionInfo } = useContext(UserSessionContext);
    const [ uuid, setUuid ] = useState<string>("");
    const getNickname = async (uuid: string): Promise<string> => {
        const playerInfoResponse = await fetch(`https://enka.network/api/uid/${uuid}/`);
        const data = await playerInfoResponse.json();
        const playerInfo = data.playerInfo
        return playerInfo.nickname;
    }
    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        const nickname = await getNickname(uuid);
        setUserSessionInfo({ uuid: uuid, nickname: nickname });
    }
  return <form onSubmit={handleSubmit}>
            <UuidInput setUuid={setUuid} />
        <button type="submit">Save Uuid</button>
    </form>;
};