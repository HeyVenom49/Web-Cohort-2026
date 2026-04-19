import {
  todoValidationSchema,
  type Todo,
} from "../../validation/todo.schema.js";
import type { Request, Response } from "express";
class TodoController {
  private _db: Array<Todo>;

  constructor() {
    this._db = [];
  }

  public getAllTodo(req: Request, res: Response) {
    const todos = this._db;
    return res.json({ todos });
  }

  public async insertTodo(req: Request, res: Response) {
    try {
      const rawData = req.body;
      const validateData = await todoValidationSchema.parseAsync(rawData);
      this._db.push(validateData);
      return res.status(201).json({ validateData });
    } catch (error) {
      console.log(error);
      return res.status(505).json({ error: "Validation Failed" });
    }
  }
}

export default TodoController;
