# Level Up Your Skills

Atelier 45 min : 20 min de présentation de la stack `/workflow` + ponytail + tokenjuice,
25 min pour que chacun construise son propre skill workflow + un micro-skill.
Version anglaise : dossier `../en/`.

## Ouvrir les slides

```sh
xdg-open fr/index.html        # fonctionne hors-ligne, reveal.js est incluse
```

- `?` : aide · flèches : naviguer · `S` : notes présentateur (timing sur chaque slide) · `F` : plein écran

## Contenu

- `index.html` — les slides (français, notes présentateur incluses)
- `exercice/template.md` — le skill workflow à remplir pendant l'atelier
- `exercice/exemple-micro-skill.md` — exemple de micro-skill techno (React)
- `exercice/par-outil/` — une fiche par outil : opencode, claude-code, cursor, copilot, antigravity
- `../vendor/reveal/` — reveal.js 6.0.2 (MIT), partagée avec la version anglaise, incluse pour tourner hors-ligne

## Script de la démo (slide 12)

1. Session OpenCode jetable, branch demo.
2. « Nouvelle tâche : ajoute un endpoint /health » → classification (borné) + plan + **arrêt à la gate**.
3. « OK » → branche, TDD, commits, revue de diff.
4. Sortie de tests fraîche + handoff → **attend la validation**.

## Astuce multi-outils

Écrivez le workflow **une fois** (`workflow.md` à la racine), référencez-le partout :
`AGENTS.md` → « Suis strictement le processus défini dans ./workflow.md »,
et posez le fichier dans `skills/` (OpenCode, Claude) avec une description-déclencheur.
