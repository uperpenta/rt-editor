import { headers } from "next/headers";
import { redirect } from "next/navigation";

import { Button } from "~/app/_components/Button";
import { auth } from "~/server/better-auth";
import { getSession } from "~/server/better-auth/server";

export default async function Home() {
  const session = await getSession();

  return (
    <main className="flex min-h-screen items-center justify-center p-4">
      <div className="flex flex-col items-center gap-6">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight">
            Welcome to Your Writing Space
          </h1>
          <p className="mt-2 text-lg text-[var(--muted)]">
            A collaborative writing app for writers
          </p>
        </div>

        <div className="flex flex-col items-center gap-4">
          {session ? (
            <>
              <p className="text-center text-[var(--muted)]">
                Logged in as <span className="font-medium text-[var(--foreground)]">{session.user?.name}</span>
              </p>
              <form>
                <Button
                  variant="secondary"
                  size="lg"
                  formAction={async () => {
                    "use server";
                    await auth.api.signOut({
                      headers: await headers(),
                    });
                    redirect("/");
                  }}
                >
                  Sign out
                </Button>
              </form>
            </>
          ) : (
            <form>
              <Button
                variant="primary"
                size="lg"
                formAction={async () => {
                  "use server";
                  const res = await auth.api.signInSocial({
                    body: {
                      provider: "discord",
                      callbackURL: "/",
                    },
                  });
                  if (!res.url) {
                    throw new Error("No URL returned from signInSocial");
                  }
                  redirect(res.url);
                }}
              >
                Sign in with Discord
              </Button>
            </form>
          )}
        </div>
      </div>
    </main>
  );
}
