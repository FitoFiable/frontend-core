import type { TransactionsPageLangType } from '../types/transactionsPage';

export const transactionsPage: TransactionsPageLangType = {
  title: 'Your Transactions',
  subtitle: 'View and manage your financial transactions',
  backToDashboard: 'Back to Dashboard',
  back: 'Back',
  pleaseLogIn: 'Please log in to view your transactions.',
  goToLogin: 'Go to Login',
  summary: {
    totalExpenses: 'Total Expenses',
    totalIncome: 'Total Income',
    netBalance: 'Net Balance'
  },
  transaction: {
    viewDetails: 'View Details',
    details: 'Details',
    transactionDetails: 'Transaction Details',
    type: 'Type',
    amount: 'Amount',
    description: 'Description',
    category: 'Category',
    date: 'Date',
    time: 'Time',
    location: 'Location',
    locationOptional: 'Location (Optional)',
    paymentMethod: 'Payment Method',
    status: 'Status',
    enterAmount: 'Enter amount',
    enterDescription: 'Enter description',
    enterLocation: 'Enter location',
    cancel: 'Cancel',
    saveChanges: 'Save Changes'
  },
  types: {
    expense: 'Expense',
    income: 'Income',
    transfer: 'Transfer'
  },
  methods: {
    card: 'Card',
    cash: 'Cash',
    transfer: 'Transfer',
    whatsapp: 'WhatsApp'
  },
  statuses: {
    completed: 'Completed',
    pending: 'Pending',
    failed: 'Failed'
  },
  categories: {
    foodDining: 'Food & Dining',
    transportation: 'Transportation',
    shopping: 'Shopping',
    healthcare: 'Healthcare',
    entertainment: 'Entertainment',
    billsUtilities: 'Bills & Utilities',
    salary: 'Salary',
    transfer: 'Transfer'
  },
  loadMore: 'Load More Transactions'
};
