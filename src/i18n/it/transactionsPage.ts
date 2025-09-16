import type { TransactionsPageLangType } from '../types/transactionsPage';

export const transactionsPage: TransactionsPageLangType = {
  title: 'Le Tue Transazioni',
  subtitle: 'Visualizza e gestisci le tue transazioni finanziarie',
  backToDashboard: 'Torna alla Dashboard',
  back: 'Indietro',
  pleaseLogIn: 'Effettua l\'accesso per visualizzare le tue transazioni.',
  goToLogin: 'Vai al Login',
  summary: {
    totalExpenses: 'Spese Totali',
    totalIncome: 'Entrate Totali',
    netBalance: 'Saldo Netto'
  },
  transaction: {
    viewDetails: 'Visualizza Dettagli',
    details: 'Dettagli',
    transactionDetails: 'Dettagli Transazione',
    type: 'Tipo',
    amount: 'Importo',
    description: 'Descrizione',
    category: 'Categoria',
    date: 'Data',
    time: 'Ora',
    location: 'Posizione',
    locationOptional: 'Posizione (Opzionale)',
    paymentMethod: 'Metodo di Pagamento',
    status: 'Stato',
    enterAmount: 'Inserisci l\'importo',
    enterDescription: 'Inserisci la descrizione',
    enterLocation: 'Inserisci la posizione',
    cancel: 'Annulla',
    saveChanges: 'Salva Modifiche'
  },
  types: {
    expense: 'Spesa',
    income: 'Entrata',
    transfer: 'Trasferimento'
  },
  methods: {
    card: 'Carta',
    cash: 'Contanti',
    transfer: 'Trasferimento',
    whatsapp: 'WhatsApp'
  },
  statuses: {
    completed: 'Completato',
    pending: 'In Attesa',
    failed: 'Fallito'
  },
  categories: {
    foodDining: 'Cibo e Ristoranti',
    transportation: 'Trasporti',
    shopping: 'Shopping',
    healthcare: 'Sanità',
    entertainment: 'Intrattenimento',
    billsUtilities: 'Bollette e Servizi',
    salary: 'Stipendio',
    transfer: 'Trasferimento'
  },
  loadMore: 'Carica Altre Transazioni'
};
