# Cursor — where to put your skill

## Triggered rule (recommended for `/workflow`)

File `.cursor/rules/workflow.mdc` in the repo:

```
---
description: My standard process for any new task or code fix.
alwaysApply: false
---
(your workflow here)
```

- `alwaysApply: false` + a good `description` → Cursor injects it when relevant (Agent mode).
- Tech micro-skill: a second `.mdc`, or a rule scoping files:

```
---
globs: src/components/**
alwaysApply: true
---
(React conventions here)
```

## Always on (alternative)

- `.cursor/rules/global.mdc` with `alwaysApply: true`
- `AGENTS.md` at the root — also recognized.
- Global user rules: *Settings → Rules* (pasted text, applies to all repos).

## Verify

1. New Agent conversation in the repo.
2. "New task: add a /health endpoint"
3. The agent must stop at the first gate. Otherwise → set `alwaysApply: true` to validate, then refine the `description`.

## Pitfalls

- Too many `alwaysApply: true` rules = everything injected all the time = noise. One always-on rule max, the rest via description/globs.
