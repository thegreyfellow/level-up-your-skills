---
name: react-components
description: Our house conventions for creating or modifying React components. Trigger whenever we touch src/components or any JSX/TSX.
---

# React components — house conventions

- Function components + TypeScript. No classes, no `any`.
- Reuse the existing UI lib (`src/ui/`) — never a new component if an equivalent exists.
- No new dependency without asking me. `package.json` is untouchable without my OK.
- Local state by default. Global state only if two views share it — ask me.
- Every `useEffect` carries a one-line comment: why it exists.
- Verification: `pnpm test -- <file>` must pass before saying done.

<!--
Template for your own micro-skill:
- ONE technology, ONE platform, ONE responsibility.
- description = the trigger (when to load): folder, file type, keyword.
- ~20 lines max. Conventions, pitfalls, verification command.
- Over 40 lines: split into two skills.
-->
