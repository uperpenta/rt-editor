import { redirect } from "next/navigation";
import { getSession } from "~/server/better-auth/server";
import { api } from "~/trpc/server";
import { Header } from "~/app/_components/Header";
import {
  NewDocumentSection,
  RecentDocumentsSection,
} from "~/app/_components/dashboard";

export default async function DashboardPage() {
  const session = await getSession();

  if (!session?.user) {
    redirect("/");
  }

  const documents = await api.document.getAllById();

  return (
    <div className="min-h-screen">
      <Header
        session={session}
        bgClassName="from-landing-mint via-landing-apricot to-landing-lavender bg-linear-to-br"
        showUserButton
      />

      <main className="mx-auto max-w-7xl px-6 py-8">
        <NewDocumentSection />
        <RecentDocumentsSection documents={documents} />
      </main>
    </div>
  );
}
