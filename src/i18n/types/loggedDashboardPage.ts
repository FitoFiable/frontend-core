export type LoggedDashboardPageLangType = {
  welcome: string;
  dashboardOverview: string;
  userInformation: string;
  emailManagement: string;
  yourTransactions: string;
  eventHistory: string;
  developmentInProgress: {
    title: string;
    description: string;
    transactionManagement: string;
    eventHistory: string;
  };
  financialOverview: {
    monthlyExpenses: string;
    transactionsTracked: string;
    spendingCategories: string;
    savingsRate: string;
    thisMonthViaFito: string;
    autoCategorized: string;
    fromLastMonth: string;
    thisMonth: string;
  };
  charts: {
    monthlyExpensesTrend: string;
    spendingByCategory: string;
    weeklySpendingPattern: string;
    incomeVsExpenses: string;
  };
};
