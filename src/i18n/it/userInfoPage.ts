import type { UserInfoPageLangType } from '../types/userInfoPage';

export const userInfoPage: UserInfoPageLangType = {
  header: {
    title: 'Informazioni Utente',
    subtitle: 'Visualizza e gestisci i dettagli del tuo account',
    backToDashboard: 'Torna alla Dashboard'
  },
  basicInfo: {
    title: 'Informazioni di Base',
    userId: 'ID Utente',
    username: 'Nome Utente',
    phoneNumber: 'Numero di Telefono',
    verified: 'Verificato',
    notSet: 'Non impostato'
  },
  emailStatus: {
    title: 'Stato E-mail',
    allowedEmails: 'E-mail Autorizzate',
    confirmedEmails: 'E-mail Confermate',
    emailList: 'Lista E-mail',
    configured: 'configurate',
    active: 'attive',
    status: {
      active: 'Attiva',
      pending: 'In attesa'
    }
  },
  rawData: {
    title: 'Dati Utente Grezzi',
    viewData: 'Visualizza Dati Grezzi'
  }
};
