import { useEffect, useState } from "react";
import type { userData } from "@/lib/core-api";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import SetUserName from "./SetUserName";
import PhoneSetupAndVerify from "./PhoneSetupAndVerify";
import DummyBarChart from "./charts/dummyBarChart";
import LineChart from "./charts/lineChart";
import PieChart from "./charts/pieChart";
import AreaChart from "./charts/areaChart";
import { MessageStatsCard, UserStatsCard, CallStatsCard, GrowthStatsCard } from "./charts/statsCard";
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

    useEffect(() => {
        // Set client-side values after component mounts
        if (typeof window !== 'undefined') {
            setCurrentPath(window.location.pathname);
            setLanguage(localStorage.getItem('language') || 'en');
        }
    }, []);

    const handleRefresh = () => onUserNameSet();

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
                                <PhoneSetupAndVerify user={user} translations={translations} onRefresh={handleRefresh} />
                            </div>

                            {/* Navigation Buttons */}
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
                        </div>

                        {/* Fito Bot Introduction & Transaction Methods */}
                        {showFitoIntro && (
                            <div className="mb-8">
                                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl p-6 mb-6 border border-blue-200 dark:border-blue-700/50 relative">
                                    <Button
                                        variant="ghost"
                                        size="sm"
                                        onClick={() => setShowFitoIntro(false)}
                                        className="absolute top-3 right-3 h-8 w-8 p-0 rounded-full hover:bg-blue-100 dark:hover:bg-blue-800/30"
                                    >
                                        <X className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                                    </Button>
                                    <div className="flex items-start gap-4 mb-4">
                                        <div className="flex-shrink-0">
                                            <img
                                                src="/fitofiable/fito-hello.webp"
                                                alt="Fito AI Assistant"
                                                className="w-24 h-24 rounded-full"
                                            />
                                        </div>
                                        <div className="flex-1">
                                            <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                                                {loggedDashboardTranslations?.meetFito?.title || 'Meet Fito - Your Personal Finance AI Assistant'}
                                            </h2>
                                            <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                                                {loggedDashboardTranslations?.meetFito?.description || 'Fito is a WhatsApp bot that makes tracking your daily expenses incredibly easy. Simply send screenshots, images, audio messages, or text messages of things you pay for, and Fito will automatically categorize and track your transactions. You can also receive transactions via email for seamless financial management.'}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Transaction Input Methods */}
                                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-4">
                                        <div className="flex items-center gap-2 p-3 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
                                            <Camera className="h-5 w-5 text-blue-600" />
                                            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{loggedDashboardTranslations?.meetFito?.receiptPhotos || 'Receipt Photos'}</span>
                                        </div>
                                        <div className="flex items-center gap-2 p-3 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
                                            <Monitor className="h-5 w-5 text-indigo-600" />
                                            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{loggedDashboardTranslations?.meetFito?.screenshotReceipts || 'Screenshot Receipts'}</span>
                                        </div>
                                        <div className="flex items-center gap-2 p-3 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
                                            <MessageSquare className="h-5 w-5 text-green-600" />
                                            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{loggedDashboardTranslations?.meetFito?.textMessages || 'Text Messages'}</span>
                                        </div>
                                        <div className="flex items-center gap-2 p-3 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
                                            <Mic className="h-5 w-5 text-purple-600" />
                                            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{loggedDashboardTranslations?.meetFito?.audioMessages || 'Audio Messages'}</span>
                                        </div>
                                        <div className="flex items-center gap-2 p-3 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
                                            <Mail className="h-5 w-5 text-orange-600" />
                                            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{loggedDashboardTranslations?.meetFito?.emailReceipts || 'Email Receipts'}</span>
                                        </div>
                                        <div className="flex items-center gap-2 p-3 bg-gray-100 dark:bg-gray-700 rounded-lg border border-gray-300 dark:border-gray-600 opacity-60">
                                            <File className="h-5 w-5 text-gray-400" />
                                            <div className="flex flex-col">
                                                <span className="text-sm font-medium text-gray-500 dark:text-gray-400">{loggedDashboardTranslations?.meetFito?.pdfDocuments || 'PDF Documents'}</span>
                                                <span className="text-xs text-gray-400 dark:text-gray-500">{loggedDashboardTranslations?.meetFito?.comingSoon || 'Coming Soon'}</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Action Buttons */}
                                    <div className="flex flex-col sm:flex-row gap-3 mb-4">
                                        <Button
                                            asChild
                                            className="flex-1 bg-green-600 hover:bg-green-700 text-white"
                                        >
                                            <a
                                                href="https://wa.me/573108108201?text=Hi%20Fito!%20I%20want%20to%20start%20tracking%20my%20expenses."
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center justify-center gap-2"
                                            >
                                                <MessageSquare className="h-4 w-4" />
                                                {loggedDashboardTranslations?.meetFito?.goToWhatsapp || 'Go to WhatsApp'}
                                                <ExternalLink className="h-3 w-3" />
                                            </a>
                                        </Button>
                                        <Button
                                            asChild
                                            variant="outline"
                                            className="flex-1 border-orange-200 text-orange-600 hover:bg-orange-50 dark:border-orange-700 dark:text-orange-400 dark:hover:bg-orange-900/20"
                                        >
                                            <a
                                                href="mailto:go@fitofiable.com?subject=Transaction%20Receipt&body=Hi%20Fito!%20Here%20is%20my%20transaction%20receipt."
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center justify-center gap-2"
                                            >
                                                <Mail className="h-4 w-4" />
                                                {loggedDashboardTranslations?.meetFito?.goToEmail || 'Go to Email'}
                                                <ExternalLink className="h-3 w-3" />
                                            </a>
                                        </Button>
                                    </div>

                                    <div className="bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-700/50 rounded-lg p-3">
                                        <div className="flex items-start gap-2">
                                            <Mail className="h-4 w-4 text-orange-600 dark:text-orange-400 flex-shrink-0 mt-0.5" />
                                            <div>
                                                <p className="text-sm text-orange-800 dark:text-orange-200 font-medium mb-1">
                                                    {loggedDashboardTranslations?.meetFito?.emailSetupRequired || 'Email Setup Required'}
                                                </p>
                                                <p className="text-xs text-orange-700 dark:text-orange-300">
                                                    {loggedDashboardTranslations?.meetFito?.emailSetupDescription || 'To use email receipts, first configure your email in the'}
                                                    <a href={`/${language}/email-management`} className="underline hover:no-underline ml-1">
                                                        {loggedDashboardTranslations?.meetFito?.emailManagementPage || 'Email Management page'}
                                                    </a>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                                {/* Dummy Data Disclaimer */}
                                {showDummyDataAlert && (
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

                                {/* Financial Overview Cards */}
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                                    <Card>
                                        <CardContent className="p-6">
                                            <div className="flex items-center justify-between">
                                                <div>
                                                    <p className="text-sm font-medium text-gray-600 dark:text-gray-400">{loggedDashboardTranslations?.financialOverview?.monthlyExpenses || 'Monthly Expenses'}</p>
                                                    <p className="text-2xl font-bold text-gray-900 dark:text-gray-100">$2,450</p>
                                                    <p className="text-xs text-red-600 dark:text-red-400">+12% {loggedDashboardTranslations?.financialOverview?.fromLastMonth || 'from last month'}</p>
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
                                                    <p className="text-sm font-medium text-gray-600 dark:text-gray-400">{loggedDashboardTranslations?.financialOverview?.transactionsTracked || 'Transactions Tracked'}</p>
                                                    <p className="text-2xl font-bold text-gray-900 dark:text-gray-100">47</p>
                                                    <p className="text-xs text-blue-600 dark:text-blue-400">{loggedDashboardTranslations?.financialOverview?.thisMonthViaFito || 'This month via Fito'}</p>
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
                                                    <p className="text-sm font-medium text-gray-600 dark:text-gray-400">{loggedDashboardTranslations?.financialOverview?.spendingCategories || 'Spending Categories'}</p>
                                                    <p className="text-2xl font-bold text-gray-900 dark:text-gray-100">8</p>
                                                    <p className="text-xs text-purple-600 dark:text-purple-400">{loggedDashboardTranslations?.financialOverview?.autoCategorized || 'Auto-categorized'}</p>
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
                                                    <p className="text-sm font-medium text-gray-600 dark:text-gray-400">{loggedDashboardTranslations?.financialOverview?.savingsRate || 'Savings Rate'}</p>
                                                    <p className="text-2xl font-bold text-gray-900 dark:text-gray-100">23%</p>
                                                    <p className="text-xs text-green-600 dark:text-green-400">+5% {loggedDashboardTranslations?.financialOverview?.thisMonth || 'this month'}</p>
                                                </div>
                                                <div className="h-8 w-8 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center">
                                                    <TrendingUp className="h-4 w-4 text-green-600 dark:text-green-400" />
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </div>

                                {/* Financial Analytics Charts */}
                                {user.userData?.phoneVerified && (
                                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
                                        {/* Monthly Expenses Trend */}
                                        <Card>
                                            <CardHeader>
                                                <CardTitle className="flex items-center gap-2">
                                                    <TrendingUp className="h-5 w-5 text-blue-600" />
                                                    {loggedDashboardTranslations?.charts?.monthlyExpensesTrend || 'Monthly Expenses Trend'}
                                                </CardTitle>
                                            </CardHeader>
                                            <CardContent>
                                                <DummyBarChart />
                                            </CardContent>
                                        </Card>

                                        {/* Spending by Category */}
                                        <Card>
                                            <CardHeader>
                                                <CardTitle className="flex items-center gap-2">
                                                    <Shield className="h-5 w-5 text-purple-600" />
                                                    {loggedDashboardTranslations?.charts?.spendingByCategory || 'Spending by Category'}
                                                </CardTitle>
                                            </CardHeader>
                                            <CardContent>
                                                <PieChart />
                                            </CardContent>
                                        </Card>

                                        {/* Weekly Spending Pattern */}
                                        <Card>
                                            <CardHeader>
                                                <CardTitle className="flex items-center gap-2">
                                                    <Clock className="h-5 w-5 text-green-600" />
                                                    {loggedDashboardTranslations?.charts?.weeklySpendingPattern || 'Weekly Spending Pattern'}
                                                </CardTitle>
                                            </CardHeader>
                                            <CardContent>
                                                <LineChart />
                                            </CardContent>
                                        </Card>

                                        {/* Income vs Expenses */}
                                        <Card>
                                            <CardHeader>
                                                <CardTitle className="flex items-center gap-2">
                                                    <FileText className="h-5 w-5 text-orange-600" />
                                                    {loggedDashboardTranslations?.charts?.incomeVsExpenses || 'Income vs Expenses'}
                                                </CardTitle>
                                            </CardHeader>
                                            <CardContent>
                                                <AreaChart />
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
