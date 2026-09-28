# Cursor — poser votre skill

## Règle déclenchée (recommandé pour `/workflow`)

Fichier `.cursor/rules/workflow.mdc` dans le repo :

```
---
description: Mon processus standard pour toute nouvelle tâche ou correction de code.
alwaysApply: false
---
(votre workflow ici)
```

- `alwaysApply: false` + une bonne `description` → Cursor l'injecte quand c'est pertinent (mode Agent).
- Le micro-skill techno : un second `.mdc`, ou une règle ciblée sur certains fichiers :

```
---
globs: src/components/**
alwaysApply: true
---
(conventions React ici)
```

## Toujours actif (alternative)

- `.cursor/rules/global.mdc` avec `alwaysApply: true`
- `AGENTS.md` à la racine — reconnu aussi.
- Règles utilisateur globales : *Settings → Rules* (texte collé, valable pour tous les repos).

## Vérifier

1. Nouvelle conversation Agent dans le repo.
2. « Nouvelle tâche : ajoute un endpoint /health »
3. L'agent doit s'arrêter à la première gate. Sinon → passez `alwaysApply: true` le temps de valider, puis affinez la `description`.

## Pièges

- Trop de règles `alwaysApply: true` = tout est injecté en permanence = bruit. Une seule règle toujours active, le reste en description/globs.
