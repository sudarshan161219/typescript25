import { FC, ReactElement } from "react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

export const UserProfile: FC<{firstName: string}> = (props): ReactElement => {
    const {firstName = "John"} = props
  return (
    <div className="flex flex-col w-full items-center pt-4">
      <Avatar className={`${cn("h-20", "w-24")} mb-4`}>
        <AvatarFallback
          className={`text-2xl font-semibold ${cn(
            "bg-violet-600",
            "dark: bg"
          )}`}
        >
          {firstName.slice(0, 1)}
        </AvatarFallback>
      </Avatar>
      <h4>Hello, {firstName}</h4>
    </div>
  );
};
