# OpenCode — poser votre skill

## Skill déclenché par la description (recommandé pour `/workflow`)

| Portée | Emplacement |
|---|---|
| Global (tous vos projets) | `~/.config/opencode/skills/workflow/SKILL.md` |
| Projet | `.opencode/skill/workflow/SKILL.md` dans le repo |

- Frontmatter obligatoire : `name` + `description`. La `description` sert de déclencheur.
- Le micro-skill techno : même dossier → `~/.config/opencode/skills/composants-react/SKILL.md`.

## Toujours actif (alternative)

`AGENTS.md` à la racine du projet — chargé dans chaque session, aucune description nécessaire. Bien pour 5-10 règles qui ne quittent jamais le contexte.

## Vérifier

1. Nouvelle session (les skills se chargent au démarrage).
2. « Nouvelle tâche : ajoute un endpoint /health »
3. L'agent doit annoncer la phase 1 (Comprendre) et **s'arrêter à la première gate**.

## Pièges

- Description vague = skill jamais déclenché. Décrivez *quand* charger, pas *ce que c'est*.
- Ne mettez pas le workflow en always-on ET en skill : choisissez l'un (skill recommandé).
