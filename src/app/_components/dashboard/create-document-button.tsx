"use client";

import { useRouter } from "next/navigation";
import { api } from "~/trpc/react";

export function CreateDocumentButton() {
  const router = useRouter();
  const createDocument = api.document.create.useMutation({
    onSuccess: (data) => {
      if (data?.id) {
        router.push(`/doc/${data.id}`);
      }
    },
  });

  const handleCreateDocument = async () => {
    await createDocument.mutateAsync({
      title: "Untitled Document",
    });
  };

  return (
    <div className="flex gap-4">
      <button
        onClick={handleCreateDocument}
        disabled={createDocument.isPending}
        className="group relative flex h-48 w-36 flex-col items-center justify-center rounded-lg border-2 border-gray-200 bg-white transition-all hover:border-blue-500 hover:shadow-md disabled:opacity-50"
      >
        <div className="mb-3 flex h-20 w-16 items-center justify-center rounded border-2 border-gray-300 bg-white group-hover:border-blue-500">
          <svg
            className="h-8 w-8 text-blue-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 4v16m8-8H4"
            />
          </svg>
        </div>
        <span className="text-sm font-medium text-gray-700">
          {createDocument.isPending ? "Creating..." : "Blank"}
        </span>
      </button>
    </div>
  );
}
