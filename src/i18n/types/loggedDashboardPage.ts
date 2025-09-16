export type LoggedDashboardPageLangType = {
  welcome: string;
  dashboardOverview: string;
  userInformation: string;
  emailManagement: string;
  yourTransactions: string;
  eventHistory: string;
  meetFito: {
    title: string;
    description: string;
    receiptPhotos: string;
    screenshotReceipts: string;
    textMessages: string;
    audioMessages: string;
    emailReceipts: string;
    pdfDocuments: string;
    comingSoon: string;
    goToWhatsapp: string;
    goToEmail: string;
    emailSetupRequired: string;
    emailSetupDescription: string;
    emailManagementPage: string;
  };
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
