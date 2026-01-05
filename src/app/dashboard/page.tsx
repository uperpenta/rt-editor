import { redirect } from "next/navigation";
import { getSession } from "~/server/better-auth/server";
import { api } from "~/trpc/server";
import { CreateDocumentButton } from "~/app/_components/dashboard/create-document-button";
import { DocumentList } from "~/app/_components/dashboard/document-list";

export default async function DashboardPage() {
  const session = await getSession();

  if (!session?.user) {
    redirect("/");
  }

  const documents = await api.document.getAllById();

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="border-b bg-white">
        <div className="mx-auto max-w-7xl px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-semibold text-gray-900">RT-Editor</h1>
            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-600">
                {session.user.email}
              </span>
            </div>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-6 py-8">
        <div className="mb-8">
          <h2 className="mb-4 text-lg font-medium text-gray-900">
            Start a new document
          </h2>
          <CreateDocumentButton />
        </div>

        <div>
          <h2 className="mb-4 text-lg font-medium text-gray-900">
            Recent documents
          </h2>
          <DocumentList documents={documents} />
        </div>
      </main>
    </div>
  );
}
