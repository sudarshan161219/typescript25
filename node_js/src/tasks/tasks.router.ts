import { Router, Request, Response } from "express";
import { validationResult } from "express-validator";
import { injectable, inject } from "inversify";
import { StatusCodes } from "http-status-codes";
import { TasksController } from "./tasks.controller";
import { IPartialTaskWithId, Itask } from "./tasks.interface";
import { createTaskValidator } from "./validators/createTask.validator";
import { getTasksValidator } from "./validators/getTasks.validator";
import { updateTaskValidator } from "./validators/updateTask.provider";

@injectable()
export class TasksRouter {
  public router: Router;

  constructor(
    @inject(TasksController) private tasksController: TasksController
  ) {
    this.router = Router();
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(
      "/",
      getTasksValidator,
      async (req: Request, res: Response) => {
        const result = validationResult(req);
        if (result.isEmpty()) {
          const allTasks = await this.tasksController.handleGetTasks(req, res);
          res.status(StatusCodes.OK).json(allTasks);
        } else {
          res.status(StatusCodes.BAD_REQUEST).json(result.array());
        }
      }
    );

    this.router.post(
      "/create",
      createTaskValidator,
      async (req: Request<{}, {}, Itask>, res: Response) => {
        const result = validationResult(req);
        if (result.isEmpty()) {
          const newTask = await this.tasksController.handlePostTasks(req, res);
          res.status(StatusCodes.CREATED).json(newTask);
        } else {
          res.status(StatusCodes.BAD_REQUEST).json(result.array());
        }
      }
    );

    this.router.patch(
      "/update",
      updateTaskValidator,
      async (req: Request<{}, {}, IPartialTaskWithId>, res: Response) => {
        const result = validationResult(req);
        if (result.isEmpty()) {
          const updatedTask = await this.tasksController.handlePatchTasks(
            req,
            res
          );
          res.status(StatusCodes.OK).json(updatedTask);
        } else {
          res.status(StatusCodes.BAD_REQUEST).json(result.array());
        }
      }
    );
  }
}
