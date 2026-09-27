# Antigravity — where to put your skill

## Always on (recommended for `/workflow`)

At the workspace root (or in any project subfolder):

- `AGENTS.md` — the cross-tool standard, or
- `GEMINI.md` — the Antigravity equivalent, or
- `.agents/rules/*.md` — multiple rule files.

```
# My workflow
(phases + gates + rules)
```

## Triggered skills and custom agents

Antigravity also supports skills in the `SKILL.md` format and, since 2.0, *custom agents* — useful when you want a dedicated agent per phase (planner, builder, reviewer).

## Verify

1. New conversation in the workspace.
2. "New task: add a /health endpoint"
3. The agent must stop at the first gate before writing code.

## Pitfalls

- `AGENTS.md` is always in context: keep the workflow short and imperative.
- Combined with *Artifacts* (implementation plans), your "Propose" gate can materialize as a plan artifact to validate — use that.
