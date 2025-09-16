import type { LoggedDashboardPageLangType } from '../types/loggedDashboardPage';

export const loggedDashboardPage: LoggedDashboardPageLangType = {
  welcome: '¡Bienvenido de vuelta, {userName}!',
  dashboardOverview: 'Aquí tienes un resumen de tu panel de control',
  userInformation: 'Información del Usuario',
  emailManagement: 'Gestión de Correo',
  yourTransactions: 'Tus Transacciones',
  eventHistory: 'Historial de Eventos',
  meetFito: {
    title: 'Conoce a Fito - Tu Asistente de Finanzas Personales IA',
    description: 'Fito es un bot de WhatsApp que hace que el seguimiento de tus gastos diarios sea increíblemente fácil. Simplemente envía capturas de pantalla, imágenes, mensajes de audio o mensajes de texto de las cosas que pagas, y Fito categorizará y rastreará automáticamente tus transacciones. También puedes recibir transacciones por correo electrónico para una gestión financiera perfecta.',
    receiptPhotos: 'Fotos de Recibos',
    screenshotReceipts: 'Capturas de Recibos',
    textMessages: 'Mensajes de Texto',
    audioMessages: 'Mensajes de Audio',
    emailReceipts: 'Recibos por Email',
    pdfDocuments: 'Documentos PDF',
    comingSoon: 'Próximamente',
    goToWhatsapp: 'Ir a WhatsApp',
    goToEmail: 'Ir a Email',
    emailSetupRequired: 'Configuración de Email Requerida',
    emailSetupDescription: 'Para usar recibos por email, primero configura tu email en la',
    emailManagementPage: 'página de Gestión de Correo'
  },
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
