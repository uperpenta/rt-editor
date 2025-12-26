import { YDocProvider } from "@y-sweet/react";
import { redirect } from "next/navigation";

import { QuillEditor } from "./EditorClient";
import { getSession } from "~/server/better-auth/server";

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

  async function getClientToken() {
    "use server";

    const { ySweetManager } = await import("~/server/ysweet");

    const session = await getSession();

    if (!session) {
      throw new Error("Unauthorized");
    }

    const token = await ySweetManager.getOrCreateDocAndToken(docId);

    // Fix the URL to include port 8080 - CHANGE FOR PRODUCTION - no need for port :P

    const fixedToken = {
      ...token,
      url: token.url.replace('ws://localhost/', 'ws://localhost:8080/'),
      baseUrl: token.baseUrl.replace('http://localhost/', 'http://localhost:8080/'),
    };

    return fixedToken;
  }

  return (
    <YDocProvider docId={docId} authEndpoint={getClientToken}>
      <QuillEditor />
    </YDocProvider>
  );
}
