import type { EventHistoryPageLangType } from '../types/eventHistoryPage';

export const eventHistoryPage: EventHistoryPageLangType = {
  title: 'Event History',
  subtitle: 'View your account activity and system events',
  backToDashboard: 'Back to Dashboard',
  pleaseLogIn: 'Please log in to view event history.',
  goToLogin: 'Go to Login',
  loadMore: 'Load More Events',
  events: {
    emailSynchronized: 'Email Synchronized',
    phoneVerification: 'Phone Verification',
    transactionDetected: 'Transaction Detected',
    emailAdded: 'Email Added',
    systemUpdate: 'System Update',
    weeklyReport: 'Weekly Report',
    emailSyncFailed: 'Email Synchronization Failed',
    profileUpdated: 'Profile Updated',
    payment: 'Payment',
    withdrawal: 'Withdrawal',
    transfer: 'Transfer'
  },
  descriptions: {
    emailSyncSuccess: 'Successfully synchronized with {email}',
    phoneVerified: 'Phone number {phone} verified successfully',
    paymentDetected: 'Payment of {amount} to {merchant}',
    emailAddedSuccess: 'Added {email} to allowed emails',
    dashboardUpdated: 'Dashboard updated to version {version}',
    weeklySummaryReady: 'Your weekly financial summary is ready',
    emailSyncFailedDesc: 'Failed to sync with {email} - retrying...',
    usernameChanged: 'Username changed to "{username}"',
    transferDetected: 'Transfer of {amount} to {recipient}'
  },
  statuses: {
    success: 'Success',
    warning: 'Warning',
    error: 'Error',
    info: 'Info'
  }
};
