import { injectable } from "inversify";
import { Task } from "./tasks.schema";
import { Model, FilterQuery } from "mongoose";
import { Itask } from "./tasks.interface";
import { ITaskPagintaion } from "./interfaces/taskPagination.interface";

@injectable()
export class TaskService {
  private taskModel: Model<Itask> = Task;

  public async createTask(taskData: Itask) {
    return await new this.taskModel(taskData).save();
  }

  public async findById(_id: string) {
    return await this.taskModel.findById(_id);
  }

  public async findActive(pagination: ITaskPagintaion) {
    return await this.taskModel
      .find({
        status: { $in: ["todo", "inProgress"] },
      })
      .limit(pagination.limit)
      .skip(pagination.page - 1)
      .sort({ createdAt: pagination.order === "asc" ? 1 : -1 });
  }

  public async findAll(pagination: ITaskPagintaion) {
    return await this.taskModel
      .find()
      .limit(pagination.limit)
      .skip(pagination.page - 1)
      .sort({ createdAt: pagination.order === "asc" ? 1 : -1 });
  }

  public async countDocuments(filter?: FilterQuery<Itask>) {
    return await this.taskModel.countDocuments(filter);
  }
}
