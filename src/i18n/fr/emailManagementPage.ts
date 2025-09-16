import type { EmailManagementPageLangType } from '../types/emailManagementPage';

export const emailManagementPage: EmailManagementPageLangType = {
  header: {
    title: 'Gestion des E-mails',
    subtitle: 'Gérez vos e-mails autorisés et confirmés',
    backToDashboard: 'Retour au Tableau de Bord'
  },
  emailSync: {
    title: 'Comment fonctionne la Synchronisation des E-mails',
    step1: {
      title: 'Étape 1: Ajouter des E-mails Autorisés',
      description: 'Ce sont les adresses e-mail que vous voulez associer à votre compte Fito Fiable. Utilisez le formulaire de gestion des e-mails pour les ajouter.'
    },
    step2: {
      title: 'Étape 2: Confirmer la Propriété de l\'E-mail',
      description: 'Pour activer un e-mail, vous devez envoyer un e-mail de confirmation depuis cette adresse à go@fitofiable.com avec votre numéro de téléphone comme objet:',
      subjectLabel: 'Objet:',
      phoneLabel: 'Votre numéro de téléphone:',
      sendButton: 'Envoyer l\'E-mail de Confirmation'
    },
    step3: {
      title: 'Étape 3: L\'E-mail Devient Actif',
      description: 'Une fois confirmé, l\'e-mail devient "Actif" et Fito traitera automatiquement tous les e-mails reçus de cette adresse, les incluant dans les analyses du tableau de bord et les rapports financiers.'
    },
    status: {
      pending: 'En attente - En attente de l\'e-mail de confirmation',
      active: 'Actif - Prêt à recevoir des e-mails'
    }
  },
  gmailSetup: {
    title: 'Configurer le Transfert Automatique d\'E-mails Bancaires',
    description: 'Configurez Gmail pour transférer automatiquement les notifications bancaires vers Fito Fiable pour un suivi financier transparent.',
    step1: {
      title: 'Étape 1: Configurer le Transfert d\'E-mails',
      steps: [
        'Ouvrez Gmail sur votre ordinateur',
        'Cliquez sur l\'icône ⚙️ (paramètres) en haut à droite',
        'Cliquez sur "Voir tous les paramètres"',
        'Cliquez sur l\'onglet "Transfert et POP/IMAP"',
        'Cliquez sur "Ajouter une adresse de transfert"',
        'Entrez: go@fitofiable.com',
        'Cliquez sur "Suivant" et vérifiez votre identité',
        'Cliquez sur "Continuer" pour confirmer'
      ]
    },
    step2: {
      title: 'Étape 2: Créer un Filtre d\'E-mail',
      steps: [
        'Dans votre boîte de réception, cliquez sur l\'icône 🔍 (rechercher)',
        'Cliquez sur l\'icône de filtre (trois lignes horizontales) à côté de la loupe',
        'Dans le champ "De", créez un filtre avec les adresses e-mail de votre banque'
      ],
      findEmails: {
        title: '💡 Comment trouver les adresses e-mail de votre banque:',
        tips: [
          'Vérifiez les e-mails de notification de votre banque dans votre boîte de réception',
          'Regardez le champ "De" des e-mails bancaires récents',
          'Modèles courants: notifications@[banque].fr, alertes@[banque].fr, transactions@[banque].fr',
          'Copiez toutes les adresses e-mail et collez-les ensemble en utilisant "OR" entre chaque adresse'
        ],
        warning: '⚠️ Important: Collez toutes les adresses e-mail dans le même champ, séparées par "OR" (pas dans des champs séparés)'
      },
      example: {
        title: 'Exemple pour les banques françaises (personnalisez pour vos banques):',
        banks: 'notifications@bnpparibas.fr OR alertes@bnpparibas.fr OR transactions@bnpparibas.fr OR notifications@credit-agricole.fr OR alertes@credit-agricole.fr OR transactions@credit-agricole.fr OR notifications@societegenerale.fr OR alertes@societegenerale.fr OR transactions@societegenerale.fr OR notifications@lcl.fr OR alertes@lcl.fr OR transactions@lcl.fr OR notifications@hsbc.fr OR alertes@hsbc.fr OR transactions@hsbc.fr'
      }
    },
    success: {
      title: '✅ Tout est prêt!',
      description: 'Toutes les notifications bancaires seront maintenant transférées automatiquement vers Fito Fiable.',
      time: 'Temps total de configuration: 3-5 minutes'
    }
  }
};
