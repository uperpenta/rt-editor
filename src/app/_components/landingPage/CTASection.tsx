import type { Session } from "~/server/better-auth/config";
import { handleDiscordSignIn } from "~/app/_actions/auth";
import { Button } from "../Button";

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
          Join writers already using Lettuce Write to work better together
        </p>
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          {session ? (
            <Button
              size="lg"
              bg="bg-landing-mint"
              text="text-gray-900"
              hover="hover:bg-landing-coral-hover"
              href="/dashboard"
            >
              Go to Dashboard
            </Button>
          ) : (
            <Button
              size="lg"
              bg="bg-landing-mint"
              text="text-gray-900"
              hover="hover:bg-landing-mint-hover"
              formAction={handleDiscordSignIn}
            >
              Get Started
            </Button>
          )}
        </div>
      </div>
    </section>
  );
}
