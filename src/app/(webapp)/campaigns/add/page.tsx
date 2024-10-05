import { Metadata } from 'next';
import PageContent from './page-content';

export const metadata: Metadata = {
  title: 'Fundit - Add Campaign',
  description: 'Add Campaign',
};

export default function AddCampaign() {
  return <PageContent />;
}
