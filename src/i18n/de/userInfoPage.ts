import type { UserInfoPageLangType } from '../types/userInfoPage';

export const userInfoPage: UserInfoPageLangType = {
  header: {
    title: 'Benutzerinformationen',
    subtitle: 'Anzeigen und verwalten Sie Ihre Kontodetails',
    backToDashboard: 'Zurück zum Dashboard'
  },
  basicInfo: {
    title: 'Grundinformationen',
    userId: 'Benutzer-ID',
    username: 'Benutzername',
    phoneNumber: 'Telefonnummer',
    verified: 'Verifiziert',
    notSet: 'Nicht festgelegt'
  },
  emailStatus: {
    title: 'E-Mail-Status',
    allowedEmails: 'Erlaubte E-Mails',
    confirmedEmails: 'Bestätigte E-Mails',
    emailList: 'E-Mail-Liste',
    configured: 'konfiguriert',
    active: 'aktiv',
    status: {
      active: 'Aktiv',
      pending: 'Ausstehend'
    }
  },
  rawData: {
    title: 'Rohdaten des Benutzers',
    viewData: 'Rohdaten anzeigen'
  }
};
