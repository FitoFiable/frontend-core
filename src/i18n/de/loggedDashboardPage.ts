import type { LoggedDashboardPageLangType } from '../types/loggedDashboardPage';

export const loggedDashboardPage: LoggedDashboardPageLangType = {
  welcome: 'Willkommen zurück, {userName}!',
  dashboardOverview: 'Hier ist Ihre Dashboard-Übersicht',
  userInformation: 'Benutzerinformationen',
  emailManagement: 'E-Mail-Verwaltung',
  yourTransactions: 'Ihre Transaktionen',
  eventHistory: 'Ereignisverlauf',
  developmentInProgress: {
    title: 'Entwicklung im Gange',
    description: 'Die unten stehenden Daten sind Dummy-Daten, die zeigen, was Sie in Zukunft haben werden. Wir bauen noch die Kernfunktionen! Derzeit verfügbar:',
    transactionManagement: 'Transaktionsverwaltung',
    eventHistory: 'Ereignisverlauf'
  },
  financialOverview: {
    monthlyExpenses: 'Monatliche Ausgaben',
    transactionsTracked: 'Verfolgte Transaktionen',
    spendingCategories: 'Ausgabenkategorien',
    savingsRate: 'Sparrate',
    thisMonthViaFito: 'Diesen Monat über Fito',
    autoCategorized: 'Auto-kategorisiert',
    fromLastMonth: 'vom letzten Monat',
    thisMonth: 'diesen Monat'
  },
  charts: {
    monthlyExpensesTrend: 'Monatlicher Ausgabentrend',
    spendingByCategory: 'Ausgaben nach Kategorie',
    weeklySpendingPattern: 'Wöchentliches Ausgabenmuster',
    incomeVsExpenses: 'Einkommen vs Ausgaben'
  }
};
