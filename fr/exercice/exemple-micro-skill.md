---
name: composants-react
description: Nos conventions maison pour créer ou modifier des composants React. Déclencher dès qu'on touche à src/components ou à du JSX/TSX.
---

# Composants React — conventions maison

- Composants fonction + TypeScript. Pas de classes, pas de `any`.
- Réutilise la lib UI existante (`src/ui/`) — jamais un nouveau composant si un équivalent existe.
- Aucune nouvelle dépendance sans me demander. `package.json` intouchable sans mon OK.
- State local par défaut. State global seulement si deux vues le partagent — demande-moi.
- Chaque `useEffect` porte un commentaire d'une ligne : pourquoi il existe.
- Vérification : `pnpm test -- <fichier>` doit passer avant de dire fini.

<!--
Modèle pour votre propre micro-skill :
- UNE techno, UNE plateforme, UNE responsabilité.
- description = le déclencheur (quand le charger) : dossier, type de fichier, mot-clé.
- ~20 lignes max. Conventions, pièges, commande de vérification.
- Si ça dépasse 40 lignes : découpez en deux skills.
-->
