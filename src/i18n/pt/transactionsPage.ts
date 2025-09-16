import type { TransactionsPageLangType } from '../types/transactionsPage';

export const transactionsPage: TransactionsPageLangType = {
  title: 'Suas Transações',
  subtitle: 'Visualize e gerencie suas transações financeiras',
  backToDashboard: 'Voltar ao Painel',
  back: 'Voltar',
  pleaseLogIn: 'Por favor, faça login para visualizar suas transações.',
  goToLogin: 'Ir para Login',
  summary: {
    totalExpenses: 'Despesas Totais',
    totalIncome: 'Receitas Totais',
    netBalance: 'Saldo Líquido'
  },
  transaction: {
    viewDetails: 'Ver Detalhes',
    details: 'Detalhes',
    transactionDetails: 'Detalhes da Transação',
    type: 'Tipo',
    amount: 'Valor',
    description: 'Descrição',
    category: 'Categoria',
    date: 'Data',
    time: 'Hora',
    location: 'Localização',
    locationOptional: 'Localização (Opcional)',
    paymentMethod: 'Método de Pagamento',
    status: 'Status',
    enterAmount: 'Digite o valor',
    enterDescription: 'Digite a descrição',
    enterLocation: 'Digite a localização',
    cancel: 'Cancelar',
    saveChanges: 'Salvar Alterações'
  },
  types: {
    expense: 'Despesa',
    income: 'Receita',
    transfer: 'Transferência'
  },
  methods: {
    card: 'Cartão',
    cash: 'Dinheiro',
    transfer: 'Transferência',
    whatsapp: 'WhatsApp'
  },
  statuses: {
    completed: 'Concluído',
    pending: 'Pendente',
    failed: 'Falhou'
  },
  categories: {
    foodDining: 'Comida e Restaurantes',
    transportation: 'Transporte',
    shopping: 'Compras',
    healthcare: 'Saúde',
    entertainment: 'Entretenimento',
    billsUtilities: 'Contas e Serviços',
    salary: 'Salário',
    transfer: 'Transferência'
  },
  loadMore: 'Carregar Mais Transações'
};
