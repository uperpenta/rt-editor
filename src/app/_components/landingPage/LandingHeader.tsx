import { Pencil } from "lucide-react";
import type { Session } from "~/server/better-auth/config";
import { handleDiscordSignIn, handleSignOut } from "~/app/_actions/auth";

interface LandingHeaderProps {
  session: Session | null;
}

export function LandingHeader({ session }: LandingHeaderProps) {
  return (
    <header className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
      <div className="flex items-center gap-2">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-black">
          <Pencil className="h-5 w-5 text-gray-100" />
        </div>
        <span className="text-xl text-gray-800">Writing Space</span>
      </div>
      <div className="flex items-center gap-3">
        {session ? (
          <>
            <span className="hidden text-gray-700 md:inline">
              Hello, {session.user?.name}
            </span>
            <form>
              <button
                className="rounded-full bg-landing-coral px-6 py-2 text-gray-900 transition-colors hover:bg-landing-coral-hover"
                formAction={handleSignOut}
              >
                Sign out
              </button>
            </form>
          </>
        ) : (
          <form>
            <button
              className="rounded-full bg-landing-coral px-6 py-2 text-gray-900 transition-colors hover:bg-landing-coral-hover"
              formAction={handleDiscordSignIn}
            >
              Sign in with Discord
            </button>
          </form>
        )}
      </div>
    </header>
  );
}
