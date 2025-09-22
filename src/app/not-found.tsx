import React from 'react';

import Layout from '@/components/layout/Layout';

export default function NotFound() {
  return (
    <Layout>
      <div className='flex flex-col items-center justify-center min-h-screen'>
        <h1 className='text-4xl font-bold mb-4'>404 - Page Not Found</h1>
        <p className='text-lg text-gray-600 dark:text-gray-400'>
          The page you're looking for doesn't exist.
        </p>
      </div>
    </Layout>
  );
}
