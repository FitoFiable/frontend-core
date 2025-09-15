import type { HomePageLangType } from '../types/homePage';

export const homePage: HomePageLangType = {
  loginText: 'Anmelden',
  logoutText: 'Abmelden',
  common: {
    saving: 'Speichern...',
    checking: 'Überprüfen...'
  },
  setUserName: {
    title: 'Hallo, wie soll ich Sie nennen?',
    label: 'Ihr Name:',
    placeholder: 'Geben Sie Ihren Namen ein',
    button: 'Speichern',
    setting: 'Speichern...',
    success: 'Perfekt! Freut mich, Sie kennenzulernen!',
    error: 'Ups! Etwas ist schiefgelaufen. Bitte versuchen Sie es erneut.'
  },
  phone: {
    syncCodeSent: 'Wir haben Ihnen einen Sync-Code gesendet.',
    title: 'Lassen Sie uns Ihr Telefon verbinden',
    subtitle: 'Fito verwendet Ihre Nummer, um Ihre Erfahrung zu synchronisieren.',
    countryCodePlaceholder: '+49',
    numberPlaceholder: '1512 3456789',
    countryCodeError: 'Ländervorwahl muss wie +1, +44, +57 sein.',
    numberError: 'Die Nummer sollte 6–14 Ziffern enthalten.',
    save: 'Telefon speichern und Code generieren',
    cancelChange: 'Änderung abbrechen',
    changePhone: 'Telefon ändern',
    verifyTitle: 'Bitte senden Sie mir diesen Code per WhatsApp',
    verifyHelp: "Sie können die Schaltfläche 'In WhatsApp senden' unten verwenden oder direkt an +57 310 810 8201 senden",
    openWhatsapp: 'In WhatsApp senden',
    codeValidTime: 'Dieser Code ist 5 Minuten gültig.',
    veryfyConfirmHelp: 'Nachdem Sie den Code per WhatsApp gesendet haben, klicken Sie unten zur Bestätigung.',
    notVerifiedYet: 'Verifizierung noch nicht erkannt. Bitte versuchen Sie es erneut.',
    whatsappMessageTemplate: 'Hallo Fito, dies ist mein Sync-Code: {code}',
    alreadySynced: 'Ich habe bereits synchronisiert'
  },
  userInfo: {
    title: 'Benutzerinformationen',
    userId: 'Benutzer-ID',
    name: 'Name',
    userData: 'Benutzerdaten'
  },
  loading: 'Dashboard wird geladen...'
};
