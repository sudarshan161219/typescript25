import { checkSchema } from "express-validator";

export const createTaskValidator = checkSchema({
  title: {
    in: ["body"],
    notEmpty: true,
    errorMessage: "title is required",
    isString: true,
    isLength: {
      options: {
        max: 100,
      },
      errorMessage: "Title should atleast be 100 chars",
    },
    trim: true,
  },
  description: {
    in: ["body"],
    notEmpty: true,
    isString: true,
    trim: true,
  },
  status: {
    in: ["body"],
    notEmpty: true,
    isIn: {
      options: [["todo", "inProgress", "completed"]],
    },
  },
  priority: {
    in: ["body"],
    notEmpty: true,
    isIn: {
      options: [["high", "low", "normal"]],
    },
  },
  dueDate: {
    in: ["body"],
    notEmpty: true,
    isISO8601: true,
  },
});
