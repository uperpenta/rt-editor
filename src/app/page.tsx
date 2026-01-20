import { Pencil, Users, Zap, Lock } from "lucide-react";

import { getSession } from "~/server/better-auth/server";
import { handleDiscordSignIn, handleSignOut } from "~/app/_actions/auth";

export default async function Home() {
  const session = await getSession();

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FFE5D9] via-[#FFF0E6] to-[#E8D5FF]">
      {/* Header */}
      <header className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#A8E6CF]">
            <Pencil className="h-5 w-5 text-[#2D5B4E]" />
          </div>
          <span className="text-xl text-gray-800">Writing Space</span>
        </div>
        <div className="flex items-center gap-3">
          {session ? (
            <>
              <span className="hidden text-gray-700 md:inline">
                {session.user?.name}
              </span>
              <form>
                <button
                  className="rounded-full bg-[#FFB4A2] px-6 py-2 text-gray-900 transition-colors hover:bg-[#FF9E89]"
                  formAction={handleSignOut}
                >
                  Sign out
                </button>
              </form>
            </>
          ) : (
            <form>
              <button
                className="rounded-full bg-[#FFB4A2] px-6 py-2 text-gray-900 transition-colors hover:bg-[#FF9E89]"
                formAction={handleDiscordSignIn}
              >
                Sign in with Discord
              </button>
            </form>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="mx-auto max-w-7xl px-6 py-20 md:py-32">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div className="space-y-6">
            <h1 className="text-5xl leading-tight text-gray-900 md:text-6xl">
              Create together,
              <br />
              <span className="text-[#A8E6CF]">in real-time</span>
            </h1>
            <p className="max-w-lg text-lg text-gray-700">
              Experience seamless collaboration with your team. Write, edit, and
              share documents with instant synchronization.
            </p>
            <div className="flex items-center gap-4 pt-4">
              {session ? (
                <a
                  href="/dashboard"
                  className="inline-block rounded-full bg-[#FFB4A2] px-8 py-3 text-gray-900 transition-colors hover:bg-[#FF9E89]"
                >
                  Go to Dashboard
                </a>
              ) : (
                <form>
                  <button
                    className="rounded-full bg-[#FFB4A2] px-8 py-3 text-gray-900 transition-colors hover:bg-[#FF9E89]"
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
            <div className="absolute -top-4 -right-4 h-24 w-24 rounded-full bg-[#FFD6A5] opacity-80" />
            <div className="absolute -bottom-6 -left-6 h-32 w-32 rounded-full border-4 border-[#A8E6CF]" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl text-gray-900">
            Everything you need to collaborate
          </h2>
          <p className="text-lg text-gray-700">
            Simple tools for complex teamwork
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-2xl border-2 border-white bg-white/60 p-8 backdrop-blur-sm transition-all hover:border-[#A8E6CF]">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#A8E6CF]">
              <Users className="h-6 w-6 text-[#2D5B4E]" />
            </div>
            <h3 className="mb-2 text-xl text-gray-900">Real-time Sync</h3>
            <p className="text-gray-700">
              See changes instantly as your team edits together
            </p>
          </div>

          <div className="rounded-2xl border-2 border-white bg-white/60 p-8 backdrop-blur-sm transition-all hover:border-[#FFB4A2]">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#FFB4A2]">
              <Zap className="h-6 w-6 text-gray-900" />
            </div>
            <h3 className="mb-2 text-xl text-gray-900">Lightning Fast</h3>
            <p className="text-gray-700">
              Built for speed with optimized performance
            </p>
          </div>

          <div className="rounded-2xl border-2 border-white bg-white/60 p-8 backdrop-blur-sm transition-all hover:border-[#FFD6A5]">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#FFD6A5]">
              <Lock className="h-6 w-6 text-gray-900" />
            </div>
            <h3 className="mb-2 text-xl text-gray-900">Secure</h3>
            <p className="text-gray-700">
              Enterprise-grade security for your documents
            </p>
          </div>

          <div className="rounded-2xl border-2 border-white bg-white/60 p-8 backdrop-blur-sm transition-all hover:border-[#E8D5FF]">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#E8D5FF]">
              <Pencil className="h-6 w-6 text-[#6B4C9A]" />
            </div>
            <h3 className="mb-2 text-xl text-gray-900">Rich Editor</h3>
            <p className="text-gray-700">
              Full-featured editor with markdown support
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
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
                className="inline-block rounded-full bg-[#A8E6CF] px-8 py-4 text-gray-900 transition-colors hover:bg-[#8FD9B6]"
              >
                Go to Dashboard
              </a>
            ) : (
              <form>
                <button
                  className="rounded-full bg-[#A8E6CF] px-8 py-4 text-gray-900 transition-colors hover:bg-[#8FD9B6]"
                  formAction={handleDiscordSignIn}
                >
                  Get Started
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mx-auto max-w-7xl border-t border-white/40 px-6 py-12">
        <div className="grid gap-8 md:grid-cols-4">
          <div>
            <div className="mb-4 flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#A8E6CF]">
                <Pencil className="h-5 w-5 text-[#2D5B4E]" />
              </div>
              <span className="text-xl text-gray-800">Writing Space</span>
            </div>
            <p className="text-sm text-gray-700">
              A collaborative writing app for writers
            </p>
          </div>
          <div>
            <h4 className="mb-3 text-gray-900">Product</h4>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>
                <span className="opacity-50">Features</span>
              </li>
              <li>
                <span className="opacity-50">Pricing</span>
              </li>
              <li>
                <span className="opacity-50">Security</span>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="mb-3 text-gray-900">Company</h4>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>
                <span className="opacity-50">About</span>
              </li>
              <li>
                <span className="opacity-50">Blog</span>
              </li>
              <li>
                <span className="opacity-50">Careers</span>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="mb-3 text-gray-900">Support</h4>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>
                <span className="opacity-50">Help Center</span>
              </li>
              <li>
                <span className="opacity-50">Contact</span>
              </li>
              <li>
                <span className="opacity-50">API Docs</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-white/40 pt-8 text-center text-sm text-gray-700">
          <p>&copy; 2026 Writing Space. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
