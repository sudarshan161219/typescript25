import { injectable, inject } from "inversify";
import { TaskService } from "../tasks.service";
import { ITaskPagintaion } from "../interfaces/taskPagination.interface";
import { Itask } from "../tasks.interface";

@injectable()
export class GetTasksProvider {
  constructor(@inject(TaskService) private taskService: TaskService) {}

  public async findAllTask(
    pagination: Partial<ITaskPagintaion>
  ): Promise<{ data: Itask[]; meta: {} }> {
    const tasks: Itask[] = await this.taskService.findActive({
      limit: pagination.limit ?? 10,
      page: pagination.page ?? 1,
      order: pagination.order ?? "asc",
    });

    const totalTasks = await this.taskService.countDocuments();
    const completedTasks = await this.taskService.countDocuments({
      status: "completed",
    });
    const todoTasks = await this.taskService.countDocuments({
      status: "todo",
    });
    const inProgressTasks = await this.taskService.countDocuments({
      status: "inProgress",
    });

    return {
      data: tasks,
      meta: { totalTasks, completedTasks, inProgressTasks, todoTasks },
    };
  }
}
