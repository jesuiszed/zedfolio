# Intégration des Composants

## Structure de l'application

```jsx
// Structure de base de App.js
function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <div className="app-container">
          <Navbar />
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contact />
          <Footer />
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
}
```

## Composants avec animations

```jsx
// Exemple de composant avec Framer Motion
const AnimatedComponent = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Contenu */}
    </motion.div>
  );
};
```

## Gestion des thèmes

```jsx
// Intégration du thème dans les composants
<div className={`
  ${isDark ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}
  transition-colors duration-200
`}>
  {/* Contenu */}
</div>
```

## Bonnes pratiques

1. Utiliser des composants atomiques
2. Implémenter des transitions fluides
3. Maintenir une cohérence visuelle
4. Optimiser les performances avec React.memo()
