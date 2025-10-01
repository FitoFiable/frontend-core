import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Mail } from 'lucide-react';
import EmailManager from './EmailManager';
import type { userData } from '@/lib/core-api';
import { apiGetUser } from '@/lib/core-api';
import type { EmailManagementPageLangType } from '@/i18n/types/emailManagementPage';

interface EmailManagementPageProps {
  translations?: EmailManagementPageLangType;
  homePageTranslations?: any;
}

export default function EmailManagementPage({ translations, homePageTranslations }: EmailManagementPageProps) {
  const [user, setUser] = useState<userData | null>(null);
  const [loading, setLoading] = useState(true);

  const fetchUserData = async () => {
    const userResponse = await apiGetUser();
    console.log("user", userResponse);
    if (userResponse.status === "OK") {
      setUser(userResponse.data);
    }
  };

  const getLanguageFromPath = () => {
    if (typeof window !== 'undefined') {
      const pathParts = window.location.pathname.split('/');
      return pathParts[1] || 'en';
    }
    return 'en';
  };

  const handleRefresh = () => {
    sessionStorage.setItem('scrollToEmailManager', 'true');
    window.location.reload();
  };

  useEffect(() => {
    const initializePage = async () => {
      setLoading(true);
      await fetchUserData();
      setLoading(false);
    };

    initializePage();
  }, []);

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center gap-4 mt-5 min-h-screen">
        <p>{homePageTranslations?.loading || 'Loading...'}</p>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="flex flex-col items-center justify-center gap-4 mt-5 min-h-screen">
        <p>Please log in to manage your emails.</p>
        <Button onClick={() => window.location.href = '/'}>
          Go to Login
        </Button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-6">
            <Button
              asChild
              variant="outline"
              className="flex items-center gap-2 w-full sm:w-auto"
            >
              <a href={`/${getLanguageFromPath()}`}>
                <ArrowLeft className="h-4 w-4" />
                {translations?.header?.backToDashboard || 'Back to Dashboard'}
              </a>
            </Button>
            <div className="flex-1">
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-gray-100">
                {translations?.header?.title || 'Email Management'}
              </h1>
              <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base">
                {translations?.header?.subtitle || 'Manage your allowed and confirmed emails'}
              </p>
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Email Manager Column */}
          <div className="w-full space-y-6">
            <EmailManager 
              initialEmails={user.userData.allowedEmails || []} 
              confirmedEmails={user.userData.confirmedEmails || []}
              translations={translations}
              onRefresh={handleRefresh}
            />
            
            {/* Fito Image */}
            <div className="flex justify-center">
              <img
                src="/fitofiable/teach_email_sincronization.webp"
                alt="Fito teaching email synchronization"
                className="w-64 h-auto"
              />
            </div>
          </div>

          {/* Help Section */}
          <div className="w-full space-y-6">
            {/* Email Synchronization */}
            <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-blue-900 dark:text-blue-100 mb-4">
                {translations?.emailSync?.title || 'How Email Synchronization Works'}
              </h3>
              <div className="text-blue-800 dark:text-blue-200 space-y-4 text-sm">
                <div>
                  <p className="font-semibold mb-2 text-base">
                    {translations?.emailSync?.step1?.title || 'Step 1: Add Allowed Emails'}
                  </p>
                  <p>
                    {translations?.emailSync?.step1?.description || 'These are email addresses you want to associate with yourFito account. Use the email management form to add them.'}
                  </p>
                </div>
                
                <div>
                  <p className="font-semibold mb-2 text-base">
                    {translations?.emailSync?.step2?.title || 'Step 2: Confirm Email Ownership'}
                  </p>
                  <p>
                    {translations?.emailSync?.step2?.description || 'To activate an email, you must send a confirmation email from that address to go@fitofiable.com with the subject line being your phone number:'}
                  </p>
                  <div className="bg-white dark:bg-gray-800 rounded-md p-3 mt-2 font-mono text-sm border">
                    {translations?.emailSync?.step2?.subjectLabel || 'Subject:'} {user.userData.phoneNumber || 'YOUR_PHONE_NUMBER'}
                  </div>
                  <p className="mt-2 text-sm text-blue-700 dark:text-blue-300">
                    {translations?.emailSync?.step2?.phoneLabel || 'Your phone number:'} <strong>{user.userData.phoneNumber || 'Not set'}</strong>
                  </p>
                  {user.userData.phoneNumber && (
                    <a
                      href={`mailto:go@fitofiable.com?subject=${encodeURIComponent(user.userData.phoneNumber)}`}
                      className="inline-flex items-center gap-2 mt-3 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-md transition-colors"
                    >
                      <Mail className="h-4 w-4" />
                      {translations?.emailSync?.step2?.sendButton || 'Send Confirmation Email'}
                    </a>
                  )}
                </div>
                
                <div>
                  <p className="font-semibold mb-2 text-base">
                    {translations?.emailSync?.step3?.title || 'Step 3: Email Becomes Active'}
                  </p>
                  <p>
                    {translations?.emailSync?.step3?.description || 'Once confirmed, the email becomes "Active" and Fito will automatically process all emails received from that address, including them in your dashboard analytics and financial reports.'}
                  </p>
                </div>
                
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-2">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 bg-orange-500 rounded-full"></span>
                    <span className="text-sm font-medium">
                      {translations?.emailSync?.status?.pending || 'Pending - Waiting for confirmation email'}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                    <span className="text-sm font-medium">
                      {translations?.emailSync?.status?.active || 'Active - Ready to receive emails'}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Gmail Auto-Forwarding Setup */}
            <div className="bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-orange-900 dark:text-orange-100 mb-4">
                {translations?.gmailSetup?.title || 'Set Up Automatic Bank Email Forwarding'}
              </h3>
              <div className="text-orange-800 dark:text-orange-200 space-y-4 text-sm">
                <p className="text-base">
                  {translations?.gmailSetup?.description || 'Configure Gmail to automatically forward bank notifications toFito for seamless financial tracking.'}
                </p>
                
                <div>
                  <p className="font-semibold mb-2 text-base">
                    {translations?.gmailSetup?.step1?.title || 'Step 1: Configure Email Forwarding'}
                  </p>
                  <ol className="list-decimal list-inside space-y-1 ml-2">
                    {translations?.gmailSetup?.step1?.steps?.map((step, index) => (
                      <li key={index}>{step}</li>
                    )) || [
                      'Open Gmail on your computer',
                      'Click the ⚙️ (settings) icon in the top right',
                      'Click "See all settings"',
                      'Click the "Forwarding and POP/IMAP" tab',
                      'Click "Add a forwarding address"',
                      'Enter: go@fitofiable.com',
                      'Click "Next" and verify your identity',
                      'Click "Proceed" to confirm'
                    ].map((step, index) => (
                      <li key={index}>{step}</li>
                    ))}
                  </ol>
                </div>
                
                <div>
                  <p className="font-semibold mb-2 text-base">
                    {translations?.gmailSetup?.step2?.title || 'Step 2: Create Email Filter'}
                  </p>
                  <ol className="list-decimal list-inside space-y-1 ml-2">
                    {translations?.gmailSetup?.step2?.steps?.map((step, index) => (
                      <li key={index}>{step}</li>
                    )) || [
                      'In your inbox, click the 🔍 (search) icon',
                      'Click the filter icon (three horizontal lines) next to the search box',
                      'In the "From" field, create a filter with your bank\'s email addresses'
                    ].map((step, index) => (
                      <li key={index}>{step}</li>
                    ))}
                  </ol>
                  
                  <div className="bg-orange-100 dark:bg-orange-800 rounded-md p-3 mt-2 mb-3">
                    <p className="text-orange-900 dark:text-orange-100 font-semibold text-sm mb-2">
                      {translations?.gmailSetup?.step2?.findEmails?.title || '💡 How to find your bank\'s email addresses:'}
                    </p>
                    <ul className="text-orange-800 dark:text-orange-200 text-xs space-y-1 ml-4">
                      {translations?.gmailSetup?.step2?.findEmails?.tips?.map((tip, index) => (
                        <li key={index}>• {tip}</li>
                      )) || [
                        'Check your bank\'s notification emails in your inbox',
                        'Look at the "From" field of recent bank emails',
                        'Common patterns: notifications@[bank].com, alerts@[bank].com, transacciones@[bank].com',
                        'Copy all email addresses and paste them together using "OR" between each address'
                      ].map((tip, index) => (
                        <li key={index}>• {tip}</li>
                      ))}
                    </ul>
                    <p className="text-orange-800 dark:text-orange-200 text-xs mt-2 font-semibold">
                      {translations?.gmailSetup?.step2?.findEmails?.warning || '⚠️ Important: Paste all email addresses in the same field, separated by "OR" (not in separate fields)'}
                    </p>
                  </div>
                  
                  <div className="bg-orange-100 dark:bg-orange-800 rounded-md p-3 mt-2 font-mono text-xs border overflow-x-auto">
                    <p className="text-orange-900 dark:text-orange-100 font-semibold text-xs mb-2">
                      {translations?.gmailSetup?.step2?.example?.title || 'Example for Colombian banks (customize for your banks):'}
                    </p>
                    <code>
                      {translations?.gmailSetup?.step2?.example?.banks || 'notificaciones@bancolombia.com.co OR alertas@bancolombia.com.co OR transacciones@bancolombia.com.co OR notificaciones@bancodebogota.com.co OR alertas@bancodebogota.com.co OR transacciones@bancodebogota.com.co OR notificaciones@davivienda.com OR alertas@davivienda.com OR transacciones@davivienda.com OR notificaciones@bbva.com.co OR alertas@bbva.com.co OR transacciones@bbva.com.co OR notificaciones@bancopopular.com.co OR alertas@bancopopular.com.co OR notificaciones@avvillas.com.co OR alertas@avvillas.com.co OR notificaciones@bancajasocial.com.co OR alertas@bancajasocial.com.co OR notificaciones@scotiabankcolpatria.com OR alertas@scotiabankcolpatria.com OR notificaciones@bancoagrario.gov.co OR alertas@bancoagrario.gov.co OR notificaciones@nequi.com.co OR alertas@nequi.com.co'}
                    </code>
                  </div>
                  
                  <ol className="list-decimal list-inside space-y-1 ml-2 mt-3" start={4}>
                    <li>Click "Create filter"</li>
                    <li>Check the "Forward it to:" box</li>
                    <li>Select <code className="bg-orange-100 dark:bg-orange-800 px-1 rounded">go@fitofiable.com</code></li>
                    <li>Click "Create filter"</li>
                  </ol>
                </div>
                
                <div className="bg-orange-100 dark:bg-orange-800 rounded-md p-3 mt-4">
                  <p className="font-semibold text-orange-900 dark:text-orange-100 mb-1">
                    {translations?.gmailSetup?.success?.title || '✅ All Set!'}
                  </p>
                  <p className="text-orange-800 dark:text-orange-200 text-xs">
                    {translations?.gmailSetup?.success?.description || 'All bank notifications will now be automatically forwarded toFito.'} 
                    <strong>{translations?.gmailSetup?.success?.time || 'Total setup time: 3-5 minutes'}</strong>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
