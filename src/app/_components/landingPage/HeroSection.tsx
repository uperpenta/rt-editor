import type { Session } from "~/server/better-auth/config";
import { handleDiscordSignIn } from "~/app/_actions/auth";

interface HeroSectionProps {
  session: Session | null;
}

export function HeroSection({ session }: HeroSectionProps) {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20 md:py-32">
      <div className="grid items-center gap-12 md:grid-cols-2">
        <div className="space-y-6">
          <h1 className="text-5xl leading-tight text-gray-900 md:text-6xl">
            Create together,
            <br />
            <span className="text-landing-lavender-dark">in real-time</span>
          </h1>
          <p className="max-w-lg text-lg text-gray-700">
            Experience seamless collaboration with your team. Write, edit, and
            share documents with instant synchronization.
          </p>
          <div className="flex items-center gap-4 pt-4">
            {session ? (
              <a
                href="/dashboard"
                className="inline-block rounded-full bg-black px-8 py-3 text-white transition-colors hover:bg-landing-coral-hover "
              >
                Go to Dashboard
              </a>
            ) : (
              <form>
                <button
                  className="rounded-full bg-landing-coral px-8 py-3 text-gray-900 transition-colors hover:bg-landing-coral-hover"
                  formAction={handleDiscordSignIn}
                >
                  Get Started
                </button>
              </form>
            )}
          </div>
        </div>
        <div className="relative">
          <div className="h-64 overflow-hidden rounded-2xl border-4 border-white bg-white/40 shadow-2xl backdrop-blur-sm md:h-96" />
          {/* Floating elements */}
          <div className="absolute -top-4 -right-4 h-24 w-24 rounded-full bg-landing-coral opacity-80" />
          <div className="absolute -bottom-6 -left-6 h-32 w-32 rounded-full border-4 border-landing-mint" />
        </div>
      </div>
    </section>
  );
}
