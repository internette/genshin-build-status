"use client";
import { useState } from "react";
import UuidInput from "../uuidInput/uuidInput";

export default function UuidInputForm (){
    const [uuid, setUuid] = useState<string>("");
    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        const form = event.target as HTMLFormElement;
        const input = form.elements[0] as HTMLInputElement;
        setUuid(input.value);
    }
  return <form onSubmit={handleSubmit}>
            <UuidInput setUuid={setUuid} />
        <button type="submit">Save Uuid</button>
    </form>;
};