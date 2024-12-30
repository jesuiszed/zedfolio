# Configuration initiale

## Introduction

Dans ce tutoriel, nous allons apprendre à configurer l'environnement de développement pour Zedfolio.

## Étapes détaillées

### 1. Installation des outils

```bash
# Installation de Node.js
# Téléchargez depuis https://nodejs.org

# Vérification de l'installation
node --version
npm --version

# Installation des dépendances globales
npm install -g typescript
npm install -g eslint
```

### 2. Configuration de l'IDE

- Installation de VS Code
- Extensions recommandées :
  - ESLint
  - Prettier
  - TypeScript IDE Support
  - React Developer Tools

### 3. Structure du projet

Expliquons chaque dossier :

```
src/
├── components/     # Composants réutilisables
│   ├── Button/
│   ├── Card/
│   └── Navigation/
├── pages/         # Pages de l'application
├── hooks/         # Custom hooks
└── services/      # Services API
```

### 4. Premier composant

```tsx
// Exemple de composant Button
import styled from 'styled-components';

const Button = styled.button`
  padding: 10px 20px;
  border-radius: 4px;
  // ... autres styles
`;

export default Button;
```

## Exercices pratiques

1. Créez un nouveau composant
2. Ajoutez des styles avec styled-components
3. Implémentez un custom hook simple
