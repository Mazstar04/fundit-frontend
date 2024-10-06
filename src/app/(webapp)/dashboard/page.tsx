import { Metadata } from 'next';
import PageContent from './page-content';

export const metadata: Metadata = {
  title: 'Fundit - Dashboard ',
  description: 'fundit',
};

export default function Dashboard() {
  return <PageContent />;
}
