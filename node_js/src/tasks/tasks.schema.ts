import { Schema, Model, model } from "mongoose";
import { Itask } from "./tasks.interface";

const taskSchema: Schema<Itask> = new Schema(
  {
    title: {
      type: String,
      required: [true, "Task title required"],
      maxlength: [100, "Title cannot be more than 100 chars"],
      trim: true,
    },
    description: {
      type: String,
      required: true,
      maxlength: 500,
      trim: true,
    },
    status: {
      type: String,
      required: true,
      enum: ["todo", "inProgress", "completed"],
      default: "todo",
    },

    priority: {
      type: String,
      required: true,
      enum: ["low", "normal", "high"],
      default: "normal",
    },

    dueDate: {
      type: Date,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const Task: Model<Itask> = model("Task", taskSchema);
