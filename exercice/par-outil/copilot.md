# GitHub Copilot — poser votre skill

## Instruction ciblée (recommandé pour le micro-skill)

`.github/instructions/react.instructions.md` dans le repo — chargée quand les fichiers correspondent :

```
---
applyTo: 'src/components/**'
---
(conventions React ici)
```

## Toujours actif (recommandé pour `/workflow`)

`.github/copilot-instructions.md` à la racine du repo — injecté dans chaque session agent/chat :

```
# Mon workflow
(phases + gates + règles — gardez-le court, < ~60 lignes)
```

- Version globale : *VS Code Settings → Copilot → Instructions* (valable pour tous les repos).
- `AGENTS.md` à la racine est également reconnu.

## Vérifier

1. Nouvelle session en mode Agent, dans le repo.
2. « Nouvelle tâche : ajoute un endpoint /health »
3. L'agent doit s'arrêter à la première gate avant d'écrire du code.

## Pièges

- Pas de déclenchement par description : ce qui est dans `copilot-instructions.md` est **toujours** dans le contexte → gardez-le court, ciblé `applyTo:` pour le reste.
- Le fichier est commité dans le repo : idéal pour un workflow d'équipe, négociez le contenu en revue de PR.
