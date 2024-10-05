import { Metadata } from 'next';
import PageContent from './page-content';

export const metadata: Metadata = {
  title: 'Fundit - Campaigns ',
  description: 'fundit',
};

export default function Campaigns() {
  return <PageContent />;
}
