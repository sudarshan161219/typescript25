export interface Itask {
  title: string;
  description: string;
  status: "todo" | "inProgress" | "completed";
  priority: "low" | "normal" | "high";
  dueDate: Date;
}

export interface IPartialTaskWithId extends Partial<Itask> {
  _id: string
}


