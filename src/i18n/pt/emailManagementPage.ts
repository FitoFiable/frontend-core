import type { EmailManagementPageLangType } from '../types/emailManagementPage';

export const emailManagementPage: EmailManagementPageLangType = {
  header: {
    title: 'Gerenciamento de E-mails',
    subtitle: 'Gerencie seus e-mails permitidos e confirmados',
    backToDashboard: 'Voltar ao Dashboard'
  },
  emailSync: {
    title: 'Como Funciona a Sincronização de E-mails',
    step1: {
      title: 'Passo 1: Adicionar E-mails Permitidos',
      description: 'Estes são os endereços de e-mail que você quer associar à sua contaFito. Use o formulário de gerenciamento de e-mails para adicioná-los.'
    },
    step2: {
      title: 'Passo 2: Confirmar Propriedade do E-mail',
      description: 'Para ativar um e-mail, você deve enviar um e-mail de confirmação desse endereço para go@fitofiable.com com o assunto sendo seu número de telefone:',
      subjectLabel: 'Assunto:',
      phoneLabel: 'Seu número de telefone:',
      sendButton: 'Enviar E-mail de Confirmação'
    },
    step3: {
      title: 'Passo 3: E-mail Torna-se Ativo',
      description: 'Uma vez confirmado, o e-mail torna-se "Ativo" e o Fito processará automaticamente todos os e-mails recebidos desse endereço, incluindo-os nas análises do dashboard e relatórios financeiros.'
    },
    status: {
      pending: 'Pendente - Aguardando e-mail de confirmação',
      active: 'Ativo - Pronto para receber e-mails'
    }
  },
  gmailSetup: {
    title: 'Configurar Encaminhamento Automático de E-mails Bancários',
    description: 'Configure o Gmail para encaminhar automaticamente as notificações bancárias para oFito para um acompanhamento financeiro perfeito.',
    step1: {
      title: 'Passo 1: Configurar Encaminhamento de E-mails',
      steps: [
        'Abra o Gmail no seu computador',
        'Clique no ícone ⚙️ (configurações) no canto superior direito',
        'Clique em "Ver todas as configurações"',
        'Clique na aba "Encaminhamento e POP/IMAP"',
        'Clique em "Adicionar um endereço de encaminhamento"',
        'Digite: go@fitofiable.com',
        'Clique em "Próximo" e verifique sua identidade',
        'Clique em "Prosseguir" para confirmar'
      ]
    },
    step2: {
      title: 'Passo 2: Criar Filtro de E-mail',
      steps: [
        'Na sua caixa de entrada, clique no ícone 🔍 (pesquisar)',
        'Clique no ícone de filtro (três linhas horizontais) ao lado da lupa',
        'No campo "De", crie um filtro com os endereços de e-mail do seu banco'
      ],
      findEmails: {
        title: '💡 Como encontrar os endereços de e-mail do seu banco:',
        tips: [
          'Verifique os e-mails de notificação do seu banco na sua caixa de entrada',
          'Olhe o campo "De" dos e-mails bancários recentes',
          'Padrões comuns: notificacoes@[banco].com.br, alertas@[banco].com.br, transacoes@[banco].com.br',
          'Copie todos os endereços de e-mail e cole-os juntos usando "OR" entre cada endereço'
        ],
        warning: '⚠️ Importante: Cole todos os endereços de e-mail no mesmo campo, separados por "OR" (não em campos separados)'
      },
      example: {
        title: 'Exemplo para bancos brasileiros (personalize para seus bancos):',
        banks: 'notificacoes@itau.com.br OR alertas@itau.com.br OR transacoes@itau.com.br OR notificacoes@bradesco.com.br OR alertas@bradesco.com.br OR transacoes@bradesco.com.br OR notificacoes@bb.com.br OR alertas@bb.com.br OR transacoes@bb.com.br OR notificacoes@caixa.gov.br OR alertas@caixa.gov.br OR transacoes@caixa.gov.br OR notificacoes@santander.com.br OR alertas@santander.com.br OR transacoes@santander.com.br OR notificacoes@nubank.com.br OR alertas@nubank.com.br OR transacoes@nubank.com.br OR notificacoes@inter.com.br OR alertas@inter.com.br OR transacoes@inter.com.br'
      }
    },
    success: {
      title: '✅ Tudo Pronto!',
      description: 'Todas as notificações bancárias agora serão encaminhadas automaticamente para oFito.',
      time: 'Tempo total de configuração: 3-5 minutos'
    }
  }
};
