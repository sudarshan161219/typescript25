import { inject, injectable } from "inversify";
import { IPartialTaskWithId, Itask } from "../tasks.interface";
import { TaskService } from "../tasks.service";
import { Document } from "mongoose";

@injectable()
export class UpdateTaskProvider {
  constructor(@inject(TaskService) private taskService: TaskService) {}

  public async updateTask(
    update: IPartialTaskWithId
  ): Promise<Document | never> {
    const task: (Document & Itask) | null = await this.taskService.findById(
      update._id
    );

    if (!task) {
      throw new Error("Task does not exist");
    }

    task.title = update.title ? update.title : task.title;
    task.description = update.description
      ? update.description
      : task.description;
    task.dueDate = update.dueDate ? update.dueDate : task.dueDate;
    task.status = update.status ? update.status : task.status;
    task.priority = update.priority ? update.priority : task.priority;

    return await task.save();
  }
}
