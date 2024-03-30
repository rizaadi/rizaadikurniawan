import { ImageResponse } from '@vercel/og';
import { CSSProperties } from 'react';

export const fetchInterLight = fetch(
  new URL('public/fonts/Inter-Light.ttf', import.meta.url)
).then((res) => res.arrayBuffer());

export const fetchInterRegular = fetch(
  new URL('public/fonts/Inter-Regular.ttf', import.meta.url)
).then((res) => res.arrayBuffer());

export const fetchInterSemiBold = fetch(
  new URL('public/fonts/Inter-SemiBold.ttf', import.meta.url)
).then((res) => res.arrayBuffer());

export const fetchBodoniSemiBoldItalic = fetch(
  new URL('public/fonts/BodoniModa_28pt-SemiBoldItalic.ttf', import.meta.url)
).then((res) => res.arrayBuffer());

export const config = {
  runtime: 'experimental-edge',
};
export default async function handler() {
  const [interLight, interRegular, interSemiBold, bodoniSemiBoldItalic] =
    await Promise.all([
      fetchInterLight,
      fetchInterRegular,
      fetchInterSemiBold,
      fetchBodoniSemiBoldItalic,
    ]);

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
            backgroundImage: `url(https://rizaadikurniawan.com/svg/graint.svg)`,
            filter: 'brightness(150%) invert(100%)',
          }}
        ></div>

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            textAlign: 'center',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100%',
            width: '100%',
            padding: '5rem',
            color: '#F0F0F0',
          }}
        >
          <h4
            style={
              {
                position: 'absolute',
                top: '4rem',
                fontWeight: 300,
                marginTop: '0',
              } as CSSProperties
            }
            tw='text-white border rounded-full border-white px-3 py-2'
          >
            rizaadikurniawan.com
          </h4>
          <h1
            style={
              {
                fontWeight: 600,
                margin: 0,
                fontSize: '5rem',
                gap: '1rem',
                top: '1.8rem',
              } as CSSProperties
            }
          >
            A
            <span
              style={{
                fontFamily: 'Bodoni Moda',
                bottom: '1rem',
              }}
            >
              Personal
            </span>
            Portfolio
          </h1>
          <p
            style={{
              fontWeight: 400,
            }}
            tw='text-1xl my-2 mb-4'
          >
            Crafted by Riza Adi Kurniawan
          </p>
          <p
            style={
              {
                marginTop: '0',
                backgroundImage: 'linear-gradient(to bottom, #F0F0F0, #9497A7)',
                backgroundClip: 'text',
                '-webkit-background-clip': 'text',
                color: 'transparent',
                textWrap: 'balance',
                fontWeight: 300,
              } as CSSProperties
            }
            tw='px-11 text-2xl'
          >
            Dedicated to showcasing projects, diving into curiosities, and
            writing random thoughts.
          </p>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      //   debug: true,
      fonts: [
        {
          name: 'Inter',
          data: interLight,
          weight: 300,
        },
        {
          name: 'Inter',
          data: interRegular,
          weight: 400,
        },

        {
          name: 'Inter',
          data: interSemiBold,
          weight: 600,
        },
        {
          name: 'Bodoni Moda',
          data: bodoniSemiBoldItalic,
          weight: 600,
        },
      ],
    }
  );
}
