"use client";

import Link from "next/link";
import { type RouterOutputs } from "~/trpc/react";

type Document = RouterOutputs["document"]["getAllById"][number];

interface DocumentListProps {
  documents: Document[];
}

export function DocumentList({ documents }: DocumentListProps) {
  if (documents.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-white p-12">
        <svg
          className="mb-4 h-16 w-16 text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
        <p className="text-lg font-medium text-gray-900">No documents yet</p>
        <p className="mt-1 text-sm text-gray-500">
          Create your first document to get started
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-2">
      {documents.map((doc) => (
        <Link
          key={doc.id}
          href={`/doc/${doc.id}`}
          className="group block rounded-lg border border-gray-200 bg-white p-4 transition-all hover:border-blue-500 hover:shadow-md"
        >
          <div className="flex items-start gap-4">
            <div className="shrink-0">
              <div className="flex h-12 w-10 items-center justify-center rounded bg-blue-50">
                <svg
                  className="h-6 w-6 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </div>
            </div>

            <div className="min-w-0 flex-1">
              <h3 className="truncate text-base font-medium text-gray-900 group-hover:text-blue-600">
                {doc.title}
              </h3>
              {doc.description && (
                <p className="mt-1 line-clamp-2 text-sm text-gray-600">
                  {doc.description}
                </p>
              )}
              <div className="mt-2 flex items-center gap-4 text-xs text-gray-500">
                <span>
                  Opened {formatDate(doc.lastAccessedAt ?? doc.updatedAt)}
                </span>
              </div>
            </div>

            <div className="shrink-0">
              <button className="rounded-full p-2 opacity-0 transition-opacity group-hover:opacity-100 hover:bg-gray-100">
                <svg
                  className="h-5 w-5 text-gray-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

function formatDate(date: Date): string {
  const now = new Date();
  const diff = now.getTime() - new Date(date).getTime();
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));

  if (days === 0) return "today";
  if (days === 1) return "yesterday";
  if (days < 7) return `${days} days ago`;
  if (days < 30) return `${Math.floor(days / 7)} weeks ago`;
  if (days < 365) return `${Math.floor(days / 30)} months ago`;

  return new Date(date).toLocaleDateString();
}
