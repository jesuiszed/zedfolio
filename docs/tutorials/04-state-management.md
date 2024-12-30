# Gestion de l'État

## Introduction

Ce tutoriel explique comment gérer l'état dans Zedfolio avec React Context et hooks.

## État local vs global

### 1. useState

```tsx
// Exemple d'état local
const [projects, setProjects] = useState([]);
```

### 2. Context API

```tsx
// Exemple de Context
export const ProjectContext = React.createContext({
  projects: [],
  addProject: (project: Project) => {},
  removeProject: (id: string) => {}
});
```

### 3. Custom Hooks avec Context

```tsx
// Hook personnalisé utilisant Context
const useProjects = () => {
  const context = useContext(ProjectContext);
  if (!context) {
    throw new Error('useProjects must be used within ProjectProvider');
  }
  return context;
};
```

## Contexte du Thème
Basé sur l'implémentation actuelle :

```jsx
// Exemple d'utilisation du contexte
import { useTheme } from '../context/ThemeContext';

const YourComponent = () => {
    const { isDark, toggleTheme } = useTheme();
    
    return (
        <div className={isDark ? 'dark-theme' : 'light-theme'}>
            {/* Contenu */}
        </div>
    );
};
```

## Gestion des Formulaires
Exemple du composant Contact :

```jsx
// Gestion d'état du formulaire
const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
});

// Validation
const validateForm = (data) => {
    const errors = {};
    // Logique de validation
    return errors;
};
```

## Bonnes Pratiques
1. Utilisation des hooks personnalisés
2. Séparation de la logique d'état
3. Gestion des erreurs et validation

## Exercices pratiques

1. Créez un nouveau Context
2. Implémentez un Provider
3. Utilisez le Context dans un composant
