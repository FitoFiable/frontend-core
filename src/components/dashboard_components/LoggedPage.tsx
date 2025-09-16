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
import { User, Mail } from 'lucide-react';

interface LoggedPageProps {
    logoutText: string;
    user: userData;
    onUserNameSet: () => void;
    translations: any;
}

export default function LoggedPage({ logoutText, user, onUserNameSet, translations }: LoggedPageProps) {
    const [currentPath, setCurrentPath] = useState<string>('');
    const [language, setLanguage] = useState<string>('');

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
            <div className="min-h-screen bg-gray-50/50">
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
                                            Welcome back, {user.userData.userName}!
                                        </h1>
                                        <p className="text-gray-600 dark:text-gray-400">Here's your dashboard overview</p>
                                    </div>
                                </div>
                                <PhoneSetupAndVerify user={user} translations={translations} onRefresh={handleRefresh} />
                            </div>
                            
                            {/* Navigation Buttons */}
                            <div className="mt-6 flex gap-4">
                                <Button
                                    asChild
                                    variant="outline"
                                    className="flex items-center gap-2"
                                >
                                    <a href={`/${language}/user-info`}>
                                        <User className="h-4 w-4" />
                                        User Information
                                    </a>
                                </Button>
                                <Button
                                    asChild
                                    variant="outline"
                                    className="flex items-center gap-2"
                                >
                                    <a href={`/${language}/email-management`}>
                                        <Mail className="h-4 w-4" />
                                        Email Management
                                    </a>
                                </Button>
                            </div>
                        </div>

                        {/* Stats Cards Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                            <MessageStatsCard />
                            <UserStatsCard />
                            <CallStatsCard />
                            <GrowthStatsCard />
                        </div>

                        {/* Charts Grid */}
                        {user.userData?.phoneVerified && (
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
                                {/* Bar Chart */}
                                <Card>
                                    <CardHeader>
                                        <CardTitle>Monthly Activity</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <DummyBarChart />
                                    </CardContent>
                                </Card>

                                {/* Line Chart */}
                                <Card>
                                    <CardHeader>
                                        <CardTitle>Communication Trends</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <LineChart />
                                    </CardContent>
                                </Card>

                                {/* Pie Chart */}
                                <Card>
                                    <CardHeader>
                                        <CardTitle>Channel Distribution</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <PieChart />
                                    </CardContent>
                                </Card>

                                {/* Area Chart */}
                                <Card>
                                    <CardHeader>
                                        <CardTitle>Revenue vs Expenses</CardTitle>
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
