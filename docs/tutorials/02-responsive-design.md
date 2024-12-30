# Guide du Design Responsive

## Structure de Base
Comment implémenter un design responsive comme dans la Navbar :

```jsx
// Exemple de structure responsive
<nav className="fixed w-full">
    {/* Desktop Navigation */}
    <div className="hidden md:flex">
        {/* Contenu desktop */}
    </div>

    {/* Mobile Navigation */}
    <div className="md:hidden">
        {/* Contenu mobile */}
    </div>
</nav>
```

## Points de Rupture (Breakpoints)
- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px

## Bonnes Pratiques
1. Mobile-first approach
2. Utilisation des grilles flexibles
3. Media queries avec Tailwind
