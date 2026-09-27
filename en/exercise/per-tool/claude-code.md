# Claude Code — where to put your skill

## Description-triggered skill (recommended for `/workflow`)

| Scope | Location |
|---|---|
| Global (`~`) | `~/.claude/skills/workflow/SKILL.md` |
| Project | `.claude/skills/workflow/SKILL.md` in the repo |

- Frontmatter: `name` + `description`. The `description` acts as the trigger.
- Tech micro-skill: same mechanism → `~/.claude/skills/react-components/SKILL.md`.

## Always on (alternative)

`CLAUDE.md` at the project root (or global `~/.claude/CLAUDE.md`) — injected into every session.

## Verify

1. New session (skills load at startup).
2. "New task: add a /health endpoint"
3. The agent must announce phase 1 (Understand) and **stop at the first gate**.
4. In doubt: "use your workflow skill" to force it, then fix the description.

## Pitfalls

- If you run plugins (e.g. superpowers), check that no competing workflow triggers alongside yours.
