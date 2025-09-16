import type { LoggedDashboardPageLangType } from '../types/loggedDashboardPage';

export const loggedDashboardPage: LoggedDashboardPageLangType = {
  welcome: 'Willkommen zurück, {userName}!',
  dashboardOverview: 'Hier ist Ihre Dashboard-Übersicht',
  userInformation: 'Benutzerinformationen',
  emailManagement: 'E-Mail-Verwaltung',
  yourTransactions: 'Ihre Transaktionen',
  eventHistory: 'Ereignisverlauf',
  meetFito: {
    title: 'Lernen Sie Fito kennen - Ihr persönlicher KI-Finanzassistent',
    description: 'Fito ist ein WhatsApp-Bot, der die Verfolgung Ihrer täglichen Ausgaben unglaublich einfach macht. Senden Sie einfach Screenshots, Bilder, Sprachnachrichten oder Textnachrichten von Dingen, die Sie bezahlen, und Fito wird Ihre Transaktionen automatisch kategorisieren und verfolgen. Sie können auch Transaktionen per E-Mail für nahtloses Finanzmanagement erhalten.',
    receiptPhotos: 'Belegfotos',
    screenshotReceipts: 'Screenshot-Belege',
    textMessages: 'Textnachrichten',
    audioMessages: 'Sprachnachrichten',
    emailReceipts: 'E-Mail-Belege',
    pdfDocuments: 'PDF-Dokumente',
    comingSoon: 'Demnächst',
    goToWhatsapp: 'Zu WhatsApp gehen',
    goToEmail: 'Zu E-Mail gehen',
    emailSetupRequired: 'E-Mail-Einrichtung erforderlich',
    emailSetupDescription: 'Um E-Mail-Belege zu verwenden, konfigurieren Sie zuerst Ihre E-Mail in der',
    emailManagementPage: 'E-Mail-Verwaltungsseite'
  },
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
