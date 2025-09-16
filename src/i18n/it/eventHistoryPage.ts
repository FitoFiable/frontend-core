import type { EventHistoryPageLangType } from '../types/eventHistoryPage';

export const eventHistoryPage: EventHistoryPageLangType = {
  title: 'Cronologia Eventi',
  subtitle: 'Visualizza l\'attività del tuo account e gli eventi di sistema',
  backToDashboard: 'Torna alla Dashboard',
  pleaseLogIn: 'Effettua l\'accesso per visualizzare la cronologia eventi.',
  goToLogin: 'Vai al Login',
  loadMore: 'Carica Altri Eventi',
  events: {
    emailSynchronized: 'Email Sincronizzata',
    phoneVerification: 'Verifica Telefono',
    transactionDetected: 'Transazione Rilevata',
    emailAdded: 'Email Aggiunta',
    systemUpdate: 'Aggiornamento Sistema',
    weeklyReport: 'Report Settimanale',
    emailSyncFailed: 'Sincronizzazione Email Fallita',
    profileUpdated: 'Profilo Aggiornato',
    payment: 'Pagamento',
    withdrawal: 'Prelievo',
    transfer: 'Trasferimento'
  },
  descriptions: {
    emailSyncSuccess: 'Sincronizzato con successo con {email}',
    phoneVerified: 'Numero di telefono {phone} verificato con successo',
    paymentDetected: 'Pagamento di {amount} a {merchant}',
    emailAddedSuccess: 'Aggiunto {email} alle email consentite',
    dashboardUpdated: 'Dashboard aggiornata alla versione {version}',
    weeklySummaryReady: 'Il tuo riepilogo finanziario settimanale è pronto',
    emailSyncFailedDesc: 'Sincronizzazione con {email} fallita - riprovo...',
    usernameChanged: 'Nome utente cambiato in "{username}"',
    transferDetected: 'Trasferimento di {amount} a {recipient}'
  },
  statuses: {
    success: 'Successo',
    warning: 'Avviso',
    error: 'Errore',
    info: 'Informazione'
  }
};
