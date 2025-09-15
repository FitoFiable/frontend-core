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
                                        <h1 className="text-3xl font-bold text-gray-900">
                                            Welcome back, {user.userData.userName}!
                                        </h1>
                                        <p className="text-gray-600">Here's your dashboard overview</p>
                                    </div>
                                </div>
                                <PhoneSetupAndVerify user={user} translations={translations} onRefresh={handleRefresh} />
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

                        {/* User Info Section */}
                        {user.userData?.phoneVerified && (
                            <Card className="mb-8">
                                <CardHeader>
                                    <CardTitle>User Information</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div>
                                            <p className="text-sm font-medium text-gray-500">User ID</p>
                                            <p className="text-lg font-semibold">{user.userID}</p>
                                        </div>
                                        <div>
                                            <p className="text-sm font-medium text-gray-500">Username</p>
                                            <p className="text-lg font-semibold">{user.userData.userName}</p>
                                        </div>
                                    </div>
                                    <details className="mt-4">
                                        <summary className="cursor-pointer text-sm font-medium text-gray-500 hover:text-gray-700">
                                            View Raw Data
                                        </summary>
                                        <pre className="mt-2 p-4 bg-gray-100 rounded-lg text-xs overflow-auto">
                                            {JSON.stringify(user.userData, null, 2)}
                                        </pre>
                                    </details>
                                </CardContent>
                            </Card>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}
