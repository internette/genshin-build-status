const UuidInput = ({ setUuid }: { setUuid: (uuid: string) => void }) => {
    return <input type="text" id="uuid" onChange={(e) => setUuid(e.target.value)} pattern="[0-9]{9}" />; 
}

export default UuidInput
    