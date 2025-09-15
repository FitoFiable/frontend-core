export type HomePageLangType = {
  loginText: string;
  logoutText: string;
  common: {
    saving: string;
    checking: string;
  };
  setUserName: {
    title: string;
    label: string;
    placeholder: string;
    button: string;
    setting: string;
    success: string;
    error: string;
  };
  phone: {
    syncCodeSent: string;
    title: string;
    subtitle: string;
    countryCodePlaceholder: string;
    numberPlaceholder: string;
    countryCodeError: string;
    numberError: string;
    save: string;
    cancelChange: string;
    changePhone: string;
    verifyTitle: string;
    verifyHelp: string;
    openWhatsapp: string;
    codeValidTime: string;
    veryfyConfirmHelp: string;
    notVerifiedYet: string;
    whatsappMessageTemplate: string; // use {code} placeholder
    alreadySynced: string;
  };
  userInfo: {
    title: string;
    userId: string;
    name: string;
    userData: string;
  };
  loading: string;
};