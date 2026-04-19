import { Router } from "express";
import TodoController from "./controller.js";

const router = Router();
const controller = new TodoController();

router.get("/", controller.getAllTodo.bind(controller)); //? agar yaha maine bind use nahi kiya to cannot read _db wala error aa jayega actually yaha pe humne function ko detach kar diya hai to is wo error show karega
// router.get("/:id");

router.post("/", controller.insertTodo.bind(controller));

// router.put("/:id");
// router.delete(":/id");

export default router;
