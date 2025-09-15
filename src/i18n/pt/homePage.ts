import type { HomePageLangType } from '../types/homePage';

export const homePage: HomePageLangType = {
  loginText: 'Entrar',
  logoutText: 'Sair',
  common: {
    saving: 'Salvando...',
    checking: 'Verificando...'
  },
  setUserName: {
    title: 'Oi, como você gostaria que eu te chamasse?',
    label: 'Seu nome:',
    placeholder: 'Digite seu nome',
    button: 'Salvar',
    setting: 'Salvando...',
    success: 'Perfeito! Prazer em conhecê-lo!',
    error: 'Ops! Algo deu errado. Tente novamente.'
  },
  phone: {
    syncCodeSent: 'Enviamos um código de sincronização para você.',
    title: 'Vamos conectar seu telefone',
    subtitle: 'O Fito usará seu número para manter sua experiência sincronizada.',
    countryCodePlaceholder: '+55',
    numberPlaceholder: '11 91234 5678',
    countryCodeError: 'O código do país deve ser como +1, +44, +57.',
    numberError: 'O número deve conter de 6 a 14 dígitos.',
    save: 'Salvar telefone e gerar código',
    cancelChange: 'Cancelar alteração',
    changePhone: 'Alterar telefone',
    verifyTitle: 'Por favor, me envie este código pelo WhatsApp',
    verifyHelp: "Você pode usar o botão 'Enviar no WhatsApp' abaixo ou enviar diretamente para +57 310 810 8201",
    openWhatsapp: 'Enviar no WhatsApp',
    codeValidTime: 'Este código é válido por 5 minutos.',
    veryfyConfirmHelp: 'Após enviar o código pelo WhatsApp, clique no botão abaixo para confirmar.',
    notVerifiedYet: 'Ainda não detectamos a verificação. Por favor, tente novamente.',
    whatsappMessageTemplate: 'Oi Fito, este é o meu código de sincronização: {code}',
    alreadySynced: 'Já sincronizei'
  },
  userInfo: {
    title: 'Informações do Usuário',
    userId: 'ID do Usuário',
    name: 'Nome',
    userData: 'Dados do Usuário'
  },
  loading: 'Carregando painel...'
};
