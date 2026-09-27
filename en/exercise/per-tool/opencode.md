# OpenCode — where to put your skill

## Description-triggered skill (recommended for `/workflow`)

| Scope | Location |
|---|---|
| Global (all your projects) | `~/.config/opencode/skills/workflow/SKILL.md` |
| Project | `.opencode/skill/workflow/SKILL.md` in the repo |

- Required frontmatter: `name` + `description`. The `description` acts as the trigger.
- Tech micro-skill: same folder → `~/.config/opencode/skills/react-components/SKILL.md`.

## Always on (alternative)

`AGENTS.md` at the project root — loaded into every session, no description needed. Good for 5-10 rules that never leave the context.

## Verify

1. New session (skills load at startup).
2. "New task: add a /health endpoint"
3. The agent must announce phase 1 (Understand) and **stop at the first gate**.

## Pitfalls

- Vague description = skill never triggers. Describe *when* to load, not *what it is*.
- Don't make the workflow both always-on and a skill: pick one (skill recommended).
