import { Metadata } from 'next';
import PageContent from './page-content';

export const metadata: Metadata = {
  title: 'Fundit - Transactions ',
  description: 'fundit',
};

export default function Transactions() {
  return <PageContent />;
}
