import type { TransactionsPageLangType } from '../types/transactionsPage';

export const transactionsPage: TransactionsPageLangType = {
  title: 'Vos Transactions',
  subtitle: 'Voir et gérer vos transactions financières',
  backToDashboard: 'Retour au Tableau de Bord',
  back: 'Retour',
  pleaseLogIn: 'Veuillez vous connecter pour voir vos transactions.',
  goToLogin: 'Aller à la Connexion',
  summary: {
    totalExpenses: 'Dépenses Totales',
    totalIncome: 'Revenus Totaux',
    netBalance: 'Solde Net'
  },
  transaction: {
    viewDetails: 'Voir Détails',
    details: 'Détails',
    transactionDetails: 'Détails de la Transaction',
    type: 'Type',
    amount: 'Montant',
    description: 'Description',
    category: 'Catégorie',
    date: 'Date',
    time: 'Heure',
    location: 'Lieu',
    locationOptional: 'Lieu (Optionnel)',
    paymentMethod: 'Méthode de Paiement',
    status: 'Statut',
    enterAmount: 'Entrez le montant',
    enterDescription: 'Entrez la description',
    enterLocation: 'Entrez le lieu',
    cancel: 'Annuler',
    saveChanges: 'Sauvegarder les Modifications'
  },
  types: {
    expense: 'Dépense',
    income: 'Revenu',
    transfer: 'Transfert'
  },
  methods: {
    card: 'Carte',
    cash: 'Espèces',
    transfer: 'Transfert',
    whatsapp: 'WhatsApp'
  },
  statuses: {
    completed: 'Terminé',
    pending: 'En Attente',
    failed: 'Échoué'
  },
  categories: {
    foodDining: 'Nourriture et Restaurants',
    transportation: 'Transport',
    shopping: 'Achats',
    healthcare: 'Santé',
    entertainment: 'Divertissement',
    billsUtilities: 'Factures et Services',
    salary: 'Salaire',
    transfer: 'Transfert'
  },
  loadMore: 'Charger Plus de Transactions'
};
