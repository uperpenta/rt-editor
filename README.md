**Real-Time Collaborative Editor**

A collaborative document editor built with Next.js and CRDTs for conflict-free real-time editing.
What It Does
Multiple users can edit the same document simultaneously without conflicts. Changes sync in real-time, and you can see other people's cursors as they type.

**Tech Stack**

**Core**

- Next.js 16 (App Router)
- TypeScript
- PostgreSQL

**Real-Time Collaboration**

- Y-Sweet & Yjs (CRDT sync)
- Quill (rich text editor)
- WebSockets

**Auth & API**

- Better Auth
- tRPC (type-safe API)
- Drizzle ORM

**UI**

- Tailwind CSS v4
- Framer Motion

**Features**

Current

- Real-time collaborative editing
- Multi-user cursor tracking
- Rich text formatting (headers, lists, code blocks, images)
- Document management dashboard
- GitHub/Discord login

Planned

- AI writing assistance (grammar, autocomplete, suggestions)
- Export to PDF, Word, Markdown, LaTeX
- Comments and version history
- Granular sharing permissions
