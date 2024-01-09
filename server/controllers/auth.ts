import { RequestHandler } from "express";

const register: RequestHandler = (req, res) => {
    const {name, email, password}: UserCredentials = req.body
    if (!name) {
        res.json({
            error: true,
            message: "Name is required",
        })
        if (!password || password.length < 6) {
            res.json({
                error: true,
                message: "Password is required and should have  6 letters or more",
            })
    }
    res.json({
        error: false,
        message: "User Registered"
    })
}}