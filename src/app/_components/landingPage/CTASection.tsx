import type { Session } from "~/server/better-auth/config";
import { handleDiscordSignIn } from "~/app/_actions/auth";

interface CTASectionProps {
  session: Session | null;
}

export function CTASection({ session }: CTASectionProps) {
  return (
    <section className="mx-auto max-w-4xl px-6 py-20">
      <div className="rounded-3xl border-4 border-white bg-white/80 p-12 text-center shadow-xl backdrop-blur-sm md:p-16">
        <h2 className="mb-6 text-4xl text-gray-900 md:text-5xl">
          Ready to start collaborating?
        </h2>
        <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-700">
          Join writers already using Writing Space to work better together
        </p>
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          {session ? (
            <a
              href="/dashboard"
              className="inline-block rounded-full bg-landing-mint px-8 py-4 text-gray-900 transition-colors hover:bg-landing-coral-hover"
            >
              Go to Dashboard
            </a>
          ) : (
            <form>
              <button
                className="rounded-full bg-landing-mint px-8 py-4 text-gray-900 transition-colors hover:bg-landing-mint-hover"
                formAction={handleDiscordSignIn}
              >
                Get Started
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
