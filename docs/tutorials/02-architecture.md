# Architecture du projet

## Vue d'ensemble

Ce tutoriel explique l'architecture complète de Zedfolio et comment les différentes parties interagissent.

## Architecture Frontend

### 1. Composants

```tsx
// Exemple d'architecture de composants
src/
├── components/
│   ├── atoms/       # Composants de base
│   ├── molecules/   # Composants composés
│   └── organisms/   # Composants complexes
```

### 2. Gestion d'état

```tsx
// Exemple de Context API
const ThemeContext = React.createContext({
  theme: 'light',
  toggleTheme: () => {}
});
```

### 3. Routing

```tsx
// Configuration des routes
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/portfolio" element={<Portfolio />} />
  <Route path="/contact" element={<Contact />} />
</Routes>
```

## Architecture Backend

### 1. API Routes

```typescript
// Exemple de structure API
api/
├── routes/
│   ├── projects.ts
│   └── users.ts
├── controllers/
└── models/
```

## Exercices pratiques

1. Créez une nouvelle route API
2. Implémentez un nouveau contexte
3. Ajoutez un nouveau composant suivant l'architecture
