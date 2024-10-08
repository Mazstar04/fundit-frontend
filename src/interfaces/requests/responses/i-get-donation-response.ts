export default interface IGetDonationResponse {
  id: string;
  campaignId: string;
  campaignTitle: string;
  username: string;
  amount: number;
  created: Date;
  status: string;
}
