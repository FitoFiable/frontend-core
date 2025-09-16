import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import type { userData } from '@/lib/core-api';
import { apiGetUser } from '@/lib/core-api';
import { ArrowLeft, User, Mail, Phone, CheckCircle, Clock } from 'lucide-react';
import type { UserInfoPageLangType } from '@/i18n/types/userInfoPage';

interface UserInfoPageProps {
  translations?: UserInfoPageLangType;
  homePageTranslations?: any;
}

export default function UserInfoPage({ translations, homePageTranslations }: UserInfoPageProps) {
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
        <p>Please log in to view user information.</p>
        <Button onClick={() => window.location.href = '/'}>
          Go to Login
        </Button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50/50 dark:bg-gray-900/50">
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
                {translations?.header?.title || 'User Information'}
              </h1>
              <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base">
                {translations?.header?.subtitle || 'View and manage your account details'}
              </p>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Basic Information */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="h-5 w-5" />
                {translations?.basicInfo?.title || 'Basic Information'}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 gap-4">
                <div>
                  <label className="text-sm font-medium text-gray-500 dark:text-gray-400">
                    {translations?.basicInfo?.userId || 'User ID'}
                  </label>
                  <p className="text-lg font-semibold text-gray-900 dark:text-gray-100 mt-1">
                    {user.userID}
                  </p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-500 dark:text-gray-400">
                    {translations?.basicInfo?.username || 'Username'}
                  </label>
                  <p className="text-lg font-semibold text-gray-900 dark:text-gray-100 mt-1">
                    {user.userData.userName || (translations?.basicInfo?.notSet || 'Not set')}
                  </p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-500 dark:text-gray-400">
                    {translations?.basicInfo?.phoneNumber || 'Phone Number'}
                  </label>
                  <div className="flex items-center gap-2 mt-1">
                    <p className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                      {user.userData.phoneNumber || (translations?.basicInfo?.notSet || 'Not set')}
                    </p>
                    {user.userData.phoneVerified && (
                      <div className="flex items-center gap-1 text-green-600 dark:text-green-400">
                        <CheckCircle className="h-4 w-4" />
                        <span className="text-sm font-medium">
                          {translations?.basicInfo?.verified || 'Verified'}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Email Status */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Mail className="h-5 w-5" />
                {translations?.emailStatus?.title || 'Email Status'}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div>
                  <label className="text-sm font-medium text-gray-500 dark:text-gray-400">
                    {translations?.emailStatus?.allowedEmails || 'Allowed Emails'}
                  </label>
                  <p className="text-lg font-semibold text-gray-900 dark:text-gray-100 mt-1">
                    {user.userData.allowedEmails?.length || 0} {translations?.emailStatus?.configured || 'configured'}
                  </p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-500 dark:text-gray-400">
                    {translations?.emailStatus?.confirmedEmails || 'Confirmed Emails'}
                  </label>
                  <p className="text-lg font-semibold text-gray-900 dark:text-gray-100 mt-1">
                    {user.userData.confirmedEmails?.length || 0} {translations?.emailStatus?.active || 'active'}
                  </p>
                </div>
                {user.userData.allowedEmails && user.userData.allowedEmails.length > 0 && (
                  <div className="mt-4">
                    <label className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2 block">
                      {translations?.emailStatus?.emailList || 'Email List'}
                    </label>
                    <div className="space-y-2 max-h-40 overflow-y-auto">
                      {user.userData.allowedEmails.map((email, index) => {
                        const isConfirmed = user.userData.confirmedEmails?.includes(email) || false;
                        return (
                          <div
                            key={index}
                            className={`flex items-center justify-between p-2 rounded-lg ${
                              isConfirmed
                                ? 'bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800'
                                : 'bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800'
                            }`}
                          >
                            <span className="text-sm font-medium text-gray-900 dark:text-gray-100">
                              {email}
                            </span>
                            <div className="flex items-center gap-1">
                              {isConfirmed ? (
                                <>
                                  <CheckCircle className="h-3 w-3 text-green-600 dark:text-green-400" />
                                  <span className="text-xs text-green-600 dark:text-green-400 font-medium">
                                    {translations?.emailStatus?.status?.active || 'Active'}
                                  </span>
                                </>
                              ) : (
                                <>
                                  <Clock className="h-3 w-3 text-orange-500 dark:text-orange-400" />
                                  <span className="text-xs text-orange-500 dark:text-orange-400 font-medium">
                                    {translations?.emailStatus?.status?.pending || 'Pending'}
                                  </span>
                                </>
                              )}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Raw Data Section */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>
              {translations?.rawData?.title || 'Raw User Data'}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <details className="group">
              <summary className="cursor-pointer text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 group-open:text-gray-700 dark:group-open:text-gray-300">
                {translations?.rawData?.viewData || 'View Raw Data'}
              </summary>
              <pre className="mt-4 p-4 bg-gray-100 dark:bg-gray-800 rounded-lg text-xs overflow-auto text-gray-900 dark:text-gray-100">
                {JSON.stringify(user.userData, null, 2)}
              </pre>
            </details>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
