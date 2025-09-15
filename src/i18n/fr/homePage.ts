import type { HomePageLangType } from '../types/homePage';

export const homePage: HomePageLangType = {
  loginText: 'Se Connecter',
  logoutText: 'Se Déconnecter',
  common: {
    saving: 'Sauvegarde...',
    checking: 'Vérification...'
  },
  setUserName: {
    title: 'Salut, comment aimeriez-vous que je vous appelle ?',
    label: 'Votre nom :',
    placeholder: 'Entrez votre nom',
    button: 'Sauvegarder',
    setting: 'Sauvegarde...',
    success: 'Parfait ! Ravi de vous rencontrer !',
    error: 'Oups ! Quelque chose s\'est mal passé. Veuillez réessayer.'
  },
  phone: {
    syncCodeSent: 'Nous vous avons envoyé un code de synchronisation.',
    title: 'Connectons votre téléphone',
    subtitle: 'Fito utilisera votre numéro pour garder votre expérience synchronisée.',
    countryCodePlaceholder: '+33',
    numberPlaceholder: '06 12 34 56 78',
    countryCodeError: 'L\'indicatif doit être comme +1, +44, +57.',
    numberError: 'Le numéro doit contenir 6 à 14 chiffres.',
    save: 'Enregistrer le téléphone et générer le code',
    cancelChange: 'Annuler la modification',
    changePhone: 'Changer de téléphone',
    verifyTitle: 'Veuillez m\'envoyer ce code via WhatsApp',
    verifyHelp: "Vous pouvez utiliser le bouton 'Envoyer sur WhatsApp' ci-dessous ou l'envoyer directement au +57 310 810 8201",
    openWhatsapp: 'Envoyer sur WhatsApp',
    codeValidTime: 'Ce code est valable 5 minutes.',
    veryfyConfirmHelp: 'Après avoir envoyé le code via WhatsApp, cliquez sur le bouton ci-dessous pour confirmer.',
    notVerifiedYet: 'Nous n\'avons pas encore détecté la vérification. Veuillez réessayer.',
    whatsappMessageTemplate: 'Salut Fito, voici mon code de synchronisation : {code}',
    alreadySynced: 'Je me suis déjà synchronisé'
  },
  userInfo: {
    title: 'Informations Utilisateur',
    userId: 'ID Utilisateur',
    name: 'Nom',
    userData: 'Données Utilisateur'
  },
  loading: 'Chargement du tableau de bord...'
};
