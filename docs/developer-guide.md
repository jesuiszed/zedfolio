# Guide du développeur

## Structure du projet

```
zedfolio/
├── src/
│   ├── components/     # Composants React réutilisables
│   ├── pages/         # Pages de l'application
│   ├── hooks/         # Custom React hooks
│   ├── services/      # Services et API calls
│   ├── utils/         # Utilitaires et helpers
│   └── types/         # Définitions TypeScript
├── public/           # Assets statiques
└── tests/           # Tests unitaires et d'intégration
```

## Conventions de code

- Utilisation de TypeScript strict
- Styles avec Styled Components
- Tests avec Jest et React Testing Library
- Commits suivant la convention Conventional Commits

## Scripts disponibles

- `npm run dev`: Lance le serveur de développement
- `npm run build`: Build le projet
- `npm run test`: Lance les tests
- `npm run lint`: Vérifie le code avec ESLint

## Workflow de développement

1. Créer une nouvelle branche
2. Développer et tester localement
3. Créer une Pull Request
4. Code review
5. Merge après approbation

## Bonnes pratiques

- Documentation du code avec JSDoc
- Tests unitaires pour les composants critiques
- Gestion d'état avec React Context et hooks
