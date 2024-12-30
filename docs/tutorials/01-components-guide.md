# Guide des Composants

## ThemeToggle
Le composant de bascule du thème utilise Framer Motion pour les animations.

```jsx
// Exemple d'implémentation
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

const ThemeToggle = () => {
    const { isDark, toggleTheme } = useTheme();
    
    return (
        <motion.button
            onClick={toggleTheme}
            whileHover={{ scale: 1.2 }}
            whileTap={{ rotate: 360 }}
        >
            {/* Icônes du thème */}
        </motion.button>
    );
};
```

## Animations avec Framer Motion
- `whileHover`: Pour les effets au survol
- `whileTap`: Pour les effets au clic
- `animate`: Pour les animations automatiques

## Style avec Tailwind
Exemples de classes utilisées :
```jsx
// Classes pour le mode sombre/clair
className={`${isDark ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}

// Animations et transitions
className="transition-all duration-300 transform"
