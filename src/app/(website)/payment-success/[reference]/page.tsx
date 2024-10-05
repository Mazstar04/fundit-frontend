import { Metadata } from 'next';
import PageContent from './page-content';

export const metadata: Metadata = {
  title: 'Fundit - Verify Payment ',
  description: 'fundit',
};

export default function VerifyPayment() {
  return <PageContent />;
}
