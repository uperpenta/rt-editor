import { DocumentList } from "./DocumentsList";
import { type RouterOutputs } from "~/trpc/react";

type Document = RouterOutputs["document"]["getAllById"][number];

interface RecentDocumentsSectionProps {
  documents: Document[];
}

export function RecentDocumentsSection({
  documents,
}: RecentDocumentsSectionProps) {
  return (
    <section>
      <h2 className="mb-4 text-lg font-medium text-gray-900">
        Recent documents
      </h2>
      <DocumentList documents={documents} />
    </section>
  );
}
