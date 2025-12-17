"use client";
import { useState, useContext } from "react";
import { UserSessionContext } from "@/app/contexts/userSession/userSession";
import { CharacterSessionContext } from "@/app/contexts/charactersSession/charactersSession";
import { Character } from "@/app/models/CharactersSession";
import UuidInput from "../uuidInput/uuidInput";

export default function UuidInputForm (){
    const { setUserSessionInfo } = useContext(UserSessionContext);
    const { setCharactersSessionInfo } = useContext(CharacterSessionContext);
    
    const [ uuid, setUuid ] = useState<string>("");
    const getPlayerInfo = async (uuid: string): Promise<{ nickname: string, characters: Character[]}> => {
        const response = await fetch("/api/playerInfo", {
            method: "POST",
            body: JSON.stringify({ uuid })
        });
        const playerInfo = await response.json();
        return playerInfo;
    }
    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        if(uuid.length === 9 ) {
            const playerInfo = await getPlayerInfo(uuid);
            const { nickname } = playerInfo;
            setUserSessionInfo({ uuid: uuid, nickname: nickname });
        }
    }
  return <form id="uuidForm" onSubmit={handleSubmit}>
            <UuidInput setUuid={setUuid} />
        <button type="submit">Save Uuid</button>
    </form>;
};