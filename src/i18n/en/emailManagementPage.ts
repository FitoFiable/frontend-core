import type { EmailManagementPageLangType } from '../types/emailManagementPage';

export const emailManagementPage: EmailManagementPageLangType = {
  header: {
    title: 'Email Management',
    subtitle: 'Manage your allowed and confirmed emails',
    backToDashboard: 'Back to Dashboard'
  },
  emailSync: {
    title: 'How Email Synchronization Works',
    step1: {
      title: 'Step 1: Add Allowed Emails',
      description: 'These are email addresses you want to associate with yourFito account. Use the email management form to add them.'
    },
    step2: {
      title: 'Step 2: Confirm Email Ownership',
      description: 'To activate an email, you must send a confirmation email from that address to go@fitofiable.com with the subject line being your phone number:',
      subjectLabel: 'Subject:',
      phoneLabel: 'Your phone number:',
      sendButton: 'Send Confirmation Email'
    },
    step3: {
      title: 'Step 3: Email Becomes Active',
      description: 'Once confirmed, the email becomes "Active" and Fito will automatically process all emails received from that address, including them in your dashboard analytics and financial reports.'
    },
    status: {
      pending: 'Pending - Waiting for confirmation email',
      active: 'Active - Ready to receive emails'
    }
  },
  gmailSetup: {
    title: 'Set Up Automatic Bank Email Forwarding',
    description: 'Configure Gmail to automatically forward bank notifications toFito for seamless financial tracking.',
    step1: {
      title: 'Step 1: Configure Email Forwarding',
      steps: [
        'Open Gmail on your computer',
        'Click the ⚙️ (settings) icon in the top right',
        'Click "See all settings"',
        'Click the "Forwarding and POP/IMAP" tab',
        'Click "Add a forwarding address"',
        'Enter: go@fitofiable.com',
        'Click "Next" and verify your identity',
        'Click "Proceed" to confirm'
      ]
    },
    step2: {
      title: 'Step 2: Create Email Filter',
      steps: [
        'In your inbox, click the 🔍 (search) icon',
        'Click the filter icon (three horizontal lines) next to the search box',
        'In the "From" field, create a filter with your bank\'s email addresses'
      ],
      findEmails: {
        title: '💡 How to find your bank\'s email addresses:',
        tips: [
          'Check your bank\'s notification emails in your inbox',
          'Look at the "From" field of recent bank emails',
          'Common patterns: notifications@[bank].com, alerts@[bank].com, transacciones@[bank].com',
          'Copy all email addresses and paste them together using "OR" between each address'
        ],
        warning: '⚠️ Important: Paste all email addresses in the same field, separated by "OR" (not in separate fields)'
      },
      example: {
        title: 'Example for US banks (customize for your banks):',
        banks: 'notifications@chase.com OR alerts@chase.com OR noreply@chase.com OR notifications@bankofamerica.com OR alerts@bankofamerica.com OR noreply@bankofamerica.com OR notifications@wellsfargo.com OR alerts@wellsfargo.com OR noreply@wellsfargo.com OR notifications@citibank.com OR alerts@citibank.com OR noreply@citibank.com OR notifications@usbank.com OR alerts@usbank.com OR noreply@usbank.com'
      }
    },
    success: {
      title: '✅ All Set!',
      description: 'All bank notifications will now be automatically forwarded toFito.',
      time: 'Total setup time: 3-5 minutes'
    }
  }
};
