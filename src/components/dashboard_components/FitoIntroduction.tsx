import { useState } from "react";
import { Button } from "@/components/ui/button";
import { MessageSquare, Camera, Mic, FileText, Mail, File, ExternalLink, X, Monitor } from 'lucide-react';
import type { FitoIntroductionLangType } from "@/i18n/types/fitoIntroduction";

// Import all translations
import { fitoIntroduction as enTranslations } from "@/i18n/en/fitoIntroduction";
import { fitoIntroduction as esTranslations } from "@/i18n/es/fitoIntroduction";
import { fitoIntroduction as frTranslations } from "@/i18n/fr/fitoIntroduction";
import { fitoIntroduction as deTranslations } from "@/i18n/de/fitoIntroduction";
import { fitoIntroduction as itTranslations } from "@/i18n/it/fitoIntroduction";
import { fitoIntroduction as ptTranslations } from "@/i18n/pt/fitoIntroduction";

interface FitoIntroductionProps {
    language: string;
    showCloseButton?: boolean;
    onClose?: () => void;
}

export default function FitoIntroduction({ language, showCloseButton = true, onClose }: FitoIntroductionProps) {
    const [isVisible, setIsVisible] = useState<boolean>(true);

    const getTranslations = (lang: string): FitoIntroductionLangType => {
        switch (lang) {
            case 'es':
                return esTranslations;
            case 'fr':
                return frTranslations;
            case 'de':
                return deTranslations;
            case 'it':
                return itTranslations;
            case 'pt':
                return ptTranslations;
            case 'en':
            default:
                return enTranslations;
        }
    };

    const translations = getTranslations(language);

    const handleClose = () => {
        setIsVisible(false);
        onClose?.();
    };

    if (!isVisible) return null;

    return (
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl p-6 border border-blue-200 dark:border-blue-700/50 relative">
            {showCloseButton && (
                <Button
                    variant="ghost"
                    size="sm"
                    onClick={handleClose}
                    className="absolute top-3 right-3 h-8 w-8 p-0 rounded-full hover:bg-blue-100 dark:hover:bg-blue-800/30"
                >
                    <X className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                </Button>
            )}
            
            <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0 hidden sm:block">
                    <img
                        src="/fitofiable/fito-hello.webp"
                        alt="Fito AI Assistant"
                        className="w-24 h-24 rounded-full"
                    />
                </div>
                <div className="flex-1">
                    <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                        {translations.meetFito.title}
                    </h2>
                    <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                        {translations.meetFito.description}
                    </p>
                </div>
            </div>

            {/* Transaction Input Methods */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-4">
                <div className="flex items-center gap-2 p-3 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
                    <Camera className="h-5 w-5 text-blue-600" />
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{translations.meetFito.receiptPhotos}</span>
                </div>
                <div className="flex items-center gap-2 p-3 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
                    <Monitor className="h-5 w-5 text-indigo-600" />
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{translations.meetFito.screenshotReceipts}</span>
                </div>
                <div className="flex items-center gap-2 p-3 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
                    <MessageSquare className="h-5 w-5 text-green-600" />
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{translations.meetFito.textMessages}</span>
                </div>
                <div className="flex items-center gap-2 p-3 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
                    <Mic className="h-5 w-5 text-purple-600" />
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{translations.meetFito.audioMessages}</span>
                </div>
                <div className="flex items-center gap-2 p-3 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
                    <Mail className="h-5 w-5 text-orange-600" />
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{translations.meetFito.emailReceipts}</span>
                </div>
                <div className="flex items-center gap-2 p-3 bg-gray-100 dark:bg-gray-700 rounded-lg border border-gray-300 dark:border-gray-600 opacity-60">
                    <File className="h-5 w-5 text-gray-400" />
                    <div className="flex flex-col">
                        <span className="text-sm font-medium text-gray-500 dark:text-gray-400">{translations.meetFito.pdfDocuments}</span>
                        <span className="text-xs text-gray-400 dark:text-gray-500">{translations.meetFito.comingSoon}</span>
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
                        href={`https://wa.me/573108108201?text=${encodeURIComponent(translations.meetFito.whatsappMessage)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2"
                    >
                        <MessageSquare className="h-4 w-4" />
                        {translations.meetFito.goToWhatsapp}
                        <ExternalLink className="h-3 w-3" />
                    </a>
                </Button>
                <Button
                    asChild
                    variant="outline"
                    className="flex-1 border-orange-200 text-orange-600 hover:bg-orange-50 dark:border-orange-700 dark:text-orange-400 dark:hover:bg-orange-900/20"
                >
                    <a
                        href={`mailto:go@fitofiable.com?subject=${encodeURIComponent(translations.meetFito.emailSubject)}&body=${encodeURIComponent(translations.meetFito.emailBody)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2"
                    >
                        <Mail className="h-4 w-4" />
                        {translations.meetFito.goToEmail}
                        <ExternalLink className="h-3 w-3" />
                    </a>
                </Button>
            </div>

            <div className="bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-700/50 rounded-lg p-3">
                <div className="flex items-start gap-2">
                    <Mail className="h-4 w-4 text-orange-600 dark:text-orange-400 flex-shrink-0 mt-0.5" />
                    <div>
                        <p className="text-sm text-orange-800 dark:text-orange-200 font-medium mb-1">
                            {translations.meetFito.emailSetupRequired}
                        </p>
                        <p className="text-xs text-orange-700 dark:text-orange-300">
                            {translations.meetFito.emailSetupDescription}
                            <a href={`/${language}/email-management`} className="underline hover:no-underline ml-1">
                                {translations.meetFito.emailManagementPage}
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
