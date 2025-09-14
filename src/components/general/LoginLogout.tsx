import { apiHealthCheck, apiGetUser } from "@/lib/core-api";
import { useEffect, useState } from "react";

import type { userData } from "@/lib/core-api";
import { Button } from "@/components/ui/button";

export default function LoginLogout({ loginText, logoutText }: { loginText: string, logoutText: string }) {

    const [user, setUser] = useState<userData | null>(null);
    const [currentPath, setCurrentPath] = useState<string>('');
    const [language, setLanguage] = useState<string>('');

    useEffect(() => {
        const runHealthCheck = async () => {
            const healthCheck = await apiHealthCheck();
            console.log("healthCheck", healthCheck);

        };

        const runGetUser = async () => {
            const user = await apiGetUser();
            console.log("user", user);
            if (user.status === "OK") {
                setUser(user.data);
            }
            //   else if (user.status === "UNAUTHENTICATED") {
            //     window.location.href = user.authUrl;
            //   }
        };

        // Set client-side values after component mounts
        if (typeof window !== 'undefined') {
            setCurrentPath(window.location.pathname);
            setLanguage(localStorage.getItem('language') || 'en');
        }

        runHealthCheck();
        runGetUser();
    }, []);
    return (
        <div className="flex flex-col items-center justify-center  gap-4 mt-5">
            {user ? 
                <>
                    <p className="text-lg font-medium"> {user.userID}</p>
                    <Button 
                        className="w-32"
                        asChild
                    >
                        <a href={`/logout?redirect_to=${currentPath}&lang=${language}`}>
                            {logoutText}
                        </a>
                    </Button>
                </> : 
                <Button
                    className="w-32"
                    asChild
                >
                    <a href={`/${language}/login?redirect_to=${currentPath}&lang=${language}`}>
                        {loginText}
                    </a>
                </Button>
            }
        </div>
    );
}
