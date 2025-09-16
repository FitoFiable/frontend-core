import type { LoggedDashboardPageLangType } from '../types/loggedDashboardPage';

export const loggedDashboardPage: LoggedDashboardPageLangType = {
  welcome: 'Bentornato, {userName}!',
  dashboardOverview: 'Ecco la panoramica della tua dashboard',
  userInformation: 'Informazioni Utente',
  emailManagement: 'Gestione Email',
  yourTransactions: 'Le Tue Transazioni',
  eventHistory: 'Cronologia Eventi',
  meetFito: {
    title: 'Incontra Fito - Il Tuo Assistente IA per le Finanze Personali',
    description: 'Fito è un bot WhatsApp che rende incredibilmente facile tracciare le tue spese quotidiane. Invia semplicemente screenshot, immagini, messaggi audio o messaggi di testo delle cose che paghi, e Fito categorizzerà e traccerà automaticamente le tue transazioni. Puoi anche ricevere transazioni via email per una gestione finanziaria senza soluzione di continuità.',
    receiptPhotos: 'Foto Ricevute',
    screenshotReceipts: 'Screenshot Ricevute',
    textMessages: 'Messaggi di Testo',
    audioMessages: 'Messaggi Audio',
    emailReceipts: 'Ricevute Email',
    pdfDocuments: 'Documenti PDF',
    comingSoon: 'Prossimamente',
    goToWhatsapp: 'Vai a WhatsApp',
    goToEmail: 'Vai a Email',
    emailSetupRequired: 'Configurazione Email Richiesta',
    emailSetupDescription: 'Per utilizzare le ricevute email, configura prima la tua email nella',
    emailManagementPage: 'pagina di Gestione Email'
  },
  developmentInProgress: {
    title: 'Sviluppo in Corso',
    description: 'I dati qui sotto sono dati fittizi che mostrano quello che avrai in futuro. Stiamo ancora costruendo le funzionalità principali! Attualmente disponibile:',
    transactionManagement: 'Gestione Transazioni',
    eventHistory: 'Cronologia Eventi'
  },
  financialOverview: {
    monthlyExpenses: 'Spese Mensili',
    transactionsTracked: 'Transazioni Tracciate',
    spendingCategories: 'Categorie di Spesa',
    savingsRate: 'Tasso di Risparmio',
    thisMonthViaFito: 'Questo mese via Fito',
    autoCategorized: 'Auto-categorizzato',
    fromLastMonth: 'dal mese scorso',
    thisMonth: 'questo mese'
  },
  charts: {
    monthlyExpensesTrend: 'Tendenza Spese Mensili',
    spendingByCategory: 'Spese per Categoria',
    weeklySpendingPattern: 'Modello di Spesa Settimanale',
    incomeVsExpenses: 'Entrate vs Spese'
  }
};
