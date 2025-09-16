import { useEffect, useMemo, useState } from "react";
import type { userData, userTransaction, transactionsConfig } from "@/lib/core-api";
import { apiGetTransactions, apiGetTransactionsConfig, apiSetTransactionsConfig } from "@/lib/core-api";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import SetUserName from "./SetUserName";
import PhoneSetupAndVerify from "./PhoneSetupAndVerify";
import DummyBarChart from "./charts/dummyBarChart";
import LineChart from "./charts/lineChart";
import PieChart from "./charts/pieChart";
import AreaChart from "./charts/areaChart";
import { MessageStatsCard, UserStatsCard, CallStatsCard, GrowthStatsCard } from "./charts/statsCard";
import FitoIntroduction from "./FitoIntroduction";
import { User, Mail, CreditCard, History, MessageSquare, Camera, Mic, FileText, Zap, TrendingUp, Shield, Clock, ExternalLink, Monitor, File, X } from 'lucide-react';

interface LoggedPageProps {
    logoutText: string;
    user: userData;
    onUserNameSet: () => void;
    translations: any;
    loggedDashboardTranslations: any;
}

export default function LoggedPage({ logoutText, user, onUserNameSet, translations, loggedDashboardTranslations }: LoggedPageProps) {
    const [currentPath, setCurrentPath] = useState<string>('');
    const [language, setLanguage] = useState<string>('');
    const [showFitoIntro, setShowFitoIntro] = useState<boolean>(true);
    const [showDummyDataAlert, setShowDummyDataAlert] = useState<boolean>(true);
    const [transactions, setTransactions] = useState<userTransaction[]>([])
    const [config, setConfig] = useState<transactionsConfig>({ categories: [], budgets: {} })
    const [isSavingConfig, setIsSavingConfig] = useState<boolean>(false)
    const [newCategory, setNewCategory] = useState<string>("")
    const [newBudgetCategory, setNewBudgetCategory] = useState<string>("")
    const [newBudgetAmount, setNewBudgetAmount] = useState<string>("")

    useEffect(() => {
        // Set client-side values after component mounts
        if (typeof window !== 'undefined') {
            setCurrentPath(window.location.pathname);
            setLanguage(localStorage.getItem('language') || 'en');
        }
    }, []);

    useEffect(() => {
        const load = async () => {
            const t = await apiGetTransactions({ limit: 500 })
            if (t.status === 'OK') {
                const data = t.data.transactions as userTransaction[]
                // newest first
                const toTs = (tr: userTransaction) => new Date(`${tr.date}T${tr.time || '00:00'}:00`).getTime()
                setTransactions([...data].sort((a,b)=>toTs(b)-toTs(a)))
            }
            const c = await apiGetTransactionsConfig()
            if (c.status === 'OK') setConfig(c.data as transactionsConfig)
        }
        load()
    }, [])

    const totals = useMemo(() => {
        let expenses = 0
        let income = 0
        for (const tr of transactions) {
            if (tr.amount < 0) expenses += tr.amount
            else income += tr.amount
        }
        const net = income + expenses
        return {
            expensesAbs: Math.abs(expenses),
            income,
            netAbs: Math.abs(net),
            netNegative: net < 0
        }
    }, [transactions])

    const spendByCategory = useMemo(() => {
        const map = new Map<string, number>()
        for (const tr of transactions) {
            if (tr.amount < 0) {
                const cat = tr.category || 'Uncategorized'
                map.set(cat, (map.get(cat) || 0) + Math.abs(tr.amount))
            }
        }
        return map
    }, [transactions])

    const top3CategoriesData = useMemo(() => {
        const entries = Array.from(spendByCategory.entries())
        const sorted = entries.sort((a,b)=>b[1]-a[1])
        const top3 = sorted.slice(0,3)
        return top3.map(([name, value], idx) => ({ name, value }))
    }, [spendByCategory])

    const handleAddCategory = async () => {
        const name = newCategory.trim()
        if (!name) return
        const categories = Array.from(new Set([...(config.categories||[]), name]))
        setIsSavingConfig(true)
        const res = await apiSetTransactionsConfig({ categories })
        setIsSavingConfig(false)
        if (res.status === 'OK') {
            setConfig(res.data as transactionsConfig)
            setNewCategory("")
        }
    }

    const handleSetBudget = async () => {
        const cat = newBudgetCategory
        const amt = parseFloat(newBudgetAmount)
        if (!cat || isNaN(amt) || amt < 0) return
        const budgets = { ...(config.budgets||{}) , [cat]: amt }
        setIsSavingConfig(true)
        const res = await apiSetTransactionsConfig({ budgets })
        setIsSavingConfig(false)
        if (res.status === 'OK') {
            setConfig(res.data as transactionsConfig)
            setNewBudgetAmount("")
        }
    }

    const currency = (v: number) => `$${v.toLocaleString('es-CO')}`

    const handleRefresh = () => onUserNameSet();

    const monthlySeries = useMemo(() => {
        const map = new Map<string, { income: number; expenses: number }>()
        const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
        for (const tr of transactions) {
            const d = new Date(`${tr.date}T${tr.time || '00:00'}:00`)
            const key = months[d.getMonth()]
            const current = map.get(key) || { income: 0, expenses: 0 }
            if (tr.amount < 0) current.expenses += Math.abs(tr.amount)
            else current.income += tr.amount
            map.set(key, current)
        }
        // keep calendar order, only months that appear
        const result = months
            .filter(m => map.has(m))
            .map(m => ({ month: m, income: map.get(m)!.income, expenses: map.get(m)!.expenses }))
        return result
    }, [transactions])

    return (
        <div className="relative min-h-screen">
            {/* Logout button in bottom right corner */}
            <div className="absolute bottom-4 right-4">
                <Button
                    className="w-35"
                    asChild
                >
                    <a href={`/logout?redirect_to=${currentPath}&lang=${language}`}>
                        {logoutText}
                    </a>
                </Button>
            </div>

            {/* Main content */}
            <div className="min-h-screen bg-gray-50 dark:bg-gray-800">
                {!user.userData?.userName ? (
                    <div className="flex flex-col items-center justify-center min-h-screen">
                        <SetUserName onUserNameSet={onUserNameSet} translations={translations} />
                    </div>
                ) : (
                    <div className="container mx-auto px-4 py-8">
                        {/* Header Section */}

                        <div className="mb-8">
                            {user.userData?.phoneVerified && (
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center space-x-4">
                                        <img
                                            src="/fitofiable/fito-research.webp"
                                            alt="Fito researching"
                                            className="w-16 h-16 rounded-full"
                                        />
                                        <div>
                                            <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
                                                {loggedDashboardTranslations?.welcome?.replace('{userName}', user.userData.userName) || `Welcome back, ${user.userData.userName}!`}
                                            </h1>
                                            <p className="text-gray-600 dark:text-gray-300">{loggedDashboardTranslations?.dashboardOverview || "Here's your dashboard overview"}</p>
                                        </div>
                                    </div>
                                </div>
                            )}
                            <div className="max-w-lg mx-auto">
                                <PhoneSetupAndVerify user={user} translations={translations} onRefresh={handleRefresh} />
                            </div>

                            {/* Navigation Buttons */}
                            {user.userData?.phoneVerified && (
                                <div className="mt-6 flex flex-wrap gap-4">
                                    <Button
                                        asChild
                                        variant="outline"
                                        className="flex items-center gap-2"
                                    >
                                        <a href={`/${language}/user-info`}>
                                            <User className="h-4 w-4" />
                                            {loggedDashboardTranslations?.userInformation || 'User Information'}
                                        </a>
                                    </Button>
                                    <Button
                                        asChild
                                        variant="outline"
                                        className="flex items-center gap-2"
                                    >
                                        <a href={`/${language}/email-management`}>
                                            <Mail className="h-4 w-4" />
                                            {loggedDashboardTranslations?.emailManagement || 'Email Management'}
                                        </a>
                                    </Button>
                                    <Button
                                        asChild
                                        variant="outline"
                                        className="flex items-center gap-2"
                                    >
                                        <a href={`/${language}/transactions`}>
                                            <CreditCard className="h-4 w-4" />
                                            {loggedDashboardTranslations?.yourTransactions || 'Your Transactions'}
                                        </a>
                                    </Button>
                                    <Button
                                        asChild
                                        variant="outline"
                                        className="flex items-center gap-2"
                                    >
                                        <a href={`/${language}/event-history`}>
                                            <History className="h-4 w-4" />
                                            {loggedDashboardTranslations?.eventHistory || 'Event History'}
                                        </a>
                                    </Button>
                                </div>
                            )}
                        </div>

                        {/* Fito Bot Introduction & Transaction Methods */}
                        {showFitoIntro && user.userData?.phoneVerified && (
                            <div className="mb-8">
                                <FitoIntroduction
                                    language={language}
                                    showCloseButton={true}
                                    onClose={() => setShowFitoIntro(false)}
                                />
                            </div>
                        )}

                        {/* Dummy Data Disclaimer */}
                        {showFitoIntro && user.userData?.phoneVerified && showDummyDataAlert && (
                            <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-700/50 rounded-lg p-4 mb-6 relative">
                                <Button
                                    variant="ghost"
                                    size="sm"
                                    onClick={() => setShowDummyDataAlert(false)}
                                    className="absolute top-2 right-2 h-6 w-6 p-0 rounded-full hover:bg-amber-100 dark:hover:bg-amber-800/30"
                                >
                                    <X className="h-3 w-3 text-amber-600 dark:text-amber-400" />
                                </Button>
                                <div className="flex items-start gap-3">
                                    <Clock className="h-5 w-5 text-amber-600 dark:text-amber-400 flex-shrink-0 mt-0.5" />
                                    <div>
                                        <h3 className="text-sm font-semibold text-amber-800 dark:text-amber-200 mb-1">
                                            {loggedDashboardTranslations?.developmentInProgress?.title || 'Development in Progress'}
                                        </h3>
                                        <p className="text-sm text-amber-700 dark:text-amber-300">
                                            {loggedDashboardTranslations?.developmentInProgress?.description || 'The data below is dummy data showing what you\'ll have in the future. We\'re still building the core features!'} <strong>{loggedDashboardTranslations?.developmentInProgress?.transactionManagement || 'Transaction Management'}</strong> and <strong>{loggedDashboardTranslations?.developmentInProgress?.eventHistory || 'Event History'}</strong>. More financial tools coming soon!
                                        </p>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Financial Overview Cards (live) */}
                        {user.userData?.phoneVerified && (
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                                <Card>
                                    <CardContent className="p-6">
                                        <div className="flex items-center justify-between">
                                            <div>
                                                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">{loggedDashboardTranslations?.financialOverview?.totalExpenses || 'Total Expenses'}</p>
                                                <p className="text-2xl font-bold text-gray-900 dark:text-gray-100">{currency(totals.expensesAbs)}</p>
                                                <p className="text-xs text-red-600 dark:text-red-400">{loggedDashboardTranslations?.financialOverview?.fromData || 'from data'}</p>
                                            </div>
                                            <div className="h-8 w-8 bg-red-100 dark:bg-red-900/20 rounded-full flex items-center justify-center">
                                                <TrendingUp className="h-4 w-4 text-red-600 dark:text-red-400" />
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>

                                <Card>
                                    <CardContent className="p-6">
                                        <div className="flex items-center justify-between">
                                            <div>
                                                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">{loggedDashboardTranslations?.financialOverview?.totalIncome || 'Total Income'}</p>
                                                <p className="text-2xl font-bold text-gray-900 dark:text-gray-100">{currency(totals.income)}</p>
                                                <p className="text-xs text-blue-600 dark:text-blue-400">{loggedDashboardTranslations?.financialOverview?.fromData || 'from data'}</p>
                                            </div>
                                            <div className="h-8 w-8 bg-blue-100 dark:bg-blue-900/20 rounded-full flex items-center justify-center">
                                                <MessageSquare className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>

                                <Card>
                                    <CardContent className="p-6">
                                        <div className="flex items-center justify-between">
                                            <div>
                                                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">{loggedDashboardTranslations?.financialOverview?.netBalance || 'Net Balance'}</p>
                                                <p className={`text-2xl font-bold ${totals.netNegative ? 'text-red-600 dark:text-red-400' : 'text-green-600 dark:text-green-400'}`}>{totals.netNegative ? '-' : ''}{currency(totals.netAbs)}</p>
                                                <p className="text-xs text-purple-600 dark:text-purple-400">{loggedDashboardTranslations?.financialOverview?.fromData || 'from data'}</p>
                                            </div>
                                            <div className="h-8 w-8 bg-purple-100 dark:bg-purple-900/20 rounded-full flex items-center justify-center">
                                                <Shield className="h-4 w-4 text-purple-600 dark:text-purple-400" />
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>

                                <Card>
                                    <CardContent className="p-6">
                                        <div className="flex items-center justify-between">
                                            <div>
                                                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">{loggedDashboardTranslations?.financialOverview?.transactionsTracked || 'Transactions Tracked'}</p>
                                                <p className="text-2xl font-bold text-gray-900 dark:text-gray-100">{transactions.length}</p>
                                                <p className="text-xs text-green-600 dark:text-green-400">{loggedDashboardTranslations?.financialOverview?.fromData || 'from data'}</p>
                                            </div>
                                            <div className="h-8 w-8 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center">
                                                <TrendingUp className="h-4 w-4 text-green-600 dark:text-green-400" />
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        )}

                        {/* Budgets by Category (live) */}
                        {user.userData?.phoneVerified && (
                            <div className="grid grid-cols-1 gap-6 mb-8">
                                <Card>
                                    <CardHeader>
                                        <CardTitle className="flex items-center gap-2">
                                            <FileText className="h-5 w-5 text-orange-600" />
                                            {loggedDashboardTranslations?.charts?.budgetsByCategory || 'Budgets by Category'}
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="space-y-4">
                                            {(config.categories || []).map((cat) => {
                                                const spent = spendByCategory.get(cat) || 0
                                                const budget = config.budgets?.[cat] || 0
                                                const pct = budget > 0 ? Math.min(100, Math.round((spent / budget) * 100)) : 0
                                                return (
                                                    <div key={cat} className="space-y-1">
                                                        <div className="flex items-center justify-between text-sm">
                                                            <span className="font-medium text-gray-800 dark:text-gray-100">{cat}</span>
                                                            <span className="text-gray-600 dark:text-gray-300">{currency(spent)} / {currency(budget)}</span>
                                                        </div>
                                                        <div className="h-2 w-full bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                                                            <div className={`${pct >= 100 ? 'bg-red-500' : 'bg-blue-500'} h-full`} style={{ width: `${pct}%` }} />
                                                        </div>
                                                    </div>
                                                )
                                            })}
                                            {/* Add Category */}
                                            <div className="flex flex-wrap gap-2 pt-2">
                                                <input
                                                    className="px-2 py-1 border rounded-md dark:bg-gray-800 dark:border-gray-700"
                                                    placeholder={loggedDashboardTranslations?.charts?.newCategory || 'New category'}
                                                    value={newCategory}
                                                    onChange={(e) => setNewCategory(e.target.value)}
                                                />
                                                <Button onClick={handleAddCategory} disabled={isSavingConfig}>
                                                    {loggedDashboardTranslations?.charts?.add || 'Add'}
                                                </Button>
                                            </div>
                                            {/* Set Budget */}
                                            <div className="flex flex-wrap gap-2 pt-2">
                                                <select
                                                    className="px-2 py-1 border rounded-md dark:bg-gray-800 dark:border-gray-700"
                                                    value={newBudgetCategory}
                                                    onChange={(e)=>setNewBudgetCategory(e.target.value)}
                                                >
                                                    <option value="">{loggedDashboardTranslations?.charts?.selectCategory || 'Select category'}</option>
                                                    {(config.categories || []).map(cat => (
                                                        <option key={cat} value={cat}>{cat}</option>
                                                    ))}
                                                </select>
                                                <input
                                                    type="number"
                                                    className="px-2 py-1 border rounded-md dark:bg-gray-800 dark:border-gray-700"
                                                    placeholder={loggedDashboardTranslations?.charts?.budgetAmount || 'Budget amount'}
                                                    value={newBudgetAmount}
                                                    onChange={(e)=>setNewBudgetAmount(e.target.value)}
                                                    min="0"
                                                />
                                                <Button onClick={handleSetBudget} disabled={isSavingConfig || !newBudgetCategory}>
                                                    {loggedDashboardTranslations?.charts?.setBudget || 'Set budget'}
                                                </Button>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        )}

                        {/* Charts (live or dummy fallback) */}
                        {user.userData?.phoneVerified && (
                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
                                <Card>
                                    <CardHeader>
                                        <CardTitle>{loggedDashboardTranslations?.charts?.spendingByTopCategories || 'Spending by Top Categories'}</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <PieChart data={top3CategoriesData} />
                                    </CardContent>
                                </Card>
                                <Card>
                                    <CardHeader>
                                        <CardTitle>{loggedDashboardTranslations?.charts?.monthlyOverview || 'Monthly Overview'}</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <AreaChart data={monthlySeries} />
                                    </CardContent>
                                </Card>
                                <Card>
                                    <CardHeader>
                                        <CardTitle>{loggedDashboardTranslations?.charts?.weeklySpending || 'Weekly Spending'}</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <LineChart />
                                    </CardContent>
                                </Card>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>

    );
}
