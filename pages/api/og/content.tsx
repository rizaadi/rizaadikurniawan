/* eslint-disable @next/next/no-img-element */
import { ImageResponse } from '@vercel/og';
import { NextRequest } from 'next/server';
import { CSSProperties } from 'react';

import { baseUrl } from '../../../types/env';

export const fetchInterBold = fetch(
  new URL('public/fonts/Inter-Bold.ttf', import.meta.url)
).then((res) => res.arrayBuffer());

export const fetchInterMedium = fetch(
  new URL('public/fonts/Inter-Medium.ttf', import.meta.url)
).then((res) => res.arrayBuffer());

export const config = {
  runtime: 'experimental-edge',
};

export default async function handler(req: NextRequest) {
  const interBold = await fetchInterBold;
  const interMedium = await fetchInterMedium;
  const { searchParams } = new URL(req.url);

  const title = searchParams.get('title');
  const type = searchParams.get('type');

  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          backgroundImage:
            'linear-gradient(107deg, rgba(1,2,19,1) 42%, rgba(36,172,255,1) 82%, rgba(9,59,222,1) 95%, rgba(0,0,0,1) 100%)',
        }}
      >
        <div
          style={{
            position: 'absolute',
            height: '100%',
            width: '100%',
            backgroundImage:
              'linear-gradient(29deg, rgba(1,2,19,0) 42%, rgba(9,59,222,1) 80%, rgba(0,0,0,0) 100%)',
            filter: 'blur(20px)',
          }}
        ></div>
        <div
          style={{
            position: 'absolute',
            height: '100%',
            width: '100%',
            backgroundImage: `url(${baseUrl}/svg/graint.svg)`,
            filter: 'brightness(150%) invert(100%)',
          }}
        ></div>

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            textAlign: 'left',
            height: '100%',
            width: '100%',
            padding: '5rem',
          }}
        >
          <h3 style={{ margin: 0, color: '#97A3AB' }} tw='text-3xl font-medium'>
            {type}
          </h3>

          <h1 tw='mt-0  text-7xl leading-tight font-bold'>
            <span
              style={
                {
                  backgroundImage:
                    'linear-gradient(to bottom, #F0F0F0, #DEDEDE)',
                  backgroundClip: 'text',
                  '-webkit-background-clip': 'text',
                  color: 'transparent',
                } as CSSProperties
              }
            >
              {title}
            </span>
          </h1>

          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              gap: '1.4rem',
              alignItems: 'center',
              marginTop: 'auto',
            }}
          >
            <img
              tw='w-[80px] rounded-full'
              src='https://res.cloudinary.com/rizaadi/image/upload/c_fill,h_80,w_80/rizaadikurniawan/About/photoprofile-riza.jpg'
              alt='Riza Adi Kurniawan'
            />
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '0.1rem',
              }}
            >
              <p
                style={{ margin: 0, color: '#F0F0F0' }}
                tw='font-medium text-[1.6rem] mt-0'
              >
                Riza Adi Kurniawan
              </p>
              <p style={{ margin: 0, color: '#97A3AB' }} tw='text-xl'>
                Mobile Developer
              </p>
            </div>
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: 'Inter',
          data: interMedium,
          weight: 500,
        },
        {
          name: 'Inter',
          data: interBold,
          weight: 700,
        },
      ],
    }
  );
}
