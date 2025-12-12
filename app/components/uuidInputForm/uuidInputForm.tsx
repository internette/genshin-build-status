"use client";
import { useState, useContext } from "react";
import { UserSessionContext } from "@/app/contexts/userSession/userSession";
import UuidInput from "../uuidInput/uuidInput";

export default function UuidInputForm (){
    const { setUserSessionInfo } = useContext(UserSessionContext);
    const [ uuid, setUuid ] = useState<string>("");
    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        const form = event.target as HTMLFormElement;
        const input = form.elements[0] as HTMLInputElement;
        setUserSessionInfo({ uuid: input.value, nickname: null });
    }
  return <form onSubmit={handleSubmit}>
            <UuidInput setUuid={setUuid} />
        <button type="submit">Save Uuid</button>
    </form>;
};