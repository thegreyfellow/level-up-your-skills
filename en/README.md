# Level Up Your Skills (English)

45-min workshop: 16 min presenting the `/workflow` + ponytail + tokenjuice stack + a live demo,
25 min for everyone to build their own workflow skill + a micro-skill, 4 min debrief.

The French original lives in `../fr/`.

## Open the slides

```sh
xdg-open en/index.html        # works offline, reveal.js is vendored
```

- `?` : help · arrows: navigate · `S`: speaker notes (timing on every slide) · `F`: fullscreen

## Contents

- `index.html` — the slides (English, speaker notes included)
- `exercise/template.md` — the workflow skill to fill in during the workshop
- `exercise/example-micro-skill.md` — tech micro-skill example (React)
- `exercise/per-tool/` — one sheet per tool: opencode, claude-code, cursor, copilot, antigravity
- `../vendor/reveal/` — reveal.js 6.0.2 (MIT), shared with the French deck, vendored to run offline

## Demo script (slide 12)

1. Throwaway OpenCode session, demo branch.
2. "New task: add a /health endpoint" → classification (bounded) + plan + **stop at the gate**.
3. "OK" → branch, TDD, commits, diff review.
4. Fresh test output + handoff → **waits for validation**.

## Multi-tool trick

Write the workflow **once** (`workflow.md` at the root), reference it everywhere:
`AGENTS.md` → "Strictly follow the process defined in ./workflow.md",
and drop the file into `skills/` (OpenCode, Claude) with a trigger description.
