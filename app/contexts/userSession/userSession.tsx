"use client"
import { createContext, useState } from "react";
import { UserSession, UserSessionInfo } from "../../models/UserSession";

export const UserSessionContext = createContext<UserSession>({ 
    userSessionInfo: { uuid: null, username: null },
    setUserSessionInfo: (_userSessionInfo) => {}
});

export const UserSessionProvider = ({ children }:{ children: React.ReactNode })=> {
    const [userSessionInfo, setUserSessionInfo] = useState<UserSessionInfo>({ uuid: null, username: null});
    
    return (
        <UserSessionContext.Provider value={{ userSessionInfo, setUserSessionInfo }}>
            {children}
        </UserSessionContext.Provider>
    );
}