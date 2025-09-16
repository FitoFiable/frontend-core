import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import type { userData, userEvent } from '@/lib/core-api';
import { apiGetUser, apiGetEvents } from '@/lib/core-api';
import { ArrowLeft, Clock, Mail, Phone, User, CreditCard, AlertCircle, CheckCircle, Info } from 'lucide-react';

interface EventHistoryPageProps {
  homePageTranslations?: any;
  eventHistoryPageTranslations?: any;
}

interface HistoryEvent {
  id: string;
  type: 'email' | 'phone' | 'user' | 'payment' | 'system' | 'notification';
  title: string;
  description: string;
  timestamp: string;
  status: 'success' | 'warning' | 'error' | 'info';
}

export default function EventHistoryPage({ homePageTranslations, eventHistoryPageTranslations }: EventHistoryPageProps) {
  const [user, setUser] = useState<userData | null>(null);
  const [loading, setLoading] = useState(true);
  const [events, setEvents] = useState<userEvent[]>([])
  const [nextCursor, setNextCursor] = useState<number | null>(null)

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

  const mapCategoryToType = (category: userEvent['category']): HistoryEvent['type'] => {
    if (category === 'email' || category === 'phone' || category === 'user' || category === 'payment' || category === 'system' || category === 'notification') return category
    return 'system'
  }

  const mapCategoryToStatus = (category: userEvent['category']): HistoryEvent['status'] => {
    if (category === 'success' || category === 'warning' || category === 'error' || category === 'info') return category
    // default neutral
    return 'info'
  }

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
      const eventsResp = await apiGetEvents({ limit: 20 });
      if (eventsResp.status === 'OK') {
        setEvents(eventsResp.data.events)
        setNextCursor(eventsResp.data.nextCursor)
      }
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
        <p>{eventHistoryPageTranslations?.pleaseLogIn || 'Please log in to view event history.'}</p>
        <Button onClick={() => window.location.href = '/'}>
          {eventHistoryPageTranslations?.goToLogin || 'Go to Login'}
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
                {eventHistoryPageTranslations?.backToDashboard || 'Back to Dashboard'}
              </a>
            </Button>
            <div className="flex-1">
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-gray-100">
                {eventHistoryPageTranslations?.title || 'Event History'}
              </h1>
              <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">
                {eventHistoryPageTranslations?.subtitle || 'View your account activity and system events'}
              </p>
            </div>
          </div>
        </div>

        {/* Event History List */}
        <div className="space-y-4">
          {[...events].reverse().map((event, idx) => (
            <Card
              key={`${event.date}-${idx}`}
              className={`border-l-4 ${getStatusColor(mapCategoryToStatus(event.category))} transition-all hover:shadow-md`}
            >
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 mt-1">
                    {getEventIcon(mapCategoryToType(event.category))}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                        {event.title}
                      </h3>
                      <div className="flex items-center gap-2">
                        {getStatusIcon(mapCategoryToStatus(event.category))}
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                          {new Date(event.date).toLocaleString()}
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
          {nextCursor !== null && (
            <Button
              variant="outline"
              className="px-8"
              onClick={async () => {
                const resp = await apiGetEvents({ limit: 20, cursor: nextCursor })
                if (resp.status === 'OK') {
                  setEvents(prev => [...prev, ...resp.data.events])
                  setNextCursor(resp.data.nextCursor)
                }
              }}
            >
              {eventHistoryPageTranslations?.loadMore || 'Load More Events'}
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
