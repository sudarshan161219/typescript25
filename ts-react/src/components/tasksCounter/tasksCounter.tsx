import { FC, ReactElement } from "react";
import { ITaskCounter } from "@/types/taskCounter.interface";

export const TasksCounter: FC<ITaskCounter> = (props): ReactElement => {
  const { status, count } = props;

  return (
    <div className="flex flex-col items-center justify-center">
      <div
        className={`w-25 h-25 justify-center flex items-center border-solid border-4 ${
          status === "todo" && "border-red-500"
        } ${status === "inProgress" && "border-orange-500"}
          ${status === "completed" && "border-green-500"} rounded-full mb-4`}
      >
        <p className="text-3xl text-white">{count}</p>
      </div>

      <div className="text-xl text-white text-center">
        {status === "todo" && "Todo"}
        {status === "inProgress" && "In-Progress"}
        {status === "completed" && "Completed"}
      </div>
    </div>
  );
};
