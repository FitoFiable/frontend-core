export type TransactionsPageLangType = {
  title: string;
  subtitle: string;
  backToDashboard: string;
  back: string;
  pleaseLogIn: string;
  goToLogin: string;
  summary: {
    totalExpenses: string;
    totalIncome: string;
    netBalance: string;
  };
  transaction: {
    viewDetails: string;
    details: string;
    transactionDetails: string;
    type: string;
    amount: string;
    description: string;
    category: string;
    date: string;
    time: string;
    location: string;
    locationOptional: string;
    paymentMethod: string;
    status: string;
    enterAmount: string;
    enterDescription: string;
    enterLocation: string;
    cancel: string;
    saveChanges: string;
  };
  types: {
    expense: string;
    income: string;
    transfer: string;
  };
  methods: {
    card: string;
    cash: string;
    transfer: string;
    whatsapp: string;
  };
  statuses: {
    completed: string;
    pending: string;
    failed: string;
  };
  categories: {
    foodDining: string;
    transportation: string;
    shopping: string;
    healthcare: string;
    entertainment: string;
    billsUtilities: string;
    salary: string;
    transfer: string;
  };
  loadMore: string;
};
