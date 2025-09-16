import type { EventHistoryPageLangType } from '../types/eventHistoryPage';

export const eventHistoryPage: EventHistoryPageLangType = {
  title: 'Historique des Événements',
  subtitle: 'Voir l\'activité de votre compte et les événements système',
  backToDashboard: 'Retour au Tableau de Bord',
  pleaseLogIn: 'Veuillez vous connecter pour voir l\'historique des événements.',
  goToLogin: 'Aller à la Connexion',
  loadMore: 'Charger Plus d\'Événements',
  events: {
    emailSynchronized: 'Email Synchronisé',
    phoneVerification: 'Vérification Téléphone',
    transactionDetected: 'Transaction Détectée',
    emailAdded: 'Email Ajouté',
    systemUpdate: 'Mise à Jour Système',
    weeklyReport: 'Rapport Hebdomadaire',
    emailSyncFailed: 'Échec Synchronisation Email',
    profileUpdated: 'Profil Mis à Jour',
    payment: 'Paiement',
    withdrawal: 'Retrait',
    transfer: 'Transfert'
  },
  descriptions: {
    emailSyncSuccess: 'Synchronisé avec succès avec {email}',
    phoneVerified: 'Numéro de téléphone {phone} vérifié avec succès',
    paymentDetected: 'Paiement de {amount} à {merchant}',
    emailAddedSuccess: 'Ajouté {email} aux emails autorisés',
    dashboardUpdated: 'Tableau de bord mis à jour vers la version {version}',
    weeklySummaryReady: 'Votre résumé financier hebdomadaire est prêt',
    emailSyncFailedDesc: 'Échec de la synchronisation avec {email} - nouvelle tentative...',
    usernameChanged: 'Nom d\'utilisateur changé en "{username}"',
    transferDetected: 'Transfert de {amount} à {recipient}'
  },
  statuses: {
    success: 'Succès',
    warning: 'Avertissement',
    error: 'Erreur',
    info: 'Information'
  }
};
