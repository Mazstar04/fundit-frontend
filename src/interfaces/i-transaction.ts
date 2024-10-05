export interface IDonation {
    id: string;
    campaignId: string;
    campaignTitle: string;
    username: string;
    amount: number;
    created: Date;
    status: string;
  }
  
  export interface IWithdrawal {
    id: string;
    bankName: string;
    accountNo: string;
    accountName: string;
    amount: number;
    created: Date;
  }
  