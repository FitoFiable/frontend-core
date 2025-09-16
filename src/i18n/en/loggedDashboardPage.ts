import type { LoggedDashboardPageLangType } from '../types/loggedDashboardPage';

export const loggedDashboardPage: LoggedDashboardPageLangType = {
  welcome: 'Welcome back, {userName}!',
  dashboardOverview: "Here's your dashboard overview",
  userInformation: 'User Information',
  emailManagement: 'Email Management',
  yourTransactions: 'Your Transactions',
  eventHistory: 'Event History',
  meetFito: {
    title: 'Meet Fito - Your Personal Finance AI Assistant',
    description: 'Fito is a WhatsApp bot that makes tracking your daily expenses incredibly easy. Simply send screenshots, images, audio messages, or text messages of things you pay for, and Fito will automatically categorize and track your transactions. You can also receive transactions via email for seamless financial management.',
    receiptPhotos: 'Receipt Photos',
    screenshotReceipts: 'Screenshot Receipts',
    textMessages: 'Text Messages',
    audioMessages: 'Audio Messages',
    emailReceipts: 'Email Receipts',
    pdfDocuments: 'PDF Documents',
    comingSoon: 'Coming Soon',
    goToWhatsapp: 'Go to WhatsApp',
    goToEmail: 'Go to Email',
    emailSetupRequired: 'Email Setup Required',
    emailSetupDescription: 'To use email receipts, first configure your email in the',
    emailManagementPage: 'Email Management page'
  },
  developmentInProgress: {
    title: 'Development in Progress',
    description: 'The data below is dummy data showing what you\'ll have in the future. We\'re still building the core features! Currently available:',
    transactionManagement: 'Transaction Management',
    eventHistory: 'Event History'
  },
  financialOverview: {
    monthlyExpenses: 'Monthly Expenses',
    transactionsTracked: 'Transactions Tracked',
    spendingCategories: 'Spending Categories',
    savingsRate: 'Savings Rate',
    thisMonthViaFito: 'This month via Fito',
    autoCategorized: 'Auto-categorized',
    fromLastMonth: 'from last month',
    thisMonth: 'this month'
  },
  charts: {
    monthlyExpensesTrend: 'Monthly Expenses Trend',
    spendingByCategory: 'Spending by Category',
    weeklySpendingPattern: 'Weekly Spending Pattern',
    incomeVsExpenses: 'Income vs Expenses'
  }
};
