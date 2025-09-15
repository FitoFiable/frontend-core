import type { HomePageLangType } from '../types/homePage';

export const homePage: HomePageLangType = {
  loginText: 'Anmelden',
  logoutText: 'Abmelden',
  setUserName: {
    title: 'Hallo, wie soll ich Sie nennen?',
    label: 'Ihr Name:',
    placeholder: 'Geben Sie Ihren Namen ein',
    button: 'Speichern',
    setting: 'Speichern...',
    success: 'Perfekt! Freut mich, Sie kennenzulernen!',
    error: 'Ups! Etwas ist schiefgelaufen. Bitte versuchen Sie es erneut.'
  },
  userInfo: {
    title: 'Benutzerinformationen',
    userId: 'Benutzer-ID',
    name: 'Name',
    userData: 'Benutzerdaten'
  },
  loading: 'Dashboard wird geladen...'
};
