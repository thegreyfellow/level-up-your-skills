# Antigravity — poser votre skill

## Toujours actif (recommandé pour `/workflow`)

À la racine du workspace (ou d'un sous-dossier projet) :

- `AGENTS.md` — le standard multi-outils, ou
- `GEMINI.md` — équivalent Antigravity, ou
- `.agents/rules/*.md` — plusieurs fichiers de règles.

```
# Mon workflow
(phases + gates + règles)
```

## Skills déclenchés et agents personnalisés

Antigravity prend aussi en charge les skills au format `SKILL.md` et, depuis la 2.0, les *custom agents* — utiles quand vous voudrez un agent dédié par phase (planificateur, bâtisseur, réviseur).

## Vérifier

1. Nouvelle conversation dans le workspace.
2. « Nouvelle tâche : ajoute un endpoint /health »
3. L'agent doit s'arrêter à la première gate avant d'écrire du code.

## Pièges

- `AGENTS.md` étant toujours dans le contexte : gardez le workflow court et impératif.
- Combiné avec les *Artifacts* (plan d'implémentation), votre gate « Proposer » peut se matérialiser en artifact de plan à valider — utilisez-le.
