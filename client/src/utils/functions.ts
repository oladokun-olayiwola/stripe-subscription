import { log } from "console"
import { Request } from "express"
export const isAuthenticated = (req: Request) => {
    const token = req.cookies.Token
    if(token) return token
    log(token)
    return ""
}

