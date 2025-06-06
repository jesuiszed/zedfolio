// Configuration EmailJS
// Remplacez ces valeurs par vos vraies clés après avoir configuré EmailJS

export const emailjsConfig = {
  // Service ID de votre service EmailJS
  serviceId:'service_safo967',
  
  // Template ID de votre template EmailJS
  templateId:'template_ruhyby9',
  
  // Public Key de votre compte EmailJS
  publicKey:'IAgul1w7JOaf9kLkj'
};

// Instructions de configuration :
/*
1. Allez sur https://www.emailjs.com/
2. Créez un compte gratuit
3. Créez un service email (Gmail, Outlook, etc.)
4. Créez un template d'email avec les variables :
   - {{from_name}} : Nom de l'expéditeur
   - {{from_email}} : Email de l'expéditeur
   - {{subject}} : Sujet du message
   - {{message}} : Contenu du message
   - {{to_name}} : Votre nom (destinataire)
5. Récupérez vos clés et ajoutez-les à un fichier .env :
   REACT_APP_EMAILJS_SERVICE_ID=votre_service_id
   REACT_APP_EMAILJS_TEMPLATE_ID=votre_template_id
   REACT_APP_EMAILJS_PUBLIC_KEY=votre_public_key
*/
