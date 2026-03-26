'use client';

import ButtonLink from '@/components/Buttons/ButtonLink';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html>
      <body>
        <main
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '100vh',
            textAlign: 'center',
            padding: '2rem',
          }}
        >
          <h2>Something went wrong</h2>
          <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
            <button onClick={reset}>Try again</button>
            <ButtonLink href='/'>Back to home</ButtonLink>
          </div>
        </main>
      </body>
    </html>
  );
}
