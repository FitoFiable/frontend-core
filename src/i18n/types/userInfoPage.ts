export type UserInfoPageLangType = {
  header: {
    title: string;
    subtitle: string;
    backToDashboard: string;
  };
  basicInfo: {
    title: string;
    userId: string;
    username: string;
    phoneNumber: string;
    verified: string;
    notSet: string;
  };
  emailStatus: {
    title: string;
    allowedEmails: string;
    confirmedEmails: string;
    emailList: string;
    configured: string;
    active: string;
    status: {
      active: string;
      pending: string;
    };
  };
  rawData: {
    title: string;
    viewData: string;
  };
};
