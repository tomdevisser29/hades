import { cn } from "@/lib/utils";
import SignInButton from "@/components/ui/sign-in-button";

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-2xl font-bold">Login to your account</h1>
        <p className="text-muted-foreground text-sm text-balance">
          If you don&apos;t have an account yet, ask your system administrator.
        </p>
      </div>
      <div className="grid gap-6">
        <SignInButton />
      </div>
    </div>
  );
}
