export type EmailManagementPageLangType = {
  header: {
    title: string;
    subtitle: string;
    backToDashboard: string;
  };
  emailSync: {
    title: string;
    step1: {
      title: string;
      description: string;
    };
    step2: {
      title: string;
      description: string;
      subjectLabel: string;
      phoneLabel: string;
      sendButton: string;
    };
    step3: {
      title: string;
      description: string;
    };
    status: {
      pending: string;
      active: string;
    };
  };
  gmailSetup: {
    title: string;
    description: string;
    step1: {
      title: string;
      steps: string[];
    };
    step2: {
      title: string;
      steps: string[];
      findEmails: {
        title: string;
        tips: string[];
        warning: string;
      };
      example: {
        title: string;
        banks: string;
      };
    };
    success: {
      title: string;
      description: string;
      time: string;
    };
  };
};
