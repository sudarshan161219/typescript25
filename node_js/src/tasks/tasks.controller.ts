import { injectable, inject } from "inversify";
import { UserController } from "../user/user.controller";
import { Task } from "./tasks.schema";
import { Request, Response } from "express";
import { Itask, IPartialTaskWithId } from "./tasks.interface";
import { Document } from "mongoose";

@injectable()
export class TasksController {
  constructor(@inject(UserController) private userController: UserController) {}

  public async handleGetTasks(req: Request, res: Response) {
    const tasks = await Task.find();
    return tasks;
  }

  public async handlePostTasks(req: Request<{}, {}, Itask>, res: Response) {
    const task: Document<unknown, any, Itask> = new Task(req.body);
    await task.save();
    return task;
  }

  public async handlePatchTasks(
    req: Request<{}, {}, IPartialTaskWithId>,
    res: Response
  ) {
    const task = await Task.findById(req.body["_id"]);

    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }

    task.title = req.body.title ? req.body.title : task.title;
    task.description = req.body.description
      ? req.body.description
      : task.description;
    task.dueDate = req.body.dueDate ? req.body.dueDate : task.dueDate;
    task.status = req.body.status ? req.body.status : task.status;
    task.priority = req.body.priority ? req.body.priority : task.priority;

    await task.save();

    return task;
  }
}
