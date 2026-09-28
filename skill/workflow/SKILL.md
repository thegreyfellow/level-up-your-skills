---
name: workflow
description: Runs the user's standard work process - brainstorm, plan, approve, subagent-driven TDD build, then user validation. Use when starting any new feature, task, or fix, or when the user says "workflow", "use my workflow", "new task", or "let's build X". Enforces the approval gate before any code is written.
---

# Workflow

Five phases. Announce the current phase. Never skip ahead.
Brainstorm → Plan → Approve → Build → User validation, with feedback loops
back to Plan whenever requirements change.

Core principles (apply in every phase): smallest diff that works, stdlib and
existing code before new dependencies, no speculative abstractions, YAGNI,
evidence before claims — never say "done" without fresh command output.

## 1. Brainstorm

- Classify the task first and say it out loud:
  - **Spike** — feasibility question, output is an answer not code. State the
    probe in 2-3 sentences, get a nod, investigate, report. Anything built is
    throwaway; keeping it is a new task.
  - **Bounded** — well-scoped change to an existing flow. Read the flow, ask
    only the questions that matter, present a short design in chat, stop.
  - **Architectural** — new project/subsystem or interface restructuring.
    Questions, 2-3 approaches with a recommendation, design in sections,
    written spec only if the user wants one.
- The ratchet is one-way: hidden complexity discovered mid-task upgrades the
  path. "Too simple to need approval" is not a path — every task gets a
  design presented and approved, even if it's two sentences.
- Challenge whether the thing needs to exist at all; "X already covers it"
  is a valid outcome.

## 2. Plan

- Smallest plan that works: files touched, approach, what is deliberately
  skipped, interfaces between tasks (exact names/signatures later tasks rely
  on).
- Name the exact verification command(s) — the build is done when they pass,
  nothing else counts.
- One sentence on what will NOT be done (the deliberate ceiling).
- Break into tasks that are independently verifiable; fold setup and
  scaffolding into the task that needs them. Plans live in chat unless the
  user asks for a file.

## 3. Approve — HARD GATE

- Stop. Present the plan and WAIT for explicit approval.
- Never write, edit, or scaffold code before this gate is passed.
- "Just do it" counts as approval — proceed, but still hand off for
  validation.

## 4. Build (subagent-driven, TDD)

Only after approval:

- Branch: `git switch main && git pull && git switch -c feat|fix|chore/<slug>`.
  Never commit on main.
- Clean boundary: a new task (or a scope change that needs a new plan) starts by merging the current feature branch into main — `git switch main && git merge <branch>` (fast-forward when possible, then delete the merged branch) — and cutting the next feature branch from main. Never carry an unmerged branch into a new task; the merge closes the previous one.
- **Dispatch one fresh subagent per task.** Each dispatch prompt is the
  subagent's whole world — it must contain, and contain only: the task spec
  with exact file paths and values, interfaces from earlier tasks it
  consumes, the verification commands, branch name, and the report contract
  (status DONE / DONE_WITH_CONCERNS / NEEDS_CONTEXT / BLOCKED, commits,
  one-line test summary). This keeps the main session context clean so work
  continues across features and plans without compaction.
- Use the cheapest model tier that can handle the task; escalate one tier
  when an implementer gets stuck or the task needs design judgment.
- Never dispatch implementers in parallel on the same code.
- Each subagent follows TDD: write the failing check, watch it fail, minimal
  code to pass, watch it pass, commit (Conventional Commits, lowercase,
  imperative). Non-trivial logic always gets one runnable check; trivial
  one-liners don't.
- **Controller reviews each task's diff** (`git diff <base>..HEAD`) against
  the plan before moving on: spec compliance plus "would I hand this to a
  3am pager" quality. Small findings go back to the same subagent (its
  context is intact); findings that conflict with the plan are ruled on by
  you and the ruling recorded. Fix loops past 3 rounds get a fresh subagent
  on a stronger model; past 5, stop and re-plan.
- Batching: several tiny same-shape edits across files = one dispatch.
- If scope grows past the plan or ~150 changed lines, stop and re-approve. If it needs a new plan: merge the current branch to main first, then continue on a fresh branch.
- Bugs: root cause before fix — trace every caller of the function being
  touched; fix once at the shared point, not in each caller. 3 failed fix
  attempts on the same bug = loop back to Plan with what was learned.
- Commit each completed task automatically; amend immediately if a commit
  needs correction. Push or create PRs only when asked.
- Decisions made on the user's behalf (plan rulings, parked findings,
  deferred workarounds) are listed in the final handoff — never silently
  dropped.

## 5. User validation — HANDOFF

When the build is verified:

- Run lint/typecheck/tests fresh and show the output.
- Summarize: what was built, how to run/test it, shortcuts taken, rulings
  made.
- Stop and WAIT for the user's final testing and validation.
- Fix failures by looping back to Build; requirement changes go back to
  Plan.

## Asking questions (anti-hallucination)

Never guess missing information — ask. Use the `question` tool, batch
related questions, recommended option first labeled "(Recommended)". Do not
ask for things discoverable in the codebase — look those up.

## Rules

- Phase transitions are one-way except for the feedback loops above.
- The two waits (approve, validate) are mandatory. Never self-approve and
  never self-validate.
- Controller never fixes code itself — dispatch. Controller context is for
  coordination, review, and the next plan.
