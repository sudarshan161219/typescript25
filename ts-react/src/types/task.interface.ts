export interface ITask {
  title: string;
  description: string;
  status: "todo" | "inProgress" | "completed";
  priority: "low" | "normal" | "high";
  dueDate: string;
}

