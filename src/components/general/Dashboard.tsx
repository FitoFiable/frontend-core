import { apiHealthCheck, apiGetUser } from "@/lib/core-api";
import { useEffect, useState } from "react";
import type { userData } from "@/lib/core-api";
import UnloggedPage from "../dashboard_components/UnloggedPage";
import LoggedPage from "../dashboard_components/LoggedDashboardPage";

interface DashboardProps {
    loginText: string;
    logoutText: string;
    translations: any;
}

export default function Dashboard({ loginText, logoutText, translations }: DashboardProps) {
    const [user, setUser] = useState<userData | null>(null);
    const [loading, setLoading] = useState(true);

    const fetchUserData = async () => {
        const user = await apiGetUser();
        console.log("user", user);
        if (user.status === "OK") {
            setUser(user.data);
        }
    };

    const handleUserNameSet = () => {
        // Refresh user data after setting name
        fetchUserData();
    };

    useEffect(() => {
        const runHealthCheck = async () => {
            const healthCheck = await apiHealthCheck();
            console.log("healthCheck", healthCheck);
        };

        const initializeDashboard = async () => {
            setLoading(true);
            await Promise.all([runHealthCheck(), fetchUserData()]);
            setLoading(false);
        };

        initializeDashboard();
    }, []);

    if (loading) {
        return (
            <div className="flex flex-col items-center justify-center gap-4 mt-5">
                <p>{translations.loading}</p>
            </div>
        );
    }

    return (
        <>
            {user ? (
                <LoggedPage 
                    logoutText={logoutText}
                    user={user}
                    onUserNameSet={handleUserNameSet}
                    translations={translations}
                />
            ) : (
                <UnloggedPage 
                    loginText={loginText}
                />
            )}
        </>
    );
}
