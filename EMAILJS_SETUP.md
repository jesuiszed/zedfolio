# Configuration EmailJS - Guide Complet

## 🚨 Erreur actuelle
```
POST https://api.emailjs.com/api/v1.0/email/send 400 (Bad Request)
The Public Key is invalid. To find this ID, visit https://dashboard.emailjs.com/admin/account
```

## 🛠️ Solution

### Étape 1: Aller sur EmailJS
1. Allez sur **https://dashboard.emailjs.com/**
2. Connectez-vous ou créez un compte gratuit

### Étape 2: Créer un Service Email
1. Cliquez sur **"Email Services"**
2. Cliquez sur **"Add New Service"**
3. Choisissez votre fournisseur email (Gmail, Outlook, etc.)
4. Suivez les instructions de configuration
5. **Notez le Service ID** (ex: `service_abc123`)

### Étape 3: Créer un Template
1. Cliquez sur **"Email Templates"**
2. Cliquez sur **"Create New Template"**
3. Utilisez cette structure :

```html
Subject: {{subject}}

Bonjour {{to_name}},

Vous avez reçu un nouveau message depuis votre portfolio :

Nom: {{from_name}}
Email: {{from_email}}
Sujet: {{subject}}

Message:
{{message}}

---
Envoyé depuis votre portfolio
```

4. **Notez le Template ID** (ex: `template_xyz789`)

### Étape 4: Récupérer la Public Key
1. Allez dans **"Account"** → **"API Keys"**
2. Copiez votre **Public Key** (ex: `abc123XYZ`)

### Étape 5: Mettre à jour le fichier .env
Modifiez le fichier `.env` avec vos vraies valeurs :

```env
REACT_APP_EMAILJS_SERVICE_ID=service_abc123
REACT_APP_EMAILJS_TEMPLATE_ID=template_xyz789
REACT_APP_EMAILJS_PUBLIC_KEY=abc123XYZ
```

### Étape 6: Redémarrer le serveur
```bash
npm start
```

## 🧪 Test
1. Allez sur votre portfolio
2. Remplissez le formulaire de contact
3. Envoyez un message test
4. Vérifiez votre email

## 🔍 Variables du Template
Les variables utilisées dans le code :
- `{{from_name}}` - Nom de l'expéditeur
- `{{from_email}}` - Email de l'expéditeur  
- `{{subject}}` - Sujet du message
- `{{message}}` - Contenu du message
- `{{to_name}}` - Votre nom (destinataire)

## 📧 Exemple de Template EmailJS
```html
<h2>Nouveau message depuis votre portfolio</h2>

<p><strong>De:</strong> {{from_name}} ({{from_email}})</p>
<p><strong>Sujet:</strong> {{subject}}</p>

<h3>Message:</h3>
<div style="background: #f5f5f5; padding: 15px; border-radius: 5px;">
{{message}}
</div>

<hr>
<p><em>Message envoyé depuis votre portfolio</em></p>
```

## ⚠️ Notes importantes
- La clé publique EmailJS est différente de l'API key
- Vérifiez que votre service email est bien configuré
- Le template doit être publié (pas en brouillon)
- Les variables doivent correspondre exactement

## 🔗 Liens utiles
- [EmailJS Dashboard](https://dashboard.emailjs.com/)
- [Documentation EmailJS](https://www.emailjs.com/docs/)
- [Support EmailJS](https://www.emailjs.com/docs/faq/)
