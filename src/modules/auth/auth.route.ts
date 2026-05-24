import { Router } from "express";
import { AuthControllers } from "./auth.controllers";

const router =Router()

router.post('/',AuthControllers.createUser)


export const AuthRouter=router;
