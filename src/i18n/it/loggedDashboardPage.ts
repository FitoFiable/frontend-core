import type { LoggedDashboardPageLangType } from '../types/loggedDashboardPage';

export const loggedDashboardPage: LoggedDashboardPageLangType = {
  welcome: 'Bentornato, {userName}!',
  dashboardOverview: 'Ecco la panoramica della tua dashboard',
  userInformation: 'Informazioni Utente',
  emailManagement: 'Gestione Email',
  yourTransactions: 'Le Tue Transazioni',
  eventHistory: 'Cronologia Eventi',
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
