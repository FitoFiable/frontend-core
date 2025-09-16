import type { LoggedDashboardPageLangType } from '../types/loggedDashboardPage';

export const loggedDashboardPage: LoggedDashboardPageLangType = {
  welcome: 'Bon retour, {userName} !',
  dashboardOverview: 'Voici un aperçu de votre tableau de bord',
  userInformation: 'Informations Utilisateur',
  emailManagement: 'Gestion Email',
  yourTransactions: 'Vos Transactions',
  eventHistory: 'Historique des Événements',
  developmentInProgress: {
    title: 'Développement en Cours',
    description: 'Les données ci-dessous sont des données fictives montrant ce que vous aurez à l\'avenir. Nous construisons encore les fonctionnalités principales ! Actuellement disponible :',
    transactionManagement: 'Gestion des Transactions',
    eventHistory: 'Historique des Événements'
  },
  financialOverview: {
    monthlyExpenses: 'Dépenses Mensuelles',
    transactionsTracked: 'Transactions Suivies',
    spendingCategories: 'Catégories de Dépenses',
    savingsRate: 'Taux d\'Épargne',
    thisMonthViaFito: 'Ce mois via Fito',
    autoCategorized: 'Auto-catégorisé',
    fromLastMonth: 'du mois dernier',
    thisMonth: 'ce mois'
  },
  charts: {
    monthlyExpensesTrend: 'Tendance des Dépenses Mensuelles',
    spendingByCategory: 'Dépenses par Catégorie',
    weeklySpendingPattern: 'Modèle de Dépenses Hebdomadaires',
    incomeVsExpenses: 'Revenus vs Dépenses'
  }
};
