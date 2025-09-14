import { apiHealthCheck, apiGetUser } from "@/lib/core-api";
import { useEffect, useState } from "react";

import type { userData } from "@/lib/core-api";
import { Button } from "@/components/ui/button";

export default function LoginLogout({ loginText, logoutText }: { loginText: string, logoutText: string }) {

    const [user, setUser] = useState<userData | null>(null);

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
                        onClick={() => {
                            window.location.href = `/logout?redirect_to=${window.location.pathname}&lang=${localStorage.getItem('language')}`;
                        }}
                    >
                        {logoutText}
                    </Button>
                </> : 
                <Button
                    className="w-32" 
                    onClick={() => {
                        window.location.href = `/${localStorage.getItem('language')}/login?redirect_to=${window.location.pathname}&lang=${localStorage.getItem('language')}`;
                    }}
                >
                    {loginText}
                </Button>
            }
        </div>
    );
}
