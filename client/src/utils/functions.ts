import { ReactComponentElement, ReactElement, useContext } from "react"
import { useNavigate } from "react-router-dom"
import { UserContext } from "../context"

export const isAuthenticated = () => {
    const token = localStorage.getItem("Token")
    if(token) return token
    return ""
}


export const ProtectedRoute = ({ element }: any) => {
const {token} = useContext(UserContext)
}; 