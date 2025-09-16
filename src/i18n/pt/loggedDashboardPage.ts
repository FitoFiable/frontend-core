import type { LoggedDashboardPageLangType } from '../types/loggedDashboardPage';

export const loggedDashboardPage: LoggedDashboardPageLangType = {
  welcome: 'Bem-vindo de volta, {userName}!',
  dashboardOverview: 'Aqui está o resumo do seu painel',
  userInformation: 'Informações do Usuário',
  emailManagement: 'Gerenciamento de Email',
  yourTransactions: 'Suas Transações',
  eventHistory: 'Histórico de Eventos',
  meetFito: {
    title: 'Conheça o Fito - Seu Assistente de IA para Finanças Pessoais',
    description: 'Fito é um bot do WhatsApp que torna o rastreamento de suas despesas diárias incrivelmente fácil. Simplesmente envie capturas de tela, imagens, mensagens de áudio ou mensagens de texto das coisas que você paga, e o Fito categorizará e rastreará automaticamente suas transações. Você também pode receber transações por email para gerenciamento financeiro perfeito.',
    receiptPhotos: 'Fotos de Recibos',
    screenshotReceipts: 'Capturas de Recibos',
    textMessages: 'Mensagens de Texto',
    audioMessages: 'Mensagens de Áudio',
    emailReceipts: 'Recibos por Email',
    pdfDocuments: 'Documentos PDF',
    comingSoon: 'Em Breve',
    goToWhatsapp: 'Ir para WhatsApp',
    goToEmail: 'Ir para Email',
    emailSetupRequired: 'Configuração de Email Necessária',
    emailSetupDescription: 'Para usar recibos por email, primeiro configure seu email na',
    emailManagementPage: 'página de Gerenciamento de Email'
  },
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
