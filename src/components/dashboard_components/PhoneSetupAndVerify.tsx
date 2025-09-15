import { useEffect, useMemo, useState } from "react";
import type { userData } from "@/lib/core-api";
import { apiCreateSyncCode, apiSetPhoneNumber, apiSetUserLanguage } from "@/lib/core-api";
import { Button } from "@/components/ui/button";

interface PhoneSetupAndVerifyProps {
    user: userData;
    translations: any;
    onRefresh: () => void;
}

export default function PhoneSetupAndVerify({ user, translations, onRefresh }: PhoneSetupAndVerifyProps) {
    const [countryCode, setCountryCode] = useState<string>("+1");
    const [localNumber, setLocalNumber] = useState<string>("");
    const [submitting, setSubmitting] = useState<boolean>(false);
    const [infoMessage, setInfoMessage] = useState<string>("");
    const [ccTouched, setCcTouched] = useState<boolean>(false);
    const [lnTouched, setLnTouched] = useState<boolean>(false);
    const [currentSyncCode, setCurrentSyncCode] = useState<string>("");
    const [editMode, setEditMode] = useState<boolean>(false);
    const [verifyNotice, setVerifyNotice] = useState<string | null>(null);

    const clearVerifyingParam = () => {
        if (typeof window === 'undefined') return;
        const url = new URL(window.location.href);
        if (url.searchParams.has('verifying')) {
            url.searchParams.delete('verifying');
            window.history.replaceState({}, '', url.toString());
        }
    };

    const ccSanitized = useMemo(() => countryCode.replace(/\s|-/g, ""), [countryCode]);
    const lnSanitized = useMemo(() => localNumber.replace(/\s|-/g, ""), [localNumber]);

    const isCcValid = useMemo(() => /^\+\d{1,3}$/.test(ccSanitized), [ccSanitized]);
    const isLnValid = useMemo(() => /^\d{6,14}$/.test(lnSanitized), [lnSanitized]);

    const fullNumber = useMemo(() => {
        const cc = ccSanitized.trim();
        const ln = lnSanitized.trim();
        if (!cc || !ln) return "";
        return `${cc}${ln}`;
    }, [ccSanitized, lnSanitized]);

    const handleSavePhone = async () => {
        if (!fullNumber) return;
        setSubmitting(true);
        setInfoMessage("");
        try {
            const setResp = await apiSetPhoneNumber(fullNumber);
            if (setResp.status === "OK") {
                // Send current UI language to backend (from localStorage)
                try {
                    const lang = typeof window !== 'undefined' ? (localStorage.getItem('language') || 'en') : 'en';
                    void apiSetUserLanguage(lang);
                } catch (_e) {
                    // ignore language set errors silently
                }
                const syncResp = await apiCreateSyncCode();
                if (syncResp.status === "OK") {
                    setInfoMessage(translations.phone?.syncCodeSent || "We sent you a sync code.");
                }
                onRefresh();
                setEditMode(false);
            } else if (setResp.status === "ERROR") {
                setInfoMessage(setResp.message || "Failed to set phone number.");
            }
        } finally {
            setSubmitting(false);
        }
    };

    const handleVerify = async () => {
        // Reload page with a marker so we can show a notice if still unverified
        if (typeof window !== 'undefined') {
            const url = new URL(window.location.href);
            url.searchParams.set('verifying', '1');
            window.location.replace(url.toString());
            return;
        }
        onRefresh();
    };

    // On mount or when user has a phone but not verified, request a sync code and show it
    useEffect(() => {
        const maybeFetchCode = async () => {
            if (user.userData?.phoneNumber && !user.userData?.phoneVerified) {
                const resp = await apiCreateSyncCode();
                if (resp.status === "OK" && resp.data?.code) {
                    setCurrentSyncCode(resp.data.code);
                }
            }
        };
        maybeFetchCode();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [user.userData?.phoneNumber, user.userData?.phoneVerified]);

    // If page was reloaded in a verifying flow and still not verified, show a notice
    useEffect(() => {
        if (typeof window === 'undefined') return;
        const url = new URL(window.location.href);
        const wasVerifying = url.searchParams.get('verifying') === '1';
        if (wasVerifying) {
            if (user.userData?.phoneVerified) {
                // Clean up the query param silently when verified
                url.searchParams.delete('verifying');
                window.history.replaceState({}, '', url.toString());
            } else {
                setVerifyNotice(translations.phone?.notVerifiedYet || 'We didn’t detect the verification yet. Please try again.');
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [user.userData?.phoneVerified]);

    if (!user.userData?.phoneNumber || editMode) {
        return (
            <div className="space-y-5">
                <div className="flex flex-col items-center text-center gap-3">
                    <img src="/fitofiable/aking_for_phone_number.webp" alt="Fito asking for your phone number" className="w-40 h-40 object-contain" />
                    <div>
                        <h2 className="text-xl font-semibold">{translations.phone?.title || 'Let’s connect your phone'}</h2>
                        <p className="text-sm text-muted-foreground">{translations.phone?.subtitle || 'Fito will use your number to keep your experience in sync.'}</p>
                    </div>
                </div>
                <div className="flex gap-2">
                    <input
                        className="w-24 border px-3 py-2 rounded bg-card text-card-foreground"
                        placeholder={translations.phone?.countryCodePlaceholder || '+1'}
                        value={countryCode}
                        onChange={(e) => setCountryCode(e.target.value)}
                        onBlur={() => setCcTouched(true)}
                        aria-invalid={ccTouched && !isCcValid}
                        disabled={submitting}
                    />
                    <input
                        className="flex-1 border px-3 py-2 rounded bg-card text-card-foreground"
                        placeholder={translations.phone?.numberPlaceholder || '555 123 4567'}
                        value={localNumber}
                        onChange={(e) => setLocalNumber(e.target.value)}
                        onBlur={() => setLnTouched(true)}
                        aria-invalid={lnTouched && !isLnValid}
                        disabled={submitting}
                    />
                </div>
                {(ccTouched && !isCcValid) && (
                    <p className="text-xs text-destructive-foreground">{translations.phone?.countryCodeError || 'Country code must be like +1, +44, +57.'}</p>
                )}
                {(lnTouched && !isLnValid) && (
                    <p className="text-xs text-destructive-foreground">{translations.phone?.numberError || 'Number should contain 6-14 digits.'}</p>
                )}
                <Button className="w-full" onClick={handleSavePhone} disabled={submitting || !isCcValid || !isLnValid}>
                    {submitting ? (translations.common?.saving || 'Saving...') : (translations.phone?.save || 'Save phone and send code')}
                </Button>
                {user.userData?.phoneNumber && !submitting && (
                    <button
                        type="button"
                        className="text-sm text-muted-foreground underline"
                        onClick={() => setEditMode(false)}
                    >
                        {translations.phone?.cancelChange || 'Cancel change'}
                    </button>
                )}
                {infoMessage && (
                    <p className="text-sm text-gray-600">{infoMessage}</p>
                )}
            </div>
        );
    }

    if (!user.userData?.phoneVerified) {
        return (
            <div className="space-y-6">
                {verifyNotice && (
                    <div className="rounded p-3 text-sm bg-destructive/10 border border-destructive text-destructive-foreground">
                        {verifyNotice}
                    </div>
                )}
                <button
                    type="button"
                    className="text-sm text-muted-foreground underline"
                    onClick={() => {
                        clearVerifyingParam();
                        setVerifyNotice(null);
                        setEditMode(true);
                    }}
                >
                    {translations.phone?.changePhone || 'Change phone'}
                </button>
                <div className="flex items-start justify-between">
                    <div className="flex flex-col items-center text-center gap-3 flex-1">
                        <img src="/fitofiable/code_phone.webp" alt="Fito with a verification code" className="w-40 h-40 object-contain" />
                        <div>
                            <h2 className="text-xl font-semibold pb-2">{translations.phone?.verifyTitle || 'Please, send me this code via WhatsApp'}</h2>
                            <p className="text-sm text-muted-foreground">{translations.phone?.verifyHelp || "You can use the 'Send in WhatsApp' button below or send it directly to +57 310 810 8201"}</p>
                        </div>
                    </div>
                </div>
                {currentSyncCode && (
                    <div className="p-4 rounded-lg bg-secondary/60 text-card-foreground flex flex-col gap-3">
                        <div className="flex items-center justify-between gap-3">
                            <div className="flex-1">
                                <p className="text-xs uppercase tracking-wider text-muted-foreground">Your sync code</p>
                                <div className="font-mono text-2xl tracking-widest select-all">{currentSyncCode}</div>
                            </div>
                            <div className="flex gap-2">
                                <Button asChild>
                                    <a
                                        href={`https://wa.me/573108108201?text=${encodeURIComponent((translations.phone?.whatsappMessageTemplate || 'Hi Fito, this is my sync code: {code}').replace('{code}', currentSyncCode))}`}
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        {translations.phone?.openWhatsapp || 'Send in WhatsApp'}
                                    </a>
                                </Button>

                            </div>
                        </div>
                        <p className="text-xs text-muted-foreground">{translations.phone?.codeValidTime || 'This code is valid for 5 minutes.'}</p>
                    </div>
                )}

                <div>
                    <p className="text-sm text-muted-foreground">{translations.phone?.veryfyConfirmHelp || "After sending the code via WhatsApp, click the button below to confirm."}</p>
                </div>
                <Button className="w-full" onClick={handleVerify} disabled={submitting}>
                    {submitting ? (translations.common?.checking || 'Checking...') : (translations.phone?.alreadySynced || 'I already synchronized')}
                </Button>
                {infoMessage && (
                    <p className="text-sm text-muted-foreground">{infoMessage}</p>
                )}
            </div>
        );
    }

    return null;
}


