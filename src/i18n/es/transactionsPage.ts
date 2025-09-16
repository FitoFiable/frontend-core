import type { TransactionsPageLangType } from '../types/transactionsPage';

export const transactionsPage: TransactionsPageLangType = {
  title: 'Tus Transacciones',
  subtitle: 'Ve y gestiona tus transacciones financieras',
  backToDashboard: 'Volver al Panel',
  back: 'Volver',
  pleaseLogIn: 'Por favor inicia sesión para ver tus transacciones.',
  goToLogin: 'Ir al Login',
  summary: {
    totalExpenses: 'Gastos Totales',
    totalIncome: 'Ingresos Totales',
    netBalance: 'Balance Neto'
  },
  transaction: {
    viewDetails: 'Ver Detalles',
    details: 'Detalles',
    transactionDetails: 'Detalles de la Transacción',
    type: 'Tipo',
    amount: 'Cantidad',
    description: 'Descripción',
    category: 'Categoría',
    date: 'Fecha',
    time: 'Hora',
    location: 'Ubicación',
    locationOptional: 'Ubicación (Opcional)',
    paymentMethod: 'Método de Pago',
    status: 'Estado',
    enterAmount: 'Ingresa la cantidad',
    enterDescription: 'Ingresa la descripción',
    enterLocation: 'Ingresa la ubicación',
    cancel: 'Cancelar',
    saveChanges: 'Guardar Cambios'
  },
  types: {
    expense: 'Gasto',
    income: 'Ingreso',
    transfer: 'Transferencia'
  },
  methods: {
    card: 'Tarjeta',
    cash: 'Efectivo',
    transfer: 'Transferencia',
    whatsapp: 'WhatsApp'
  },
  statuses: {
    completed: 'Completado',
    pending: 'Pendiente',
    failed: 'Fallido'
  },
  categories: {
    foodDining: 'Comida y Restaurantes',
    transportation: 'Transporte',
    shopping: 'Compras',
    healthcare: 'Salud',
    entertainment: 'Entretenimiento',
    billsUtilities: 'Facturas y Servicios',
    salary: 'Salario',
    transfer: 'Transferencia'
  },
  loadMore: 'Cargar Más Transacciones'
};
