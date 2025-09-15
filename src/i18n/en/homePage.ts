import type { HomePageLangType } from '../types/homePage';

export const homePage: HomePageLangType = {
  loginText: 'Login',
  logoutText: 'Logout',
  setUserName: {
    title: 'Hi, how would you like me to call you?',
    label: 'Your name:',
    placeholder: 'Enter your name',
    button: 'Save',
    setting: 'Saving...',
    success: 'Perfect! Nice to meet you!',
    error: 'Oops! Something went wrong. Please try again.'
  },
  userInfo: {
    title: 'User Information',
    userId: 'User ID',
    name: 'Name',
    userData: 'User Data'
  },
  loading: 'Loading dashboard...'
};
