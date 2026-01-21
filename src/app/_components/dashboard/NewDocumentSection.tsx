import { CreateDocumentButton } from "./CreateDocumentButton";

export function NewDocumentSection() {
  return (
    <section className="mb-8">
      <h2 className="mb-4 text-lg font-medium text-gray-900">
        Start a new document
      </h2>
      <CreateDocumentButton />
    </section>
  );
}
