import { createContext } from "react"

interface Validator {
    token: string;
}


export const UserContext = createContext<Validator>({
    token: ""
})

export const UserProvider = UserContext.Provider

