import React, { createContext, useState } from "react";

export const AuthContext = createContext({
    token: localStorage.getItem('accessToken'),
    setAuthToken: (token: string) => {
        localStorage.setItem('accessToken', token)
    }
})

export function AuthProvider({ children }: React.PropsWithChildren<{}>) {

    const [token, setToken] = useState(() => localStorage.getItem('accessToken'))

    const setAuthToken = (token: string) => {
        localStorage.setItem('accessToken', token)
        setToken(token)
    }

    return (
        <AuthContext.Provider value={{ token, setAuthToken }}>
            {children}
        </AuthContext.Provider>
    )

}