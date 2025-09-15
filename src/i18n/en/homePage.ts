import type { HomePageLangType } from '../types/homePage';

export const homePage: HomePageLangType = {
  loginText: 'Login',
  logoutText: 'Logout',
  common: {
    saving: 'Saving...',
    checking: 'Checking...'
  },
  setUserName: {
    title: 'Hi, how would you like me to call you?',
    label: 'Your name:',
    placeholder: 'Enter your name',
    button: 'Save',
    setting: 'Saving...',
    success: 'Perfect! Nice to meet you!',
    error: 'Oops! Something went wrong. Please try again.'
  },
  phone: {
    syncCodeSent: 'We sent you a sync code.',
    title: 'Let’s connect your phone',
    subtitle: 'Fito will use your number to keep your experience in sync.',
    countryCodePlaceholder: '+1',
    numberPlaceholder: '555 123 4567',
    countryCodeError: 'Country code must be like +1, +44, +57.',
    numberError: 'Number should contain 6-14 digits.',
    save: 'Save phone and generate code',
    cancelChange: 'Cancel change',
    changePhone: 'Change phone',
    verifyTitle: 'Please, send me this code via WhatsApp',
    verifyHelp: "You can use the 'Send in WhatsApp' button below or send it directly to +57 310 810 8201",
    openWhatsapp: 'Send in WhatsApp',
    codeValidTime: 'This code is valid for 5 minutes.',
    veryfyConfirmHelp: 'After sending the code via WhatsApp, click the button below to confirm.',
    notVerifiedYet: 'We didn’t detect the verification yet. Please try again.',
    whatsappMessageTemplate: 'Hi Fito, this is my sync code: {code}',
    alreadySynced: 'I already synchronized'
  },
  userInfo: {
    title: 'User Information',
    userId: 'User ID',
    name: 'Name',
    userData: 'User Data'
  },
  loading: 'Loading dashboard...'
};
