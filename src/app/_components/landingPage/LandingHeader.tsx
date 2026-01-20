import { Pencil } from "lucide-react";
import type { Session } from "~/server/better-auth/config";
import { handleDiscordSignIn, handleSignOut } from "~/app/_actions/auth";
import { Button } from "../Button";

interface LandingHeaderProps {
  session: Session | null;
}

export function LandingHeader({ session }: LandingHeaderProps) {
  return (
    <header className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
      <div className="flex items-center gap-2">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gray-800">
          <Pencil className="h-5 w-5 text-gray-100" />
        </div>
        <span className="font-knewave text-landing-lettuce-green text-xl">
          Lettuce Write
        </span>
      </div>
      <div className="flex items-center gap-3">
        {session ? (
          <>
            <span className="hidden text-gray-700 md:inline">
              Hello, {session.user?.name}
            </span>
            <Button
              size="sm"
              bg="bg-gray-800"
              text="text-gray-100"
              hover="hover:bg-landing-lavender-dark"
              formAction={handleSignOut}
            >
              Sign out
            </Button>
          </>
        ) : (
          <Button
            size="sm"
            bg="bg-gray-800"
            text="text-gray-100"
            hover="hover:bg-landing-lavender-dark"
            formAction={handleDiscordSignIn}
          >
            Sign in with Discord
          </Button>
        )}
      </div>
    </header>
  );
}
