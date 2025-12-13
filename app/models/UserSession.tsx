import { Dispatch, SetStateAction } from "react";

export interface UserSession {
    userSessionInfo: UserSessionInfo
    setUserSessionInfo: Dispatch<SetStateAction<UserSessionInfo>>
}

export interface UserSessionInfo {
    uuid: string | null,
    username: string | null
}