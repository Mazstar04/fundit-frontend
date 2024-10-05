import { Metadata } from 'next';
import PageContent from './page-content';

export const metadata: Metadata = {
  title: 'Fundit - Donate ',
  description: 'fundit',
};

export default function Donate() {
  return <PageContent />;
}
