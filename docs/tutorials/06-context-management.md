# Gestion des Contextes

## ThemeContext

Le contexte de thème gère le mode sombre/clair de l'application.

```jsx
// Exemple d'implémentation du ThemeContext
import { createContext, useState, useContext } from 'react';

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [isDark, setIsDark] = useState(true);
  
  const toggleTheme = () => setIsDark(!isDark);

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
```

## Utilisation du ThemeContext

```jsx
import { useTheme } from '../context/ThemeContext';

const MyComponent = () => {
  const { isDark, toggleTheme } = useTheme();
  
  return (
    <div className={isDark ? 'dark-theme' : 'light-theme'}>
      <button onClick={toggleTheme}>
        Toggle Theme
      </button>
    </div>
  );
};
```

## Bonnes pratiques

1. Utiliser les hooks personnalisés pour accéder au contexte
2. Séparer les contextes par fonctionnalité
3. Maintenir les valeurs par défaut cohérentes
