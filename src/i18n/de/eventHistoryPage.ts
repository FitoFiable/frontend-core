import type { EventHistoryPageLangType } from '../types/eventHistoryPage';

export const eventHistoryPage: EventHistoryPageLangType = {
  title: 'Ereignisverlauf',
  subtitle: 'Zeigen Sie Ihre Kontenaktivität und Systemereignisse an',
  backToDashboard: 'Zurück zum Dashboard',
  pleaseLogIn: 'Bitte melden Sie sich an, um den Ereignisverlauf anzuzeigen.',
  goToLogin: 'Zur Anmeldung gehen',
  loadMore: 'Mehr Ereignisse laden',
  events: {
    emailSynchronized: 'E-Mail synchronisiert',
    phoneVerification: 'Telefonverifizierung',
    transactionDetected: 'Transaktion erkannt',
    emailAdded: 'E-Mail hinzugefügt',
    systemUpdate: 'System-Update',
    weeklyReport: 'Wöchentlicher Bericht',
    emailSyncFailed: 'E-Mail-Synchronisation fehlgeschlagen',
    profileUpdated: 'Profil aktualisiert',
    payment: 'Zahlung',
    withdrawal: 'Abhebung',
    transfer: 'Überweisung'
  },
  descriptions: {
    emailSyncSuccess: 'Erfolgreich synchronisiert mit {email}',
    phoneVerified: 'Telefonnummer {phone} erfolgreich verifiziert',
    paymentDetected: 'Zahlung von {amount} an {merchant}',
    emailAddedSuccess: '{email} zu erlaubten E-Mails hinzugefügt',
    dashboardUpdated: 'Dashboard auf Version {version} aktualisiert',
    weeklySummaryReady: 'Ihr wöchentlicher Finanzbericht ist bereit',
    emailSyncFailedDesc: 'Synchronisation mit {email} fehlgeschlagen - Wiederholung...',
    usernameChanged: 'Benutzername geändert zu "{username}"',
    transferDetected: 'Überweisung von {amount} an {recipient}'
  },
  statuses: {
    success: 'Erfolg',
    warning: 'Warnung',
    error: 'Fehler',
    info: 'Information'
  }
};
