import { Metadata } from 'next';
import PageContent from './page-content';

export const metadata: Metadata = {
  title: 'Fundit - Payment Successful ',
  description: 'fundit',
};

export default function PaymentSuccess() {
  return <PageContent />;
}
