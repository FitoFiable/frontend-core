import type { LoggedDashboardPageLangType } from '../types/loggedDashboardPage';

export const loggedDashboardPage: LoggedDashboardPageLangType = {
  welcome: 'Bem-vindo de volta, {userName}!',
  dashboardOverview: 'Aqui está o resumo do seu painel',
  userInformation: 'Informações do Usuário',
  emailManagement: 'Gerenciamento de Email',
  yourTransactions: 'Suas Transações',
  eventHistory: 'Histórico de Eventos',
  developmentInProgress: {
    title: 'Desenvolvimento em Andamento',
    description: 'Os dados abaixo são dados fictícios mostrando o que você terá no futuro. Ainda estamos construindo as funcionalidades principais! Atualmente disponível:',
    transactionManagement: 'Gerenciamento de Transações',
    eventHistory: 'Histórico de Eventos'
  },
  financialOverview: {
    monthlyExpenses: 'Despesas Mensais',
    transactionsTracked: 'Transações Rastreadas',
    spendingCategories: 'Categorias de Gasto',
    savingsRate: 'Taxa de Poupança',
    thisMonthViaFito: 'Este mês via Fito',
    autoCategorized: 'Auto-categorizado',
    fromLastMonth: 'do mês passado',
    thisMonth: 'este mês'
  },
  charts: {
    monthlyExpensesTrend: 'Tendência de Despesas Mensais',
    spendingByCategory: 'Gastos por Categoria',
    weeklySpendingPattern: 'Padrão de Gastos Semanais',
    incomeVsExpenses: 'Receitas vs Despesas'
  }
};
