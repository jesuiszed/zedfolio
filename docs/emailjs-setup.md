# Configuration EmailJS pour le formulaire de contact

## Étapes de configuration

### 1. Créer un compte EmailJS
1. Allez sur [https://www.emailjs.com/](https://www.emailjs.com/)
2. Créez un compte gratuit
3. Confirmez votre email

### 2. Configurer un service email
1. Dans votre dashboard, allez dans **"Email Services"**
2. Cliquez sur **"Add New Service"**
3. Choisissez votre fournisseur email (Gmail, Outlook, etc.)
4. Suivez les instructions pour connecter votre compte
5. Notez le **Service ID** généré

### 3. Créer un template d'email
1. Allez dans **"Email Templates"**
2. Cliquez sur **"Create New Template"**
3. Utilisez ce template comme base :

```html
Sujet : {{subject}} - Nouveau message depuis le portfolio

Bonjour {{to_name}},

Vous avez reçu un nouveau message depuis votre portfolio :

Nom : {{from_name}}
Email : {{from_email}}
Sujet : {{subject}}

Message :
{{message}}

---
Message envoyé automatiquement depuis votre portfolio
```

4. Notez le **Template ID** généré

### 4. Récupérer votre Public Key
1. Allez dans **"Account"** > **"General"**
2. Copiez votre **Public Key**

### 5. Configurer les variables d'environnement
1. Copiez le fichier `.env.example` vers `.env`
2. Remplacez les valeurs par vos vraies clés :

```bash
cp .env.example .env
```

Editez le fichier `.env` :
```
REACT_APP_EMAILJS_SERVICE_ID=votre_service_id
REACT_APP_EMAILJS_TEMPLATE_ID=votre_template_id  
REACT_APP_EMAILJS_PUBLIC_KEY=votre_public_key
```

### 6. Tester le formulaire
1. Redémarrez votre serveur de développement
2. Remplissez et soumettez le formulaire de contact
3. Vérifiez que vous recevez bien l'email

## Variables disponibles dans le template
- `{{from_name}}` : Nom de l'expéditeur
- `{{from_email}}` : Email de l'expéditeur
- `{{subject}}` : Sujet du message
- `{{message}}` : Contenu du message
- `{{to_name}}` : Votre nom (destinataire)

## Fonctionnalités implémentées
- ✅ Validation des champs en temps réel
- ✅ Messages d'erreur et de succès
- ✅ Indicateur de chargement
- ✅ Protection contre les envois multiples
- ✅ Interface responsive et accessible
- ✅ Animations Framer Motion
- ✅ Support thème sombre/clair

## Limites du plan gratuit EmailJS
- 200 emails/mois
- Branding EmailJS dans les emails
- Support basique

Pour plus d'emails, consultez leurs plans payants.
