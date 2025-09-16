export type EventHistoryPageLangType = {
  title: string;
  subtitle: string;
  backToDashboard: string;
  pleaseLogIn: string;
  goToLogin: string;
  loadMore: string;
  events: {
    emailSynchronized: string;
    phoneVerification: string;
    transactionDetected: string;
    emailAdded: string;
    systemUpdate: string;
    weeklyReport: string;
    emailSyncFailed: string;
    profileUpdated: string;
    payment: string;
    withdrawal: string;
    transfer: string;
  };
  descriptions: {
    emailSyncSuccess: string;
    phoneVerified: string;
    paymentDetected: string;
    emailAddedSuccess: string;
    dashboardUpdated: string;
    weeklySummaryReady: string;
    emailSyncFailedDesc: string;
    usernameChanged: string;
    transferDetected: string;
  };
  statuses: {
    success: string;
    warning: string;
    error: string;
    info: string;
  };
};
