import type { HomePageLangType } from '../types/homePage';

export const homePage: HomePageLangType = {
  loginText: 'Entrar',
  logoutText: 'Sair',
  setUserName: {
    title: 'Oi, como você gostaria que eu te chamasse?',
    label: 'Seu nome:',
    placeholder: 'Digite seu nome',
    button: 'Salvar',
    setting: 'Salvando...',
    success: 'Perfeito! Prazer em conhecê-lo!',
    error: 'Ops! Algo deu errado. Tente novamente.'
  },
  userInfo: {
    title: 'Informações do Usuário',
    userId: 'ID do Usuário',
    name: 'Nome',
    userData: 'Dados do Usuário'
  },
  loading: 'Carregando painel...'
};
