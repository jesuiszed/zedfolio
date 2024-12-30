# Guide d'installation

Ce guide vous aidera à installer et configurer Zedfolio sur votre système.

## Prérequis

- Node.js (v14+)
- MongoDB (v4.4+)
- Git

## Installation

1. Clonez le dépôt :
```bash
git clone https://github.com/votre-username/zedfolio.git
cd zedfolio
```

2. Installez les dépendances :
```bash
npm install
```

3. Configurez les variables d'environnement :
```bash
cp .env.example .env
```
Modifiez le fichier `.env` avec vos paramètres.

4. Lancez l'application :
```bash
npm run dev
```

## Configuration

### Base de données

Assurez-vous que MongoDB est en cours d'exécution sur votre système.

### Variables d'environnement

- `PORT`: Port du serveur (défaut: 3000)
- `MONGODB_URI`: URI de connexion MongoDB
- `JWT_SECRET`: Clé secrète pour JWT

## Déploiement

Instructions pour le déploiement en production...
