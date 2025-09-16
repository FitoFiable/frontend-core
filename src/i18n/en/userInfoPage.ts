import type { UserInfoPageLangType } from '../types/userInfoPage';

export const userInfoPage: UserInfoPageLangType = {
  header: {
    title: 'User Information',
    subtitle: 'View and manage your account details',
    backToDashboard: 'Back to Dashboard'
  },
  basicInfo: {
    title: 'Basic Information',
    userId: 'User ID',
    username: 'Username',
    phoneNumber: 'Phone Number',
    verified: 'Verified',
    notSet: 'Not set'
  },
  emailStatus: {
    title: 'Email Status',
    allowedEmails: 'Allowed Emails',
    confirmedEmails: 'Confirmed Emails',
    emailList: 'Email List',
    configured: 'configured',
    active: 'active',
    status: {
      active: 'Active',
      pending: 'Pending'
    }
  },
  rawData: {
    title: 'Raw User Data',
    viewData: 'View Raw Data'
  }
};
