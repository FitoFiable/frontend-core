import type { UserInfoPageLangType } from '../types/userInfoPage';

export const userInfoPage: UserInfoPageLangType = {
  header: {
    title: 'Información del Usuario',
    subtitle: 'Ver y gestionar los detalles de tu cuenta',
    backToDashboard: 'Volver al Dashboard'
  },
  basicInfo: {
    title: 'Información Básica',
    userId: 'ID de Usuario',
    username: 'Nombre de Usuario',
    phoneNumber: 'Número de Teléfono',
    verified: 'Verificado',
    notSet: 'No establecido'
  },
  emailStatus: {
    title: 'Estado de Correos',
    allowedEmails: 'Correos Permitidos',
    confirmedEmails: 'Correos Confirmados',
    emailList: 'Lista de Correos',
    configured: 'configurados',
    active: 'activos',
    status: {
      active: 'Activo',
      pending: 'Pendiente'
    }
  },
  rawData: {
    title: 'Datos de Usuario en Bruto',
    viewData: 'Ver Datos en Bruto'
  }
};
