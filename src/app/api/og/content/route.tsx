/* eslint-disable @next/next/no-img-element */
import { readFile } from 'fs/promises';
import { ImageResponse } from 'next/og';
import { join } from 'path';

import { NextRequest } from 'next/server';

export async function GET(req: NextRequest) {
  const interBold = await readFile(
    join(process.cwd(), 'public/fonts/Inter-Bold.woff'),
  );

  const { searchParams, origin } = new URL(req.url);

  const title = searchParams.get('title');
  const type = searchParams.get('type');

  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          backgroundImage: `url(${origin}/image/og-content.png)`,
          backgroundSize: '100% 100%',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            textAlign: 'left',
            fontFamily: 'Inter, sans-serif',
            height: '100%',
            width: '100%',
            padding: '5rem',
            color: '#F0F0F0',
          }}
        >
          <h3
            style={{
              margin: 0,
              color: '#97A3AB',
              fontSize: '1.875rem',
              fontWeight: 500,
            }}
          >
            {type}
          </h3>

          <h1
            style={{
              margin: 0,
              fontSize: '4.5rem',
              lineHeight: '1.25',
              fontWeight: 700,
            }}
          >
            {title}
          </h1>
        </div>
      </div>
    ),
    {
      fonts: [
        {
          name: 'Inter',
          data: interBold,
          weight: 700,
        },
      ],
    },
  );
}
