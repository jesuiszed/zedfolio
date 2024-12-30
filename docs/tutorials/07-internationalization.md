# Internationalisation (i18n)

## Structure des traductions

```javascript
// Structure des fichiers de traduction
translations/
├── index.js        # Point d'entrée des traductions
├── en/            # Traductions anglaises
└── fr/            # Traductions françaises
```

## Implémentation

```jsx
// Exemple d'utilisation du LanguageContext
import { useLanguage } from '../context/LanguageContext';

const Component = () => {
  const { t, language, toggleLanguage } = useLanguage();
  
  return (
    <div>
      <h1>{t('header.title')}</h1>
      <button onClick={toggleLanguage}>
        {language === 'en' ? 'FR' : 'EN'}
      </button>
    </div>
  );
};
```

## Organisation des traductions

```javascript
// Structure des clés de traduction
{
  nav: {
    home: "Home",
    about: "About"
  },
  hero: {
    greeting: "Hi, I'm",
    title: "Network & IT Systems Engineer"
  }
}
```

## Bonnes pratiques

1. Utiliser des clés hiérarchiques
2. Maintenir une structure cohérente entre les langues
3. Utiliser des variables pour les valeurs dynamiques
