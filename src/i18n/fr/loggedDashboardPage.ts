import type { LoggedDashboardPageLangType } from '../types/loggedDashboardPage';

export const loggedDashboardPage: LoggedDashboardPageLangType = {
  welcome: 'Bon retour, {userName} !',
  dashboardOverview: 'Voici un aperçu de votre tableau de bord',
  userInformation: 'Informations Utilisateur',
  emailManagement: 'Gestion Email',
  yourTransactions: 'Vos Transactions',
  eventHistory: 'Historique des Événements',
  meetFito: {
    title: 'Rencontrez Fito - Votre Assistant IA de Finances Personnelles',
    description: 'Fito est un bot WhatsApp qui rend le suivi de vos dépenses quotidiennes incroyablement facile. Envoyez simplement des captures d\'écran, des images, des messages audio ou des messages texte des choses que vous payez, et Fito catégorisera et suivra automatiquement vos transactions. Vous pouvez également recevoir des transactions par email pour une gestion financière transparente.',
    receiptPhotos: 'Photos de Reçus',
    screenshotReceipts: 'Captures de Reçus',
    textMessages: 'Messages Texte',
    audioMessages: 'Messages Audio',
    emailReceipts: 'Reçus par Email',
    pdfDocuments: 'Documents PDF',
    comingSoon: 'Bientôt',
    goToWhatsapp: 'Aller à WhatsApp',
    goToEmail: 'Aller à Email',
    emailSetupRequired: 'Configuration Email Requise',
    emailSetupDescription: 'Pour utiliser les reçus par email, configurez d\'abord votre email dans la',
    emailManagementPage: 'page de Gestion Email'
  },
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
