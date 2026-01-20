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
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gray-800">
          <Pencil className="h-5 w-5 text-gray-100" />
        </div>
        <span className="font-knewave text-xl text-gray-800">Lettucy</span>
      </div>
      <div className="flex items-center gap-3">
        {session ? (
          <>
            <span className="hidden text-gray-700 md:inline">
              Hello, {session.user?.name}
            </span>
            <form>
              <button
                className="bg-landing-coral hover:bg-landing-coral-hover rounded-full px-6 py-2 text-gray-900 transition-colors"
                formAction={handleSignOut}
              >
                Sign out
              </button>
            </form>
          </>
        ) : (
          <form>
            <button
              className="bg-landing-coral hover:bg-landing-coral-hover rounded-full px-6 py-2 text-gray-900 transition-colors"
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
