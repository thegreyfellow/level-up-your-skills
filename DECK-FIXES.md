# Agent Handoff — Fix Pass on the Workshop Deck

Scope: **`en/` only** for now (`en/index.html`, `en/exercise/*`). Leave `fr/` untouched —
it will be caught up in a later pass once `en/` is finalized. Don't propagate any of
these fixes into `fr/` yourselves.

Below is a punch list, ranked by impact. Fix in order; each item has an acceptance
check so you know when it's actually done.

## 1. Resolve the tokenjuice portability contradiction (highest priority)

`en/index.html` currently has two spots claiming tokenjuice installs on all 5 tools:

- The "three layers" stack slide (`.muted` line under the cards): "tokenjuice =
  installs on all 5 tools in this room (4 stable, 1 beta)"
- The tokenjuice slide itself (`Why it works — 5/5`): "Installs on all five tools in
  this room — Claude Code, Cursor, Copilot, OpenCode (stable), Antigravity (beta):
  `tokenjuice install <tool>`" — and the speaker notes invite live-demoing that
  install command if asked.

Before presenting, confirm what's actually true today for tokenjuice's tool support.
Then make the slide say exactly that — no more, no less. If it's genuinely OpenCode-only
right now, revert both spots to something like "tokenjuice = OpenCode extension (the
luxury)" and drop the install-command line from the notes so nothing gets demoed that
doesn't exist. If it really has landed on other tools, keep the claim but make sure the
per-tool install command you show is one that actually works.

**Acceptance:** the tool-support claim on both slides matches what you can personally
demo live, on request, without surprises.

## 2. Add a fallback for step 5 (the live test)

Step 5 requires every attendee's AI tool to actually respond, live, in the room.
Nothing today covers what happens if venue wifi hiccups or someone's trial/quota is
dead mid-exercise — and step 5 is the one moment that actually delivers on the
workshop's promise ("you leave with a tested skill").

Add to the Step 5 slide notes (`en/index.html`, the "Étape 5"/"Step 5" section) and to
a pre-session reminder (email or first slide): "make sure your tool is installed and
responds *before* the session." And give circulating guidance for when it still fails
live: pair the affected attendee with a neighbor — they read the neighbor's skill, help
sharpen its description, and test their own the moment their tool is back.

**Acceptance:** the notes contain an explicit fallback path for "my tool didn't
respond," not just the ideal-path instructions.

## 3. Fix the "20 min presenting / 25 min building" framing

The title slide's `meta` line ("½ demo, ½ you write code") and the README both promise
a clean 20/25 split. The actual minute-by-minute notes don't support that: presenting
content is 16 minutes *before* the exercise, then a 25-minute build block, then another
~3.5 minutes of presenting (recap + multi-tool table + closing) *after* it. The total
still adds up to 45:00 — it's the "two clean halves" framing that's wrong, not the
schedule.

Reword the title-slide `meta` line to reflect the real shape, e.g.: "16 min stack +
demo · 25 min you build · 4 min debrief" (adjust to taste, just don't promise a clean
half-and-half split you don't deliver).

**Acceptance:** title slide and README timing claims match the notes' actual block
breakdown.

## 4. Add a "tested" checkbox to the exercise template

`en/exercise/template.md` has no line an attendee physically ticks after running step
5, so "done" can be self-declared without ever actually testing. Add one line at the
bottom of the template:

```
- [ ] Tested: new session, real task, the agent stopped at the first gate.
```

**Acceptance:** the checkbox exists in `template.md` and reads as a completion gate,
not decoration.

## 5. (Nice to have) Give the presenter a skip order for time pressure

Three back-to-back slides in Part 1 — gates, classification, subagent build — run 1:30
each with zero built-in buffer, and they're also the densest conceptual content in the
talk. One real audience question there risks eating into the 25-minute build block.

Add a one-line note (in the deck's speaker notes or a separate cheat-sheet) naming
which slides are safe to compress first if running behind — the ponytail and
tokenjuice slides are already framed as "for the culture" / "the luxury," so they're
the natural ones to shorten before touching the gates/classification/build trio.

**Acceptance:** a documented skip order exists somewhere the presenter can glance at
live (notes or a print sheet), not just in your head.

## Out of scope for this pass

- Any `fr/` changes.
- Reworking `/workflow` itself — that's happening separately and will be reflected in
  the deck later.
