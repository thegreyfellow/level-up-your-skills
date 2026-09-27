# Agent Handoff — Evaluation Brief

You are an evaluation agent. Score this workshop kit honestly — the presenter wants
harsh, actionable judgment, not politeness. You have no stake in the outcome.

## 1. What you are evaluating

A 45-minute workshop for software developers: **"Level Up Your Skills — build the
main skill that makes your agents work like you."**

- **Part 1 (20 min):** the presenter shows his personal stack — a `/workflow` skill
  (113 lines: Brainstorm → Plan → APPROVE gate → Build via subagents → VALIDATE gate),
  the `ponytail` ruleset (anti-overengineering), and `tokenjuice` (context-hygiene
  extension, OpenCode-only).
- **Part 2 (25 min):** attendees build their own workflow skill + one technology
  micro-skill, in their own tool, and test it live before leaving.

**Audience:** developers using **Cursor, GitHub Copilot, Antigravity, Claude Code,
OpenCode** (mixed tools — the kit must be tool-agnostic).

**Delivery language: French** (`fr/` is canonical). `en/` is a 1:1 translation.

**Stated goal:** teach skill-building. **Actual (hidden) goal:** get everyone to ship
a first skill during the session so the *second* one feels trivial. Judge whether the
design achieves both.

## 2. Repo map

| Path | What it is |
|---|---|
| `README.md` | Bilingual index |
| `fr/index.html` | Slides (canonical) — speaker notes (`S` key) carry the minute-by-minute timing script |
| `fr/exercice/template.md` | Fill-in-the-blanks workflow skill attendees complete |
| `fr/exercice/exemple-micro-skill.md` | Filled React example (generic → specific upgrade path) |
| `fr/exercice/par-outil/*.md` | Install sheets: opencode, claude-code, cursor, copilot, antigravity |
| `en/…` | Same, translated (same slide count, same notes structure) |
| `vendor/reveal/` | reveal.js 6.0.2 vendored so the deck runs offline |

Optional deep context if you have filesystem access on the presenter's machine:
`~/.config/opencode/skills/workflow/SKILL.md` (the actual skill being presented)
and `~/.config/opencode/plugins/{ponytail,tokenjuice}.js`. If you only have this
repo, judge from the slides' summary — it is faithful.

## 3. Verification you can run

```sh
xdg-open fr/index.html          # or en/… ; ? = help, S = speaker notes, F = fullscreen
```

Headless render check (if you have playwright + chromium):

```js
// expect: 21 slides, reveal.ready, zero console errors, no overflowing section
const { chromium } = require('playwright-core');
// ...open file://…/fr/index.html, count '.reveal .slides > section', listen for console errors
```

Read the slides **with notes visible** — the timing budget lives in the notes
(0:00 → 45:00). Check that the budget actually adds up.

## 4. Score these dimensions (0–10 each, evidence required)

1. **Pedagogy** — does 20 min presenting + 25 min building work? Are the 5 exercise
   steps (3 rules → 2 gates → build format → micro-skill → live test) achievable in
   25 min for a mixed-tool room?
2. **Narrative** — problem → realization → stack proof (5 "why it works") → pedigree
   → demo → hands-on. Does it persuade a skeptical developer?
3. **Hidden goal** — does the design actually *force* skill creation? (Note the
   "untested skill doesn't exist" rule and step 5.)
4. **Technical accuracy** — per-tool paths and claims in `par-outil/` sheets and the
   "one file, five tools" slide. Verified Sept 2026; check currency against current
   tool docs if you can browse.
5. **Timing realism** — 21 slides for 20 min (several are 30-second slides by
   design); live demo budgeted at 2 min with a plan B. Is this credible?
6. **Portability** — does the kit really work for all five tools? Any tool
   short-changed? (Copilot has no description-triggered skills — is the workaround
   honest and sufficient?)
7. **Materials quality** — template (pre-scaffolded gates so the lazy path still
   yields a working skill), React micro-skill example, per-tool sheets.
8. **Live-run risk** — what breaks on stage? (demo, attendee laptops, venue network,
   projected colors). Is every risk paired with a mitigation?

## 5. Declared limitations (don't re-discover — but do verify)

- Never presented yet: no audience feedback exists. You are scoring prospectively.
- No PDF/print export; deck is screen-first.
- The demo is live with plan B "jump to the workshop" — no recorded fallback.
- Exercise assumes attendees bring a laptop with their tool already installed; no
  zero-laptop fallback.
- English deck is a translation, not adapted to a different audience register.
- Third-party facts drift: superpowers ~292k ★, plugin install commands, Cursor
  `.mdc` format — all true at build time (Sept 2026), all mutable.
- `tokenjuice` is OpenCode-only; the deck says so and frames it as "the luxury".

## 6. Report contract

Return exactly this, in English or French:

1. Per-dimension table: score /10 + one-line justification with file references.
2. **Top 3 strengths** — what to keep no matter what.
3. **Top 5 weaknesses**, ranked by damage to the workshop's goals, each with a
   concrete fix and its cost (minutes of work).
4. **Kill-list** — anything to cut outright (slides, steps, claims).
5. **Verdict** — one paragraph: will this room leave having built and tested a
   skill? Yes/no/conditional, and what the condition is.
6. **Timing audit** — does the minute-by-minute plan in the notes sum to 45:00
   including transitions? Show your arithmetic.

Do not fix anything. You are the evaluator, not the author.
