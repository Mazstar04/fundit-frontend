export default interface IGetWithdrawalResponse {
  id: string;
  bankName: string;
  accountNo: string;
  accountName: string;
  amount: number;
  created: Date;
}
