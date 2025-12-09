"use client"

import { useEffect, useRef } from "react";
import * as Y from "yjs";
import {WebsocketProvider } from "y-websocket";

interface EditorClientProps {
    docId: string;
}

export default function EditorClient({ docId}: EditorClientProps) {
    const editorRef = useRef<HTMLTextAreaElement | null>(null);

    useEffect(() => {
        const ydoc = new Y.Doc();
    })
}