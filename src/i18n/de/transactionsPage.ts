import type { TransactionsPageLangType } from '../types/transactionsPage';

export const transactionsPage: TransactionsPageLangType = {
  title: 'Ihre Transaktionen',
  subtitle: 'Anzeigen und verwalten Sie Ihre Finanztransaktionen',
  backToDashboard: 'Zurück zum Dashboard',
  back: 'Zurück',
  pleaseLogIn: 'Bitte melden Sie sich an, um Ihre Transaktionen anzuzeigen.',
  goToLogin: 'Zur Anmeldung gehen',
  summary: {
    totalExpenses: 'Gesamtausgaben',
    totalIncome: 'Gesamteinkommen',
    netBalance: 'Nettosaldo'
  },
  transaction: {
    viewDetails: 'Details anzeigen',
    details: 'Details',
    transactionDetails: 'Transaktionsdetails',
    type: 'Typ',
    amount: 'Betrag',
    description: 'Beschreibung',
    category: 'Kategorie',
    date: 'Datum',
    time: 'Zeit',
    location: 'Standort',
    locationOptional: 'Standort (Optional)',
    paymentMethod: 'Zahlungsmethode',
    status: 'Status',
    enterAmount: 'Betrag eingeben',
    enterDescription: 'Beschreibung eingeben',
    enterLocation: 'Standort eingeben',
    cancel: 'Abbrechen',
    saveChanges: 'Änderungen speichern'
  },
  types: {
    expense: 'Ausgabe',
    income: 'Einkommen',
    transfer: 'Überweisung'
  },
  methods: {
    card: 'Karte',
    cash: 'Bargeld',
    transfer: 'Überweisung',
    whatsapp: 'WhatsApp'
  },
  statuses: {
    completed: 'Abgeschlossen',
    pending: 'Ausstehend',
    failed: 'Fehlgeschlagen'
  },
  categories: {
    foodDining: 'Essen & Restaurants',
    transportation: 'Transport',
    shopping: 'Einkaufen',
    healthcare: 'Gesundheitswesen',
    entertainment: 'Unterhaltung',
    billsUtilities: 'Rechnungen & Versorgungsunternehmen',
    salary: 'Gehalt',
    transfer: 'Überweisung'
  },
  loadMore: 'Mehr Transaktionen laden'
};
