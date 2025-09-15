import { useState } from "react";
import { apiSetUserName } from "@/lib/core-api";
import { Button } from "@/components/ui/button";

interface SetUserNameProps {
    onUserNameSet: () => void;
    translations: any;
}

export default function SetUserName({ onUserNameSet, translations }: SetUserNameProps) {
    const [userName, setUserName] = useState("");
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!userName.trim()) return;

        setLoading(true);
        setMessage("");

        try {
            const response = await apiSetUserName(userName.trim());
            if (response.status === "OK") {
                setMessage(translations.setUserName.success);
                setUserName("");
                // Call the callback to refresh user data
                setTimeout(() => {
                    onUserNameSet();
                }, 1000);
            } else {
                setMessage(translations.setUserName.error);
            }
        } catch (error) {
            setMessage(translations.setUserName.error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="w-full max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
            <div className="flex justify-center mb-6">
                <img 
                    src="/fitofiable/fito_question.webp" 
                    alt="Fito Question" 
                    className="w-32 h-32 object-cover"
                    width="128"
                    height="128"
                    style={{aspectRatio: "1/1"}}
                />
            </div>
            <h2 className="text-xl font-semibold mb-4 text-center">{translations.setUserName.title}</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label htmlFor="userName" className="block text-sm font-medium text-gray-700 mb-2">
                        {translations.setUserName.label}
                    </label>
                    <input
                        id="userName"
                        type="text"
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}
                        placeholder={translations.setUserName.placeholder}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        required
                        disabled={loading}
                    />
                </div>
                
                <Button
                    type="submit"
                    className="w-full"
                    disabled={loading || !userName.trim()}
                >
                    {loading ? translations.setUserName.setting : translations.setUserName.button}
                </Button>
                
                {message && (
                    <p className={`text-sm text-center ${
                        message.includes(translations.setUserName.success) ? "text-green-600" : "text-red-600"
                    }`}>
                        {message}
                    </p>
                )}
            </form>
        </div>
    );
}
