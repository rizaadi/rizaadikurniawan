'use client';

import { useEffect } from 'react';

import ButtonLink from '@/components/Buttons/ButtonLink';
import Layout from '@/components/Layout/Layout';

export default function Error({
  error,
}: {
  error: Error & { digest?: string };
}) {
  useEffect(() => {
    // eslint-disable-next-line no-console
    console.error(error);
  }, [error]);

  return (
    <Layout>
      <main className='layout-container min-h-main flex flex-col items-center justify-center'>
        <section className='text-center'>
          <h3>Oops!</h3>
          <p>It looks like the content you're searching not found</p>
          <div className='flex gap-4 justify-center mt-2'>
            <ButtonLink href='/'>Back to home</ButtonLink>
          </div>
        </section>
      </main>
    </Layout>
  );
}
