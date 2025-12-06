import { Metadata } from 'next';

import ButtonLink from '@/components/Buttons/ButtonLink';
import Layout from '@/components/Layout/Layout';

export const metadata: Metadata = {
  title: 'Not Found',
  description: 'The page you are looking for does not exist.',
};

export default function NotFound() {
  return (
    <Layout>
      <main>
        <section className='flex flex-col items-center justify-center min-h-screen'>
          <h1 className='text-4xl font-bold mb-4'>Page Not Found</h1>
          <ButtonLink href='/'>Back to home</ButtonLink>
        </section>
      </main>
    </Layout>
  );
}
