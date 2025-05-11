import { Avatar, AvatarImage } from "@radix-ui/react-avatar";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@radix-ui/react-hover-card";
import { User as PrismaUser } from "@prisma/client";

export default function UserCard({ user }: { user: PrismaUser }) {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Avatar>
          <AvatarImage
            src={user.image || "placeholder.jpg"}
            alt={user.name || ""}
            className="h-6 w-6 rounded-lg"
          />
        </Avatar>
      </HoverCardTrigger>
      <HoverCardContent className="w-fit p-4 bg-white z-10 rounded-lg shadow-sm mt-2">
        <div className="flex items-center space-x-3">
          <Avatar>
            <AvatarImage
              src={user.image || "placeholder.jpg"}
              alt={user.name || ""}
              className="h-10 w-10 rounded-lg"
            />
          </Avatar>
          <div className="flex flex-col">
            <span className="font-medium">{user.name}</span>
            <span className="text-sm text-muted-foreground">{user.email}</span>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
}
