export interface IRevenue {
  title: string;
  amount: number;
  className?: string;
  color: string;
  action: {
    text: string;
    method: ()=>void;
  }
}
