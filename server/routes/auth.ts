import { Router } from "express";
import { Login, Register } from "../controllers/auth";
const router = Router()

router.get("/", (req, res)  => {
    res.send("Testing Endpoint.")
})

router.post("/api/register", Register)
router.post("/api/login", Login)
export default router              