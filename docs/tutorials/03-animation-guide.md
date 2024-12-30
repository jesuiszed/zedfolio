# Guide des Animations

## Animations de Base
Basé sur le composant Hero :

```jsx
// Exemple d'animations
const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
};

// Utilisation
<motion.div
    {...fadeInUp}
    className="your-classes"
>
    {/* Contenu */}
</motion.div>
```

## Animations Interactives
Exemples du composant Contact :

```jsx
// Animation au survol
<motion.button
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className="your-button-classes"
>
    Send Message
</motion.button>
```

## Transitions et Effets
- Utilisation de `AnimatePresence` pour les transitions
- Effets de particules avec `tsparticles`
