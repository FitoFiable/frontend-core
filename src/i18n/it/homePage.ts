import type { HomePageLangType } from '../types/homePage';

export const homePage: HomePageLangType = {
  loginText: 'Accedi',
  logoutText: 'Esci',
  setUserName: {
    title: 'Ciao, come vorresti che ti chiami?',
    label: 'Il tuo nome:',
    placeholder: 'Inserisci il tuo nome',
    button: 'Salva',
    setting: 'Salvataggio...',
    success: 'Perfetto! Piacere di conoscerti!',
    error: 'Ops! Qualcosa è andato storto. Riprova.'
  },
  userInfo: {
    title: 'Informazioni Utente',
    userId: 'ID Utente',
    name: 'Nome',
    userData: 'Dati Utente'
  },
  loading: 'Caricamento dashboard...'
};
