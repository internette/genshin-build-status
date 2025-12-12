const UuidInput = ({ setUserSessionInfo }: { setUserSessionInfo: (userSessionInfo: { uuid: string | null }) => void }) => {
    return <input type="text" onChange={(e) => setUserSessionInfo({ uuid: e.target.value })} pattern="[0-9]{9}" />; 
}

export default UuidInput
    