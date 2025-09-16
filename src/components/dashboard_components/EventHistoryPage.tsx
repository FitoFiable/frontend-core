import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import type { userData } from '@/lib/core-api';
import { apiGetUser } from '@/lib/core-api';
import { ArrowLeft, Clock, Mail, Phone, User, CreditCard, AlertCircle, CheckCircle, Info } from 'lucide-react';

interface EventHistoryPageProps {
  homePageTranslations?: any;
}

interface HistoryEvent {
  id: string;
  type: 'email' | 'phone' | 'user' | 'payment' | 'system' | 'notification';
  title: string;
  description: string;
  timestamp: string;
  status: 'success' | 'warning' | 'error' | 'info';
}

export default function EventHistoryPage({ homePageTranslations }: EventHistoryPageProps) {
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

  // Dummy history events
  const historyEvents: HistoryEvent[] = [
    {
      id: '1',
      type: 'email',
      title: 'Email Synchronized',
      description: 'Successfully synchronized with notifications@bancolombia.com.co',
      timestamp: '2024-01-15 14:30:25',
      status: 'success'
    },
    {
      id: '2',
      type: 'phone',
      title: 'Phone Verification',
      description: 'Phone number +57 310 123 4567 verified successfully',
      timestamp: '2024-01-15 14:25:10',
      status: 'success'
    },
    {
      id: '3',
      type: 'payment',
      title: 'Transaction Detected',
      description: 'Payment of $150,000 COP to Supermercado ABC',
      timestamp: '2024-01-15 12:45:33',
      status: 'info'
    },
    {
      id: '4',
      type: 'email',
      title: 'Email Added',
      description: 'Added alertas@davivienda.com to allowed emails',
      timestamp: '2024-01-15 10:20:15',
      status: 'info'
    },
    {
      id: '5',
      type: 'system',
      title: 'System Update',
      description: 'Dashboard updated to version 2.1.0',
      timestamp: '2024-01-14 16:00:00',
      status: 'info'
    },
    {
      id: '6',
      type: 'notification',
      title: 'Weekly Report',
      description: 'Your weekly financial summary is ready',
      timestamp: '2024-01-14 09:00:00',
      status: 'info'
    },
    {
      id: '7',
      type: 'payment',
      title: 'Transaction Detected',
      description: 'Withdrawal of $50,000 COP from ATM',
      timestamp: '2024-01-13 18:30:45',
      status: 'info'
    },
    {
      id: '8',
      type: 'email',
      title: 'Email Synchronization Failed',
      description: 'Failed to sync with transacciones@bbva.com.co - retrying...',
      timestamp: '2024-01-13 15:15:20',
      status: 'warning'
    },
    {
      id: '9',
      type: 'user',
      title: 'Profile Updated',
      description: 'Username changed to "Juan Pérez"',
      timestamp: '2024-01-13 11:30:00',
      status: 'success'
    },
    {
      id: '10',
      type: 'payment',
      title: 'Transaction Detected',
      description: 'Transfer of $200,000 COP to María García',
      timestamp: '2024-01-12 14:20:10',
      status: 'info'
    }
  ];

  const getEventIcon = (type: string) => {
    switch (type) {
      case 'email':
        return <Mail className="h-4 w-4" />;
      case 'phone':
        return <Phone className="h-4 w-4" />;
      case 'user':
        return <User className="h-4 w-4" />;
      case 'payment':
        return <CreditCard className="h-4 w-4" />;
      case 'system':
        return <AlertCircle className="h-4 w-4" />;
      case 'notification':
        return <Info className="h-4 w-4" />;
      default:
        return <Clock className="h-4 w-4" />;
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'success':
        return <CheckCircle className="h-4 w-4 text-green-500" />;
      case 'warning':
        return <AlertCircle className="h-4 w-4 text-yellow-500" />;
      case 'error':
        return <AlertCircle className="h-4 w-4 text-red-500" />;
      case 'info':
        return <Info className="h-4 w-4 text-blue-500" />;
      default:
        return <Clock className="h-4 w-4 text-gray-500" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'success':
        return 'border-l-green-500 bg-green-50 dark:bg-green-900/20';
      case 'warning':
        return 'border-l-yellow-500 bg-yellow-50 dark:bg-yellow-900/20';
      case 'error':
        return 'border-l-red-500 bg-red-50 dark:bg-red-900/20';
      case 'info':
        return 'border-l-blue-500 bg-blue-50 dark:bg-blue-900/20';
      default:
        return 'border-l-gray-500 bg-gray-50 dark:bg-gray-800/50';
    }
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
        <p>Please log in to view event history.</p>
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
                Back to Dashboard
              </a>
            </Button>
            <div className="flex-1">
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-gray-100">
                Event History
              </h1>
              <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">
                View your account activity and system events
              </p>
            </div>
          </div>
        </div>

        {/* Event History List */}
        <div className="space-y-4">
          {historyEvents.map((event) => (
            <Card
              key={event.id}
              className={`border-l-4 ${getStatusColor(event.status)} transition-all hover:shadow-md`}
            >
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 mt-1">
                    {getEventIcon(event.type)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                        {event.title}
                      </h3>
                      <div className="flex items-center gap-2">
                        {getStatusIcon(event.status)}
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                          {event.timestamp}
                        </span>
                      </div>
                    </div>
                    <p className="mt-2 text-gray-600 dark:text-gray-300">
                      {event.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More Button */}
        <div className="mt-8 text-center">
          <Button variant="outline" className="px-8">
            Load More Events
          </Button>
        </div>
      </div>
    </div>
  );
}
