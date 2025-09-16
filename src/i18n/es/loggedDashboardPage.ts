import type { LoggedDashboardPageLangType } from '../types/loggedDashboardPage';

export const loggedDashboardPage: LoggedDashboardPageLangType = {
  welcome: '¡Bienvenido de vuelta, {userName}!',
  dashboardOverview: 'Aquí tienes un resumen de tu panel de control',
  userInformation: 'Información del Usuario',
  emailManagement: 'Gestión de Correo',
  yourTransactions: 'Tus Transacciones',
  eventHistory: 'Historial de Eventos',
  developmentInProgress: {
    title: 'Desarrollo en Progreso',
    description: 'Los datos a continuación son datos ficticios que muestran lo que tendrás en el futuro. ¡Aún estamos construyendo las características principales! Actualmente disponible:',
    transactionManagement: 'Gestión de Transacciones',
    eventHistory: 'Historial de Eventos'
  },
  financialOverview: {
    monthlyExpenses: 'Gastos Mensuales',
    transactionsTracked: 'Transacciones Rastreadas',
    spendingCategories: 'Categorías de Gasto',
    savingsRate: 'Tasa de Ahorro',
    thisMonthViaFito: 'Este mes vía Fito',
    autoCategorized: 'Auto-categorizado',
    fromLastMonth: 'del mes pasado',
    thisMonth: 'este mes'
  },
  charts: {
    monthlyExpensesTrend: 'Tendencia de Gastos Mensuales',
    spendingByCategory: 'Gastos por Categoría',
    weeklySpendingPattern: 'Patrón de Gastos Semanales',
    incomeVsExpenses: 'Ingresos vs Gastos'
  }
};
