import type { UserInfoPageLangType } from '../types/userInfoPage';

export const userInfoPage: UserInfoPageLangType = {
  header: {
    title: 'Informations Utilisateur',
    subtitle: 'Voir et gérer les détails de votre compte',
    backToDashboard: 'Retour au Tableau de Bord'
  },
  basicInfo: {
    title: 'Informations de Base',
    userId: 'ID Utilisateur',
    username: 'Nom d\'Utilisateur',
    phoneNumber: 'Numéro de Téléphone',
    verified: 'Vérifié',
    notSet: 'Non défini'
  },
  emailStatus: {
    title: 'Statut des E-mails',
    allowedEmails: 'E-mails Autorisés',
    confirmedEmails: 'E-mails Confirmés',
    emailList: 'Liste des E-mails',
    configured: 'configurés',
    active: 'actifs',
    status: {
      active: 'Actif',
      pending: 'En attente'
    }
  },
  rawData: {
    title: 'Données Utilisateur Brutes',
    viewData: 'Voir les Données Brutes'
  }
};
