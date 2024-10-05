import { Metadata } from 'next';
import PageContent from './page-content';

export const metadata: Metadata = {
  title: 'Fundit - Campaign Details ',
  description: 'Campaign Details',
};

export default function TourDetails() {
  return <PageContent />;
}
