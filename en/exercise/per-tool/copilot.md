# GitHub Copilot — where to put your skill

## Targeted instruction (recommended for the micro-skill)

`.github/instructions/react.instructions.md` in the repo — loaded when files match:

```
---
applyTo: 'src/components/**'
---
(React conventions here)
```

## Always on (recommended for `/workflow`)

`.github/copilot-instructions.md` at the repo root — injected into every agent/chat session:

```
# My workflow
(phases + gates + rules — keep it short, < ~60 lines)
```

- Global version: *VS Code Settings → Copilot → Instructions* (applies to all repos).
- `AGENTS.md` at the root is also recognized.

## Verify

1. New Agent mode session, in the repo.
2. "New task: add a /health endpoint"
3. The agent must stop at the first gate before writing code.

## Pitfalls

- No description-based triggering: whatever sits in `copilot-instructions.md` is **always** in context → keep it short, use `applyTo:` for the rest.
- The file is committed to the repo: ideal for a team workflow — negotiate content in PR review.
