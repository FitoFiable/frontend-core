import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { apiSetAllowedEmails } from '@/lib/core-api';
import { Plus, X, Mail, Check, AlertCircle, Loader2, RefreshCw, CheckCircle, Clock } from 'lucide-react';

interface EmailManagerProps {
  initialEmails?: string[];
  confirmedEmails?: string[];
  translations?: any;
  onRefresh?: () => void;
}

export default function EmailManager({ initialEmails = [], confirmedEmails = [], translations, onRefresh }: EmailManagerProps) {
  const [emails, setEmails] = useState<string[]>(initialEmails);
  const [confirmed, setConfirmed] = useState<string[]>(confirmedEmails);
  const [newEmail, setNewEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);
  const [emailError, setEmailError] = useState<string | null>(null);
  const [emailToDelete, setEmailToDelete] = useState<string | null>(null);

  // Update confirmed emails when prop changes
  useEffect(() => {
    setConfirmed(confirmedEmails);
  }, [confirmedEmails]);

  // Handle scroll to component after refresh
  useEffect(() => {
    const shouldScroll = sessionStorage.getItem('scrollToEmailManager');
    if (shouldScroll) {
      // Remove the flag
      sessionStorage.removeItem('scrollToEmailManager');
      // Scroll to the component
      setTimeout(() => {
        const element = document.getElementById('email-manager');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100); // Small delay to ensure page is fully loaded
    }
  }, []);

  // Email validation function
  const isValidEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Check if an email is active (confirmed)
  const isEmailActive = (email: string): boolean => {
    return confirmed.includes(email);
  };

  // Handle refresh
  const handleRefresh = () => {
    // Store the component ID in sessionStorage before reload
    sessionStorage.setItem('scrollToEmailManager', 'true');
    window.location.reload();
  };

  // Handle adding a new email
  const handleAddEmail = async () => {
    const trimmedEmail = newEmail.trim().toLowerCase();
    
    if (!trimmedEmail) {
      setEmailError('Please enter an email address');
      return;
    }

    if (!isValidEmail(trimmedEmail)) {
      setEmailError('Please enter a valid email address');
      return;
    }

    if (emails.includes(trimmedEmail)) {
      setEmailError('This email is already in the list');
      return;
    }

    setEmailError(null);
    setIsLoading(true);
    setMessage(null);

    try {
      const updatedEmails = [...emails, trimmedEmail];
      const response = await apiSetAllowedEmails(updatedEmails);
      
      if (response.status === 'OK') {
        setEmails(updatedEmails);
        setNewEmail('');
        setMessage({ type: 'success', text: 'Email added successfully!' });
      } else {
        setMessage({ type: 'error', text: response.status === 'ERROR' ? response.message : 'Failed to add email' });
      }
    } catch (error) {
      setMessage({ type: 'error', text: 'An error occurred while adding the email' });
    } finally {
      setIsLoading(false);
    }
  };

  // Handle showing confirmation dialog
  const handleRemoveEmail = (emailToRemove: string) => {
    setEmailToDelete(emailToRemove);
  };

  // Handle confirming email deletion
  const handleConfirmDelete = async () => {
    if (!emailToDelete) return;
    
    setIsLoading(true);
    setMessage(null);

    try {
      const updatedEmails = emails.filter(email => email !== emailToDelete);
      const response = await apiSetAllowedEmails(updatedEmails);
      
      if (response.status === 'OK') {
        setEmails(updatedEmails);
        setMessage({ type: 'success', text: 'Email removed successfully!' });
      } else {
        setMessage({ type: 'error', text: response.status === 'ERROR' ? response.message : 'Failed to remove email' });
      }
    } catch (error) {
      setMessage({ type: 'error', text: 'An error occurred while removing the email' });
    } finally {
      setIsLoading(false);
      setEmailToDelete(null);
    }
  };

  // Handle canceling deletion
  const handleCancelDelete = () => {
    setEmailToDelete(null);
  };


  // Handle Enter key press
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleAddEmail();
    }
  };

  // Clear message after 3 seconds
  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => setMessage(null), 3000);
      return () => clearTimeout(timer);
    }
  }, [message]);

  return (
    <Card id="email-manager" className="w-full">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2">
            <Mail className="h-5 w-5" />
            Allowed Emails
          </CardTitle>
          <Button
            variant="outline"
            size="sm"
            onClick={handleRefresh}
            disabled={isLoading}
            className="text-blue-600 hover:text-blue-700 hover:bg-blue-50"
          >
            <RefreshCw className="h-4 w-4 mr-1" />
            Refresh
          </Button>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Add Email Input */}
        <div className="flex gap-2">
          <div className="flex-1">
            <input
              type="email"
              value={newEmail}
              onChange={(e) => {
                setNewEmail(e.target.value);
                setEmailError(null);
              }}
              onKeyPress={handleKeyPress}
              placeholder="Enter email address..."
              className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 ${
                emailError ? 'border-red-500 dark:border-red-400' : 'border-gray-300 dark:border-gray-600'
              }`}
              disabled={isLoading}
            />
            {emailError && (
              <p className="text-red-500 dark:text-red-400 text-sm mt-1 flex items-center gap-1">
                <AlertCircle className="h-4 w-4" />
                {emailError}
              </p>
            )}
          </div>
          <Button
            onClick={handleAddEmail}
            disabled={isLoading || !newEmail.trim()}
            className="px-4"
          >
            {isLoading ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : (
              <Plus className="h-4 w-4" />
            )}
          </Button>
        </div>

        {/* Message Display */}
        {message && (
          <div className={`p-3 rounded-md flex items-center gap-2 ${
            message.type === 'success' 
              ? 'bg-green-50 text-green-700 border border-green-200' 
              : 'bg-red-50 text-red-700 border border-red-200'
          }`}>
            {message.type === 'success' ? (
              <Check className="h-4 w-4" />
            ) : (
              <AlertCircle className="h-4 w-4" />
            )}
            {message.text}
          </div>
        )}

        {/* Email List */}
        <div className="space-y-2">
          {emails.length === 0 ? (
            <div className="text-center py-8 text-gray-500 dark:text-gray-400">
              <Mail className="h-12 w-12 mx-auto mb-2 opacity-50" />
              <p>No allowed emails yet</p>
              <p className="text-sm">Add emails to get started</p>
            </div>
          ) : (
            <div className="space-y-2 max-h-64 overflow-y-auto">
              {emails.map((email, index) => {
                const isActive = isEmailActive(email);
                return (
                  <div
                    key={index}
                    className={`flex items-center justify-between p-3 rounded-lg transition-colors ${
                      isActive 
                        ? 'bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 hover:bg-green-100 dark:hover:bg-green-900/30' 
                        : 'bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800/70'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-2">
                        <Mail className="h-4 w-4 text-gray-500 dark:text-gray-400" />
                        <span className="text-sm font-medium text-gray-900 dark:text-gray-100">{email}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        {isActive ? (
                          <>
                            <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-400" />
                            <span className="text-xs text-green-600 dark:text-green-400 font-medium">Active</span>
                          </>
                        ) : (
                          <>
                            <Clock className="h-4 w-4 text-orange-500 dark:text-orange-400" />
                            <span className="text-xs text-orange-500 dark:text-orange-400 font-medium">Pending</span>
                          </>
                        )}
                      </div>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleRemoveEmail(email)}
                      disabled={isLoading}
                      className="text-red-500 hover:text-red-700 hover:bg-red-50 dark:text-red-400 dark:hover:text-red-300 dark:hover:bg-red-900/20 p-1 h-8 w-8"
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Stats */}
        <div className="text-sm text-gray-500 dark:text-gray-400 text-center space-y-1">
          <div>
            {emails.length} email{emails.length !== 1 ? 's' : ''} allowed
          </div>
          {emails.length > 0 && (
            <div className="flex justify-center gap-4 text-xs">
              <span className="flex items-center gap-1">
                <CheckCircle className="h-3 w-3 text-green-600 dark:text-green-400" />
                {emails.filter(isEmailActive).length} active
              </span>
              <span className="flex items-center gap-1">
                <Clock className="h-3 w-3 text-orange-500 dark:text-orange-400" />
                {emails.filter(email => !isEmailActive(email)).length} pending
              </span>
            </div>
          )}
        </div>
      </CardContent>

      {/* Confirmation Dialog */}
      {emailToDelete && (
        <div className="fixed inset-0 bg-black/20 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white/95 dark:bg-gray-900/95 backdrop-blur-md rounded-lg p-6 max-w-md w-full mx-4 shadow-xl border border-white/20 dark:border-gray-700/20">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex-shrink-0 w-10 h-10 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center">
                <AlertCircle className="h-6 w-6 text-red-600 dark:text-red-400" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">Delete Email</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">This action cannot be undone</p>
              </div>
            </div>
            
            <div className="mb-6">
              <p className="text-gray-700 dark:text-gray-300">
                Are you sure you want to remove <span className="font-semibold text-gray-900 dark:text-gray-100">{emailToDelete}</span> from your allowed emails?
              </p>
            </div>

            <div className="flex gap-3 justify-end">
              <Button
                variant="outline"
                onClick={handleCancelDelete}
                disabled={isLoading}
                className="px-4"
              >
                Cancel
              </Button>
              <Button
                variant="destructive"
                onClick={handleConfirmDelete}
                disabled={isLoading}
                className="px-4"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                    Deleting...
                  </>
                ) : (
                  'Delete Email'
                )}
              </Button>
            </div>
          </div>
        </div>
      )}
    </Card>
  );
}
