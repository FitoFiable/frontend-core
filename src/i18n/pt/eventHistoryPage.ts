import type { EventHistoryPageLangType } from '../types/eventHistoryPage';

export const eventHistoryPage: EventHistoryPageLangType = {
  title: 'Histórico de Eventos',
  subtitle: 'Visualize a atividade da sua conta e eventos do sistema',
  backToDashboard: 'Voltar ao Painel',
  pleaseLogIn: 'Por favor, faça login para visualizar o histórico de eventos.',
  goToLogin: 'Ir para Login',
  loadMore: 'Carregar Mais Eventos',
  events: {
    emailSynchronized: 'Email Sincronizado',
    phoneVerification: 'Verificação de Telefone',
    transactionDetected: 'Transação Detectada',
    emailAdded: 'Email Adicionado',
    systemUpdate: 'Atualização do Sistema',
    weeklyReport: 'Relatório Semanal',
    emailSyncFailed: 'Falha na Sincronização de Email',
    profileUpdated: 'Perfil Atualizado',
    payment: 'Pagamento',
    withdrawal: 'Saque',
    transfer: 'Transferência'
  },
  descriptions: {
    emailSyncSuccess: 'Sincronizado com sucesso com {email}',
    phoneVerified: 'Número de telefone {phone} verificado com sucesso',
    paymentDetected: 'Pagamento de {amount} para {merchant}',
    emailAddedSuccess: 'Adicionado {email} aos emails permitidos',
    dashboardUpdated: 'Painel atualizado para a versão {version}',
    weeklySummaryReady: 'Seu resumo financeiro semanal está pronto',
    emailSyncFailedDesc: 'Falha na sincronização com {email} - tentando novamente...',
    usernameChanged: 'Nome de usuário alterado para "{username}"',
    transferDetected: 'Transferência de {amount} para {recipient}'
  },
  statuses: {
    success: 'Sucesso',
    warning: 'Aviso',
    error: 'Erro',
    info: 'Informação'
  }
};
