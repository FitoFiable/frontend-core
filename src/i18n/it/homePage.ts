import type { HomePageLangType } from '../types/homePage';

export const homePage: HomePageLangType = {
  loginText: 'Accedi',
  logoutText: 'Esci',
  common: {
    saving: 'Salvataggio...',
    checking: 'Verifica...'
  },
  setUserName: {
    title: 'Ciao, come vorresti che ti chiami?',
    label: 'Il tuo nome:',
    placeholder: 'Inserisci il tuo nome',
    button: 'Salva',
    setting: 'Salvataggio...',
    success: 'Perfetto! Piacere di conoscerti!',
    error: 'Ops! Qualcosa è andato storto. Riprova.'
  },
  phone: {
    syncCodeSent: 'Ti abbiamo inviato un codice di sincronizzazione.',
    title: 'Colleghiamo il tuo telefono',
    subtitle: 'Fito userà il tuo numero per mantenere sincronizzata la tua esperienza.',
    countryCodePlaceholder: '+39',
    numberPlaceholder: '320 123 4567',
    countryCodeError: 'Il prefisso deve essere come +1, +44, +57.',
    numberError: 'Il numero deve contenere 6-14 cifre.',
    save: 'Salva telefono e genera codice',
    cancelChange: 'Annulla modifica',
    changePhone: 'Cambia telefono',
    verifyTitle: 'Per favore, inviami questo codice via WhatsApp',
    verifyHelp: "Puoi usare il pulsante 'Invia su WhatsApp' qui sotto o inviarlo direttamente al +57 310 810 8201",
    openWhatsapp: 'Invia su WhatsApp',
    codeValidTime: 'Questo codice è valido per 5 minuti.',
    veryfyConfirmHelp: 'Dopo aver inviato il codice su WhatsApp, fai clic sul pulsante qui sotto per confermare.',
    notVerifiedYet: 'Verifica non ancora rilevata. Riprova.',
    whatsappMessageTemplate: 'Ciao Fito, questo è il mio codice di sincronizzazione: {code}',
    alreadySynced: 'Ho già sincronizzato'
  },
  userInfo: {
    title: 'Informazioni Utente',
    userId: 'ID Utente',
    name: 'Nome',
    userData: 'Dati Utente'
  },
  loading: 'Caricamento dashboard...'
};
