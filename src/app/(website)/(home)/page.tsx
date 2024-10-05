import { Metadata } from 'next';
import PageContent from './page-content';

export const metadata: Metadata = {
  title: 'Fundit - Home ',
  description: 'fundit',
};

export default function Home() {
  return <PageContent />;
}
