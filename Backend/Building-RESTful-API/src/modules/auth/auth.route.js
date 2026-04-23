import { Router } from "express";
import * as controller from "./auth.controller.js";
import validate from "../../common/dto/base.dto.js";
import RegisterDTO from "./dto/register.dto.js";

const router = Router();

router.post("/register", validate(RegisterDTO), controller.register);

export default router;
