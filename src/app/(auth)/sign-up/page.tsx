import { Metadata } from 'next';
import PageContent from './page-content';

export const metadata: Metadata = {
  title: 'Fundit - Sign Up ',
  description: 'fundit',
};

export default function SignUp() {
  return <PageContent />;
}
