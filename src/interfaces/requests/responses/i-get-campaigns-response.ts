export default interface IGetCampaignsResponse {
  id: string;
  title: string;
  coverImagePath: string;
  imagePaths: string[];
  shortDescription: string;
  description: string;
  created?: string;
  amount: number;
  amountRaised: number;
  totalPayment: number;
  fullName: string;
}
