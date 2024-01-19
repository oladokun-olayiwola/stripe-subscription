import { log } from "console"
import { Request } from "express"
export const isAuthenticated = () => {
    const token = localStorage.getItem("Token")
    if(token) return token
    log(token)
    return ""
}

