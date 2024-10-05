import { Metadata } from 'next';
import PageContent from './page-content';

export const metadata: Metadata = {
  title: 'Fundit - Sign In ',
  description: 'fundit',
};

export default function SignIn() {
  return <PageContent />;
}
