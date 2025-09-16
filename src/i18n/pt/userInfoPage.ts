import type { UserInfoPageLangType } from '../types/userInfoPage';

export const userInfoPage: UserInfoPageLangType = {
  header: {
    title: 'Informações do Usuário',
    subtitle: 'Visualizar e gerenciar os detalhes da sua conta',
    backToDashboard: 'Voltar ao Dashboard'
  },
  basicInfo: {
    title: 'Informações Básicas',
    userId: 'ID do Usuário',
    username: 'Nome de Usuário',
    phoneNumber: 'Número de Telefone',
    verified: 'Verificado',
    notSet: 'Não definido'
  },
  emailStatus: {
    title: 'Status dos E-mails',
    allowedEmails: 'E-mails Permitidos',
    confirmedEmails: 'E-mails Confirmados',
    emailList: 'Lista de E-mails',
    configured: 'configurados',
    active: 'ativos',
    status: {
      active: 'Ativo',
      pending: 'Pendente'
    }
  },
  rawData: {
    title: 'Dados do Usuário em Bruto',
    viewData: 'Ver Dados em Bruto'
  }
};
