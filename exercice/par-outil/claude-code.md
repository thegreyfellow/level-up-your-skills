# Claude Code — poser votre skill

## Skill déclenché par la description (recommandé pour `/workflow`)

| Portée | Emplacement |
|---|---|
| Global (`~`) | `~/.claude/skills/workflow/SKILL.md` |
| Projet | `.claude/skills/workflow/SKILL.md` dans le repo |

- Frontmatter : `name` + `description`. La `description` sert de déclencheur.
- Le micro-skill techno : même mécanique → `~/.claude/skills/composants-react/SKILL.md`.

## Toujours actif (alternative)

`CLAUDE.md` à la racine du projet (ou `~/.claude/CLAUDE.md` global) — injecté dans chaque session.

## Vérifier

1. Nouvelle session (les skills se chargent au démarrage).
2. « Nouvelle tâche : ajoute un endpoint /health »
3. L'agent doit annoncer la phase 1 (Comprendre) et **s'arrêter à la première gate**.
4. En cas de doute : « utilise ton skill workflow » pour forcer, puis corrigez la description.

## Pièges

- Si vous utilisez des plugins (ex. superpowers), vérifiez qu'un autre workflow ne se déclenche pas en concurrence.
