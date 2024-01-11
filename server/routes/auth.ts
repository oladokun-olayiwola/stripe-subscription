import { Router } from "express";
import { Register } from "../controllers/auth";
const router = Router()

router.get("/", (req, res)  => {
    res.send("Testing Endpoint.")
})

router.post("/api/register", Register)
export default router