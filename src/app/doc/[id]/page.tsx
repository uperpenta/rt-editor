import { YDocProvider } from "@y-sweet/react";
import { redirect } from "next/navigation";
import Link from "next/link";

import { QuillEditor } from "./EditorClient";
import { getSession } from "~/server/better-auth/server";
import { api } from "~/trpc/server";

export default async function DocumentPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const session = await getSession();

  if (!session) {
    redirect("/");
  }

  const { id: docId } = await params;

  try {
    await api.document.getById({ id: docId });
  } catch {
    redirect("/dashboard");
  }

  async function getClientToken() {
    "use server";

    const session = await getSession();

    if (!session) {
      throw new Error("Unauthorized");
    }

    try {
      await api.document.getById({ id: docId });
    } catch {
      throw new Error("Unauthorized: Document not found or access denied");
    }

    const { ySweetManager } = await import("~/server/ysweet");
    const token = await ySweetManager.getOrCreateDocAndToken(docId);

    // Fix the URL to include port 8080 - CHANGE FOR PRODUCTION - no need for port :P

    const fixedToken = {
      ...token,
      url: token.url.replace("ws://localhost/", "ws://localhost:8080/"),
      baseUrl: token.baseUrl.replace(
        "http://localhost/",
        "http://localhost:8080/",
      ),
    };

    return fixedToken;
  }

  return (
    <div className="flex h-screen flex-col">
      <header className="flex items-center gap-4 border-b bg-white px-4 py-3">
        <Link
          href="/dashboard"
          className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-100"
        >
          <svg
            className="h-5 w-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          Back to Dashboard
        </Link>
      </header>

      <div className="flex-1 overflow-hidden">
        <YDocProvider docId={docId} authEndpoint={getClientToken}>
          <QuillEditor />
        </YDocProvider>
      </div>
    </div>
  );
}
