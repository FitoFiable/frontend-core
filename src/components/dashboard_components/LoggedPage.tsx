import { useEffect, useState } from "react";
import type { userData } from "@/lib/core-api";
import { Button } from "@/components/ui/button";
import SetUserName from "./SetUserName";

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

    return (
        <div className="relative min-h-screen">
            {/* Logout button in bottom right corner */}
            <div className="absolute bottom-4 right-4">
                <Button
                    className="w-24"
                    asChild
                >
                    <a href={`/logout?redirect_to=${currentPath}&lang=${language}`}>
                        {logoutText}
                    </a>
                </Button>
            </div>

            {/* Main content centered */}
            <div className="flex flex-col items-center justify-center min-h-screen">
                {!user.userData?.userName ? (
                    <SetUserName onUserNameSet={onUserNameSet} translations={translations} />
                ) : (
                    <div className="mt-8 p-4 border rounded-lg max-w-md w-full">
                        <h2 className="text-xl font-semibold mb-4">{translations.userInfo.title}</h2>
                        <div className="space-y-2">
                            <p><strong>{translations.userInfo.userId}:</strong> {user.userID}</p>
                            <p><strong>{translations.userInfo.name}:</strong> {user.userData.userName}</p>
                            <p><strong>{translations.userInfo.userData}:</strong> {JSON.stringify(user.userData, null, 2)}</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
