import type { LoggedDashboardPageLangType } from '../types/loggedDashboardPage';

export const loggedDashboardPage: LoggedDashboardPageLangType = {
  welcome: 'Welcome back, {userName}!',
  dashboardOverview: "Here's your dashboard overview",
  userInformation: 'User Information',
  emailManagement: 'Email Management',
  yourTransactions: 'Your Transactions',
  eventHistory: 'Event History',
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
