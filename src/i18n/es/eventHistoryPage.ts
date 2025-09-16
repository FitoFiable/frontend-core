import type { EventHistoryPageLangType } from '../types/eventHistoryPage';

export const eventHistoryPage: EventHistoryPageLangType = {
  title: 'Historial de Eventos',
  subtitle: 'Ve la actividad de tu cuenta y eventos del sistema',
  backToDashboard: 'Volver al Panel',
  pleaseLogIn: 'Por favor inicia sesión para ver el historial de eventos.',
  goToLogin: 'Ir al Login',
  loadMore: 'Cargar Más Eventos',
  events: {
    emailSynchronized: 'Email Sincronizado',
    phoneVerification: 'Verificación de Teléfono',
    transactionDetected: 'Transacción Detectada',
    emailAdded: 'Email Agregado',
    systemUpdate: 'Actualización del Sistema',
    weeklyReport: 'Reporte Semanal',
    emailSyncFailed: 'Falló la Sincronización de Email',
    profileUpdated: 'Perfil Actualizado',
    payment: 'Pago',
    withdrawal: 'Retiro',
    transfer: 'Transferencia'
  },
  descriptions: {
    emailSyncSuccess: 'Sincronizado exitosamente con {email}',
    phoneVerified: 'Número de teléfono {phone} verificado exitosamente',
    paymentDetected: 'Pago de {amount} a {merchant}',
    emailAddedSuccess: 'Agregado {email} a emails permitidos',
    dashboardUpdated: 'Panel actualizado a la versión {version}',
    weeklySummaryReady: 'Tu resumen financiero semanal está listo',
    emailSyncFailedDesc: 'Falló la sincronización con {email} - reintentando...',
    usernameChanged: 'Nombre de usuario cambiado a "{username}"',
    transferDetected: 'Transferencia de {amount} a {recipient}'
  },
  statuses: {
    success: 'Éxito',
    warning: 'Advertencia',
    error: 'Error',
    info: 'Información'
  }
};
