import { injectable, inject } from "inversify";
import { UserController } from "../user/user.controller";
import { Request, Response } from "express";
import { Itask, IPartialTaskWithId } from "./tasks.interface";
import { Document } from "mongoose";
import { TaskService } from "./tasks.service";
import { UpdateTaskProvider } from "./providers/updateTask.provider";
import { GetTasksProvider } from "./providers/getTasks.provider";
import { matchedData } from "express-validator";
import { ITaskPagintaion } from "./interfaces/taskPagination.interface";

@injectable()
export class TasksController {
  constructor(
    @inject(UserController) private userController: UserController,
    @inject(TaskService) private taskService: TaskService,
    @inject(UpdateTaskProvider) private updateTaskProvider: UpdateTaskProvider,
    @inject(GetTasksProvider) private getTasksProvider: GetTasksProvider
  ) {}

  public async handleGetTasks(req: Request, res: Response) {
    const validatedData: Partial<ITaskPagintaion> = matchedData(req);
    try {
      const tasks: { data: Itask[]; meta: {} } =
        await this.getTasksProvider.findAllTask(validatedData);
      return tasks;
    } catch (error: any) {
      throw new Error(error);
    }
  }

  public async handlePostTasks(req: Request<{}, {}, Itask>, res: Response) {
    const validatedData: Itask = matchedData(req);

    try {
      return await this.taskService.createTask(req.body);
    } catch (error:any) {
      throw new Error(error);
    }
  }

  public async handlePatchTasks(
    req: Request<{}, {}, IPartialTaskWithId>,
    res: Response
  ): Promise<Document> {
    const validatedData: IPartialTaskWithId = matchedData(req);
    try {
      return await this.updateTaskProvider.updateTask(validatedData);
    } catch (error: any) {
      throw new Error(error);
    }
  }
}
