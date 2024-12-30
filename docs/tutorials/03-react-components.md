# Composants React

## Introduction aux composants

Ce tutoriel couvre la création et l'utilisation des composants React dans Zedfolio.

## Types de composants

### 1. Composants fonctionnels

```tsx
// Exemple de composant fonctionnel
const ProjectCard = ({ title, description }: ProjectCardProps) => {
  return (
    <Card>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </Card>
  );
};
```

### 2. Hooks personnalisés

```tsx
// Exemple de custom hook
const useTheme = () => {
  const [theme, setTheme] = useState('light');
  
  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  return { theme, toggleTheme };
};
```

### 3. Styled Components

```tsx
// Exemple de styled components
const StyledButton = styled.button`
  background: ${props => props.theme.primary};
  color: white;
  padding: 10px 20px;
`;
```

## Exercices pratiques

1. Créez un composant avec des props
2. Implémentez un hook personnalisé
3. Stylisez un composant avec styled-components
