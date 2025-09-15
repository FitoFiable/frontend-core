import type { HomePageLangType } from '../types/homePage';

export const homePage: HomePageLangType = {
  loginText: 'Se Connecter',
  logoutText: 'Se Déconnecter',
  setUserName: {
    title: 'Salut, comment aimeriez-vous que je vous appelle ?',
    label: 'Votre nom :',
    placeholder: 'Entrez votre nom',
    button: 'Sauvegarder',
    setting: 'Sauvegarde...',
    success: 'Parfait ! Ravi de vous rencontrer !',
    error: 'Oups ! Quelque chose s\'est mal passé. Veuillez réessayer.'
  },
  userInfo: {
    title: 'Informations Utilisateur',
    userId: 'ID Utilisateur',
    name: 'Nom',
    userData: 'Données Utilisateur'
  },
  loading: 'Chargement du tableau de bord...'
};
