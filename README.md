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

**High Level Architecture**




<img width="355" height="861" alt="mamasadasda drawio" src="https://github.com/user-attachments/assets/81031f77-b739-472e-a603-cdf04d81f738" />





**Landing Page**

<img width="1228" height="992" alt="Screenshot from 2026-01-21 10-51-06" src="https://github.com/user-attachments/assets/5c36d73b-2341-474e-827e-c72749a5b31b" />

