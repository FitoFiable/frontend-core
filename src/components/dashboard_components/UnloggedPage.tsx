import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

interface UnloggedPageProps {
    loginText: string;
}

export default function UnloggedPage({ loginText }: UnloggedPageProps) {
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
        <div className="grid place-items-center h-screen content-center">
            <img 
                src="/fitofiable/fito.webp" 
                alt="Fitofiable Logo" 
                className="w-40 h-40 object-cover"
                width="160"
                height="160"
                style={{aspectRatio: "1/1"}}
            />
            <Button
                className="w-32 mt-8"
                asChild
            >
                <a href={`/${language}/login?redirect_to=${currentPath}&lang=${language}`}>
                    {loginText}
                </a>
            </Button>
        </div>
    );
}
