import { FC, ReactElement } from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { ITask } from "@/types/task.interface";

export const Task: FC<ITask> = (props: ITask): ReactElement => {
  const { title, description, status, priority, dueDate } = props;

  const formattedDate = new Date(dueDate).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  return (
    <Card className="w-full mb-8">
      <CardHeader className="flex flex-row justify-between">
        <CardTitle className="basis-2/3 leading-8">{title}</CardTitle>
        <div className="flex flex-row gap-4">
          <Badge variant="outline">{formattedDate}</Badge>
          {priority === "normal" && (
            <Badge className="bg-sky-800" variant="outline">
              {priority}
            </Badge>
          )}
          {priority === "high" && (
            <Badge className="bg-red-800" variant="outline">
              {priority}
            </Badge>
          )}
          {priority === "low" && (
            <Badge className="bg-green-800" variant="outline">
              {priority}
            </Badge>
          )}
        </div>
      </CardHeader>
      <CardContent>
        <p>{description}</p>
      </CardContent>
      <CardFooter className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Switch
            id="in-progress"
            checked={status === "inProgress" ? true : false}
          />
          <Label htmlFor="in-progress">{status}</Label>
        </div>
        <Button>Completed</Button>
      </CardFooter>
    </Card>
  );
};
