# Guide de Style

## Thème Sombre/Clair
Basé sur l'implémentation actuelle :

```jsx
// Classes conditionnelles pour le thème
const themeClasses = {
    background: isDark ? 'bg-gray-900' : 'bg-white',
    text: isDark ? 'text-white' : 'text-gray-900',
    border: isDark ? 'border-gray-700' : 'border-gray-200'
};
```

## Gradients et Couleurs
Exemples tirés des composants :

```jsx
// Exemples de gradients
className="bg-gradient-to-r from-blue-500 to-purple-500"
className="bg-gradient-to-br from-gray-900 via-gray-800 to-black"

// Système de couleurs
colors: {
    primary: 'blue',
    secondary: 'purple',
    accent: 'pink'
}
```

## Responsive Design
- Mobile-first approach
- Utilisation des classes Tailwind
- Flexbox et Grid
