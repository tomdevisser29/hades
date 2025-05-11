"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { UserPlusIcon, UserMinusIcon } from "lucide-react";
import { toast } from "sonner";

export default function AssignToSite({
  siteId,
  userId,
  isAssigned,
}: {
  siteId: number;
  userId: string;
  isAssigned: boolean;
}) {
  const { data: session } = useSession();
  const router = useRouter();

  const handleToggle = async () => {
    if (!session?.user?.email) return;
    const method = isAssigned ? "PUT" : "POST";
    const res = await fetch(`/api/sites/${siteId}/assign/${userId}`, {
      method,
    });
    if (res.ok) {
      toast("Successfully updated website", {
        description: isAssigned
          ? "You have unassigned yourself"
          : "You have assigned yourself",
      });
      router.refresh();
    } else {
      const errorText = await res.text();
      toast("Failed to toggle assignment: " + errorText);
      console.error("Assignment toggle failed", errorText);
    }
  };

  return (
    <Button size="lg" onClick={handleToggle} disabled={!session}>
      {isAssigned ? <UserMinusIcon /> : <UserPlusIcon />}
      {isAssigned ? "Unassign yourself" : "Assign yourself"}
    </Button>
  );
}
