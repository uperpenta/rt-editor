"use client";

import { useMap, useAwareness } from "@y-sweet/react";
import { useEffect, useRef, useState } from "react";
import type { QuillBinding } from "y-quill";

export function QuillEditor() {
  const yMap = useMap("root");
  const awareness = useAwareness();
  const editorRef = useRef<HTMLDivElement | null>(null);
  const bindingRef = useRef<QuillBinding | null>(null);
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    let isMounted = true;

    const initializeEditor = async () => {
      try {
        const [
          QuillModule,
          QuillCursorsModule,
          { QuillBinding: QuillBindingModule },
        ] = await Promise.all([
          import("quill"),
          import("quill-cursors"),
          import("y-quill"),
        ]);

        if (!isMounted) return;

        const QuillConstructor = QuillModule.default;
        const QuillCursors = QuillCursorsModule.default;

        QuillConstructor.register("modules/cursors", QuillCursors);

        const yDoc = yMap.doc;

        if (!yDoc) {
          console.log("No YDoc available");
          return;
        }

        const yText = yDoc.getText("quill");

        if (!editorRef.current) {
          console.log("Editor ref not available");
          return;
        }

        const quill = new QuillConstructor(editorRef.current, {
          theme: "snow",
          placeholder: "Start collaborating...",
          modules: {
            cursors: true,
            toolbar: [
              [{ header: [1, 2, false] }],
              ["bold", "italic", "underline"],
              [{ list: "ordered" }, { list: "bullet" }],
              ["link", "image"],
              ["clean"],
            ],
          },
        });

        bindingRef.current = new QuillBindingModule(yText, quill, awareness);

        setIsInitialized(true);
        console.log("Editor initialized successfully!");
      } catch (error) {
        console.error("Failed to initialize Quill editor:", error);
      }
    };

    void initializeEditor();

    return () => {
      isMounted = false;
      if (bindingRef.current) {
        bindingRef.current.destroy();
        bindingRef.current = null;
      }
    };
  }, [yMap, awareness]);

  return (
    <div className="mx-auto max-w-4xl p-4 sm:p-8">
      <div className="space-y-4">
        <h1 className="text-2xl font-bold">Real-Time Editor</h1>
        <div className="rounded-lg bg-white shadow-md">
          {!isInitialized && (
            <div className="p-4 text-center text-gray-500">
              Loading editor...
            </div>
          )}
          <div ref={editorRef} />
        </div>
      </div>
    </div>
  );
}
