import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import type { userData } from '@/lib/core-api';
import { apiGetUser } from '@/lib/core-api';
import { ArrowLeft, CreditCard, TrendingUp, TrendingDown, Calendar, MapPin, Tag, Edit, X, Eye, ChevronRight } from 'lucide-react';

interface TransactionsPageProps {
  homePageTranslations?: any;
  transactionsPageTranslations?: any;
}

interface Transaction {
  id: string;
  type: 'expense' | 'income' | 'transfer';
  amount: number;
  description: string;
  category: string;
  date: string;
  time: string;
  location?: string;
  method: 'card' | 'cash' | 'transfer' | 'whatsapp';
  status: 'completed' | 'pending' | 'failed';
}

export default function TransactionsPage({ homePageTranslations, transactionsPageTranslations }: TransactionsPageProps) {
  const [user, setUser] = useState<userData | null>(null);
  const [loading, setLoading] = useState(true);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editingTransaction, setEditingTransaction] = useState<Transaction | null>(null);
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  const fetchUserData = async () => {
    const userResponse = await apiGetUser();
    console.log("user", userResponse);
    if (userResponse.status === "OK") {
      setUser(userResponse.data);
    }
  };

  const getLanguageFromPath = () => {
    if (typeof window !== 'undefined') {
      const pathParts = window.location.pathname.split('/');
      return pathParts[1] || 'en';
    }
    return 'en';
  };

  // Dummy transactions data
  const initialTransactions: Transaction[] = [
    {
      id: '1',
      type: 'expense',
      amount: -45000,
      description: 'Supermercado ABC - Compra de víveres',
      category: 'Food & Dining',
      date: '2024-01-15',
      time: '14:30',
      location: 'Bogotá, Colombia',
      method: 'card',
      status: 'completed'
    },
    {
      id: '2',
      type: 'expense',
      amount: -120000,
      description: 'Uber - Viaje al centro',
      category: 'Transportation',
      date: '2024-01-15',
      time: '10:15',
      location: 'Bogotá, Colombia',
      method: 'card',
      status: 'completed'
    },
    {
      id: '3',
      type: 'income',
      amount: 2500000,
      description: 'Salario mensual',
      category: 'Salary',
      date: '2024-01-14',
      time: '09:00',
      method: 'transfer',
      status: 'completed'
    },
    {
      id: '4',
      type: 'expense',
      amount: -380000,
      description: 'Zara - Ropa de trabajo',
      category: 'Shopping',
      date: '2024-01-13',
      time: '16:45',
      location: 'Centro Comercial Andino',
      method: 'card',
      status: 'completed'
    },
    {
      id: '5',
      type: 'expense',
      amount: -25000,
      description: 'Café Juan Valdez',
      category: 'Food & Dining',
      date: '2024-01-13',
      time: '11:20',
      location: 'Calle 85',
      method: 'whatsapp',
      status: 'completed'
    },
    {
      id: '6',
      type: 'expense',
      amount: -150000,
      description: 'Farmacia Cruz Verde - Medicamentos',
      category: 'Healthcare',
      date: '2024-01-12',
      time: '15:30',
      location: 'Bogotá, Colombia',
      method: 'card',
      status: 'completed'
    },
    {
      id: '7',
      type: 'expense',
      amount: -80000,
      description: 'Netflix - Suscripción mensual',
      category: 'Entertainment',
      date: '2024-01-12',
      time: '00:01',
      method: 'card',
      status: 'completed'
    },
    {
      id: '8',
      type: 'expense',
      amount: -200000,
      description: 'Servicios públicos - Enero',
      category: 'Bills & Utilities',
      date: '2024-01-11',
      time: '08:00',
      method: 'transfer',
      status: 'completed'
    },
    {
      id: '9',
      type: 'expense',
      amount: -95000,
      description: 'Restaurante Andrés DC',
      category: 'Food & Dining',
      date: '2024-01-10',
      time: '20:30',
      location: 'Zona Rosa',
      method: 'card',
      status: 'completed'
    },
    {
      id: '10',
      type: 'transfer',
      amount: -500000,
      description: 'Transferencia a María García',
      category: 'Transfer',
      date: '2024-01-10',
      time: '14:20',
      method: 'transfer',
      status: 'completed'
    },
    {
      id: '11',
      type: 'expense',
      amount: -320000,
      description: 'Gasolina - Estación Terpel',
      category: 'Transportation',
      date: '2024-01-09',
      time: '18:45',
      location: 'Autopista Norte',
      method: 'card',
      status: 'completed'
    },
    {
      id: '12',
      type: 'expense',
      amount: -180000,
      description: 'MercadoLibre - Productos varios',
      category: 'Shopping',
      date: '2024-01-08',
      time: '12:15',
      method: 'card',
      status: 'pending'
    }
  ];

  // Initialize transactions state
  useEffect(() => {
    setTransactions(initialTransactions);
  }, []);

  const handleEditTransaction = (transaction: Transaction) => {
    setEditingTransaction(transaction);
    setIsEditModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsEditModalOpen(false);
    setEditingTransaction(null);
  };

  const handleSaveTransaction = (updatedTransaction: Transaction) => {
    setTransactions(prev => 
      prev.map(t => t.id === updatedTransaction.id ? updatedTransaction : t)
    );
    handleCloseModal();
  };

  const getTransactionIcon = (type: string) => {
    switch (type) {
      case 'expense':
        return <TrendingDown className="h-4 w-4 text-red-500" />;
      case 'income':
        return <TrendingUp className="h-4 w-4 text-green-500" />;
      case 'transfer':
        return <CreditCard className="h-4 w-4 text-blue-500" />;
      default:
        return <CreditCard className="h-4 w-4 text-gray-500" />;
    }
  };

  const getMethodIcon = (method: string) => {
    switch (method) {
      case 'card':
        return '💳';
      case 'cash':
        return '💵';
      case 'transfer':
        return '🔄';
      case 'whatsapp':
        return '📱';
      default:
        return '💳';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'text-green-600 dark:text-green-400';
      case 'pending':
        return 'text-yellow-600 dark:text-yellow-400';
      case 'failed':
        return 'text-red-600 dark:text-red-400';
      default:
        return 'text-gray-600 dark:text-gray-400';
    }
  };

  const formatAmount = (amount: number) => {
    const formatted = Math.abs(amount).toLocaleString('es-CO');
    return amount < 0 ? `-$${formatted}` : `+$${formatted}`;
  };

  const getAmountColor = (amount: number) => {
    return amount < 0 ? 'text-red-600 dark:text-red-400' : 'text-green-600 dark:text-green-400';
  };

  useEffect(() => {
    const initializePage = async () => {
      setLoading(true);
      await fetchUserData();
      setLoading(false);
    };

    initializePage();
  }, []);

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center gap-4 mt-5 min-h-screen">
        <p>{homePageTranslations?.loading || 'Loading...'}</p>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="flex flex-col items-center justify-center gap-4 mt-5 min-h-screen">
        <p>{transactionsPageTranslations?.pleaseLogIn || 'Please log in to view your transactions.'}</p>
        <Button onClick={() => window.location.href = '/'}>
          {transactionsPageTranslations?.goToLogin || 'Go to Login'}
        </Button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-6 sm:mb-8">
          <div className="flex flex-col gap-4 mb-4 sm:mb-6">
            <Button
              asChild
              variant="outline"
              className="flex items-center gap-2 w-full sm:w-auto self-start"
            >
              <a href={`/${getLanguageFromPath()}`}>
                <ArrowLeft className="h-4 w-4" />
                <span className="hidden xs:inline">{transactionsPageTranslations?.backToDashboard || 'Back to Dashboard'}</span>
                <span className="xs:hidden">{transactionsPageTranslations?.back || 'Back'}</span>
              </a>
            </Button>
            <div className="flex-1">
              <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 dark:text-gray-100">
                {transactionsPageTranslations?.title || 'Your Transactions'}
              </h1>
              <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base mt-1">
                {transactionsPageTranslations?.subtitle || 'View and manage your financial transactions'}
              </p>
            </div>
          </div>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
          <Card>
            <CardContent className="p-4 sm:p-6">
              <div className="flex items-center justify-between">
                <div className="min-w-0 flex-1">
                  <p className="text-xs sm:text-sm font-medium text-gray-600 dark:text-gray-400">{transactionsPageTranslations?.summary?.totalExpenses || 'Total Expenses'}</p>
                  <p className="text-lg sm:text-xl lg:text-2xl font-bold text-red-600 dark:text-red-400 truncate">$1,850,000</p>
                </div>
                <TrendingDown className="h-6 w-6 sm:h-8 sm:w-8 text-red-500 flex-shrink-0" />
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-4 sm:p-6">
              <div className="flex items-center justify-between">
                <div className="min-w-0 flex-1">
                  <p className="text-xs sm:text-sm font-medium text-gray-600 dark:text-gray-400">{transactionsPageTranslations?.summary?.totalIncome || 'Total Income'}</p>
                  <p className="text-lg sm:text-xl lg:text-2xl font-bold text-green-600 dark:text-green-400 truncate">$2,500,000</p>
                </div>
                <TrendingUp className="h-6 w-6 sm:h-8 sm:w-8 text-green-500 flex-shrink-0" />
              </div>
            </CardContent>
          </Card>
          
          <Card className="sm:col-span-2 lg:col-span-1">
            <CardContent className="p-4 sm:p-6">
              <div className="flex items-center justify-between">
                <div className="min-w-0 flex-1">
                  <p className="text-xs sm:text-sm font-medium text-gray-600 dark:text-gray-400">{transactionsPageTranslations?.summary?.netBalance || 'Net Balance'}</p>
                  <p className="text-lg sm:text-xl lg:text-2xl font-bold text-blue-600 dark:text-blue-400 truncate">$650,000</p>
                </div>
                <CreditCard className="h-6 w-6 sm:h-8 sm:w-8 text-blue-500 flex-shrink-0" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Transactions List */}
        <div className="space-y-3">
          {transactions.map((transaction) => (
            <Card
              key={transaction.id}
              className="transition-all hover:shadow-lg hover:scale-[1.02] cursor-pointer group"
              onClick={() => handleEditTransaction(transaction)}
            >
              <CardContent className="p-4 sm:p-6">
                {/* Mobile Layout */}
                <div className="block sm:hidden">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3 flex-1 min-w-0">
                      <div className="flex-shrink-0">
                        {getTransactionIcon(transaction.type)}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-base font-semibold text-gray-900 dark:text-gray-100 truncate">
                          {transaction.description}
                        </h3>
                        <div className="flex items-center gap-2 mt-1">
                          <span className="text-sm text-gray-600 dark:text-gray-400">
                            {transaction.category}
                          </span>
                          <span className={`text-xs px-2 py-1 rounded-full ${getStatusColor(transaction.status)} bg-opacity-10`}>
                            {transaction.status.charAt(0).toUpperCase() + transaction.status.slice(1)}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 flex-shrink-0">
                      <div className="text-right">
                        <div className={`text-lg font-bold ${getAmountColor(transaction.amount)}`}>
                          {formatAmount(transaction.amount)}
                        </div>
                        <div className="text-xs text-gray-500 dark:text-gray-400">
                          {transaction.date}
                        </div>
                      </div>
                      <ChevronRight className="h-4 w-4 text-gray-400 group-hover:text-gray-600 dark:group-hover:text-gray-300" />
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-1">
                        <span className="text-lg">{getMethodIcon(transaction.method)}</span>
                        <span className="capitalize">{transaction.method}</span>
                      </div>
                      {transaction.location && (
                        <div className="flex items-center gap-1 max-w-32">
                          <MapPin className="h-3 w-3 flex-shrink-0" />
                          <span className="truncate">{transaction.location}</span>
                        </div>
                      )}
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleEditTransaction(transaction);
                      }}
                      className="h-8 px-3 text-xs bg-blue-50 hover:bg-blue-100 dark:bg-blue-900/20 dark:hover:bg-blue-900/30 text-blue-600 dark:text-blue-400"
                    >
                      <Eye className="h-3 w-3 mr-1" />
                      {transactionsPageTranslations?.transaction?.details || 'Details'}
                    </Button>
                  </div>
                </div>

                {/* Desktop Layout */}
                <div className="hidden sm:block">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 flex-1">
                      <div className="flex-shrink-0">
                        {getTransactionIcon(transaction.type)}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                            {transaction.description}
                          </h3>
                          <div className="flex items-center gap-3">
                            <div className="text-right">
                              <div className={`text-xl font-bold ${getAmountColor(transaction.amount)}`}>
                                {formatAmount(transaction.amount)}
                              </div>
                              <div className="text-sm text-gray-500 dark:text-gray-400">
                                {transaction.date} at {transaction.time}
                              </div>
                            </div>
                            <span className="text-2xl">
                              {getMethodIcon(transaction.method)}
                            </span>
                          </div>
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
                            <div className="flex items-center gap-1">
                              <Tag className="h-3 w-3" />
                              <span>{transaction.category}</span>
                            </div>
                            {transaction.location && (
                              <div className="flex items-center gap-1">
                                <MapPin className="h-3 w-3" />
                                <span>{transaction.location}</span>
                              </div>
                            )}
                            <span className={`font-medium px-2 py-1 rounded-full text-xs ${getStatusColor(transaction.status)} bg-opacity-10`}>
                              {transaction.status.charAt(0).toUpperCase() + transaction.status.slice(1)}
                            </span>
                          </div>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={(e) => {
                              e.stopPropagation();
                              handleEditTransaction(transaction);
                            }}
                            className="h-9 px-4 bg-blue-50 hover:bg-blue-100 dark:bg-blue-900/20 dark:hover:bg-blue-900/30 text-blue-600 dark:text-blue-400 group-hover:bg-blue-100 dark:group-hover:bg-blue-900/30"
                          >
                            <Eye className="h-4 w-4 mr-2" />
                            {transactionsPageTranslations?.transaction?.viewDetails || 'View Details'}
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More Button */}
        <div className="mt-8 text-center">
          <Button variant="outline" className="px-8">
            {transactionsPageTranslations?.loadMore || 'Load More Transactions'}
          </Button>
        </div>
      </div>

      {/* Edit Transaction Modal */}
      {isEditModalOpen && editingTransaction && (
        <EditTransactionModal
          transaction={editingTransaction}
          onSave={handleSaveTransaction}
          onClose={handleCloseModal}
          translations={transactionsPageTranslations}
        />
      )}
    </div>
  );
}

// Edit Transaction Modal Component
interface EditTransactionModalProps {
  transaction: Transaction;
  onSave: (transaction: Transaction) => void;
  onClose: () => void;
  translations?: any;
}

function EditTransactionModal({ transaction, onSave, onClose, translations }: EditTransactionModalProps) {
  const [formData, setFormData] = useState({
    type: transaction.type,
    amount: Math.abs(transaction.amount),
    description: transaction.description,
    category: transaction.category,
    date: transaction.date,
    time: transaction.time,
    location: transaction.location || '',
    method: transaction.method,
    status: transaction.status
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const updatedTransaction: Transaction = {
      ...transaction,
      type: formData.type,
      amount: formData.type === 'expense' ? -formData.amount : formData.amount,
      description: formData.description,
      category: formData.category,
      date: formData.date,
      time: formData.time,
      location: formData.location || undefined,
      method: formData.method,
      status: formData.status
    };
    onSave(updatedTransaction);
  };

  const handleChange = (field: string, value: string | number) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <div className="fixed inset-0 bg-white/20 dark:bg-black/20 backdrop-blur-md flex items-center justify-center z-50 p-2 sm:p-4">
      <div className="bg-white/95 dark:bg-gray-800/95 backdrop-blur-xl rounded-xl shadow-2xl border border-white/20 dark:border-gray-700/50 w-full max-w-md max-h-[95vh] sm:max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between p-4 sm:p-6 border-b border-gray-200/50 dark:border-gray-700/50 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-t-xl">
          <h2 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-gray-100">
            {translations?.transaction?.transactionDetails || 'Transaction Details'}
          </h2>
          <Button
            variant="ghost"
            size="sm"
            onClick={onClose}
            className="h-8 w-8 p-0 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>

        <form onSubmit={handleSubmit} className="p-4 sm:p-6 space-y-4">
          {/* Transaction Type */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              {translations?.transaction?.type || 'Type'}
            </label>
            <select
              value={formData.type}
              onChange={(e) => handleChange('type', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
            >
              <option value="expense">{translations?.types?.expense || 'Expense'}</option>
              <option value="income">{translations?.types?.income || 'Income'}</option>
              <option value="transfer">{translations?.types?.transfer || 'Transfer'}</option>
            </select>
          </div>

          {/* Amount */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              {translations?.transaction?.amount || 'Amount'}
            </label>
            <input
              type="number"
              value={formData.amount}
              onChange={(e) => handleChange('amount', parseFloat(e.target.value) || 0)}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
              placeholder={translations?.transaction?.enterAmount || 'Enter amount'}
              min="0"
              step="0.01"
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              {translations?.transaction?.description || 'Description'}
            </label>
            <input
              type="text"
              value={formData.description}
              onChange={(e) => handleChange('description', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
              placeholder={translations?.transaction?.enterDescription || 'Enter description'}
            />
          </div>

          {/* Category */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              {translations?.transaction?.category || 'Category'}
            </label>
            <select
              value={formData.category}
              onChange={(e) => handleChange('category', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
            >
              <option value="Food & Dining">{translations?.categories?.foodDining || 'Food & Dining'}</option>
              <option value="Transportation">{translations?.categories?.transportation || 'Transportation'}</option>
              <option value="Shopping">{translations?.categories?.shopping || 'Shopping'}</option>
              <option value="Healthcare">{translations?.categories?.healthcare || 'Healthcare'}</option>
              <option value="Entertainment">{translations?.categories?.entertainment || 'Entertainment'}</option>
              <option value="Bills & Utilities">{translations?.categories?.billsUtilities || 'Bills & Utilities'}</option>
              <option value="Salary">{translations?.categories?.salary || 'Salary'}</option>
              <option value="Transfer">{translations?.categories?.transfer || 'Transfer'}</option>
            </select>
          </div>

          {/* Date and Time */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                {translations?.transaction?.date || 'Date'}
              </label>
              <input
                type="date"
                value={formData.date}
                onChange={(e) => handleChange('date', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                {translations?.transaction?.time || 'Time'}
              </label>
              <input
                type="time"
                value={formData.time}
                onChange={(e) => handleChange('time', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
              />
            </div>
          </div>

          {/* Location */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              {translations?.transaction?.locationOptional || 'Location (Optional)'}
            </label>
            <input
              type="text"
              value={formData.location}
              onChange={(e) => handleChange('location', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
              placeholder={translations?.transaction?.enterLocation || 'Enter location'}
            />
          </div>

          {/* Payment Method */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              {translations?.transaction?.paymentMethod || 'Payment Method'}
            </label>
            <select
              value={formData.method}
              onChange={(e) => handleChange('method', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
            >
              <option value="card">{translations?.methods?.card || 'Card'}</option>
              <option value="cash">{translations?.methods?.cash || 'Cash'}</option>
              <option value="transfer">{translations?.methods?.transfer || 'Transfer'}</option>
              <option value="whatsapp">{translations?.methods?.whatsapp || 'WhatsApp'}</option>
            </select>
          </div>

          {/* Status */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              {translations?.transaction?.status || 'Status'}
            </label>
            <select
              value={formData.status}
              onChange={(e) => handleChange('status', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
            >
              <option value="completed">{translations?.statuses?.completed || 'Completed'}</option>
              <option value="pending">{translations?.statuses?.pending || 'Pending'}</option>
              <option value="failed">{translations?.statuses?.failed || 'Failed'}</option>
            </select>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              className="flex-1 order-2 sm:order-1"
            >
              {translations?.transaction?.cancel || 'Cancel'}
            </Button>
            <Button
              type="submit"
              className="flex-1 order-1 sm:order-2"
            >
              {translations?.transaction?.saveChanges || 'Save Changes'}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
