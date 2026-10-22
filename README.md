# Level Up Your Skills

Atelier / workshop — 45 min : construisez le skill principal qui fait travailler vos agents comme vous.
Build the main skill that makes your agents work like you.

| Langue | Slides | Exercices |
|---|---|---|
| Landing page | `node server.js` → http://localhost:3000 | — |
| Français (original) | `fr/index.html` | `fr/exercice/` |
| English | `en/index.html` | `en/exercise/` |

- `node server.js [port]` sert la page d'accueil et les deux decks (zéro dépendance, Node stdlib uniquement).
- Sans node : double-cliquez sur `index.html` — la landing et les decks fonctionnent aussi en `file://`.

- Fonctionne hors-ligne : reveal.js 6.0.2 est incluse dans `vendor/reveal/` (MIT).
- Charte VO2 Group : thème `theme/vo2.css` + `theme/vo2.js` (fond navy pour couverture / section / clôture, pied de page et logo sur chaque slide). Polices Jost + Inter embarquées dans `theme/fonts/` (SIL OFL 1.1). Texte du pied de page : attribut `data-vo2-footer` sur `.reveal`.
- Le skill `/workflow` présenté est suivi dans `skill/workflow/SKILL.md` (copie de référence — la copie canonique vit dans `~/.config/opencode/skills/workflow/`).
- Version autonome (un seul fichier, polices et reveal.js incluses) : `python3 scripts/build-standalone.py` génère `dist/en.html` et `dist/fr.html`, à envoyer ou ouvrir n'importe où.
- Notes présentateur : touche `S` — timing sur chaque slide.
- Une fiche par outil (Cursor, Copilot, Antigravity, Claude Code, OpenCode) dans chaque dossier d'exercices.
