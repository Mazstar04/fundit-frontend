export default interface IGetStatsResponse {
  walletBalance: number;
  totalAmountReceived: number;
  totalAmountWithdrawn: number;
  totalActiveCampaigns: number;
  totalInactiveCampaigns: number;
}
