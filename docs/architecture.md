# Architecture

## Vue d'ensemble

Zedfolio utilise une architecture moderne basée sur des composants React avec TypeScript.

## Couches applicatives

### Frontend

- **Components**: Composants UI réutilisables
- **Pages**: Composants de niveau page
- **Hooks**: Logique réutilisable
- **Context**: État global de l'application
- **Services**: Communication avec l'API

### Backend

- **Routes**: Endpoints API
- **Controllers**: Logique métier
- **Models**: Schémas de données
- **Middleware**: Authentification, validation

## Flux de données

```
Client <-> API Gateway <-> Services <-> Base de données
```

## Sécurité

- JWT pour l'authentification
- CORS configuré
- Validation des entrées
- Sanitization des données

## Performance

- Lazy loading des composants
- Mise en cache
- Optimisation des images
- Code splitting
