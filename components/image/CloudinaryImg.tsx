import { buildUrl } from 'cloudinary-build-url';
import clsx from 'clsx';
import Image from 'next/image';
import * as React from 'react';

type CloudinaryImgType = {
  publicId: string;
  height: string | number;
  width: string | number;
  alt: string;
  title: string;
  className: string;
  aspect?: {
    width: number;
    height: number;
  };
  mdx?: boolean;
} & React.ComponentPropsWithoutRef<'figure'>;

export default function CloudinaryImg({
  publicId,
  height,
  width,
  alt,
  title,
  className,
  aspect,
  mdx = false,
}: CloudinaryImgType) {
  const urlBlurred = buildUrl(publicId, {
    cloud: {
      cloudName: 'rizaadi',
    },
    transformations: {
      effect: {
        name: 'blur:1000',
      },
      quality: 1,
      rawTransformation: aspect
        ? `c_fill,ar_${aspect.width}:${aspect.height},w_${width}`
        : undefined,
    },
  });
  const url = buildUrl(publicId, {
    cloud: {
      cloudName: 'rizaadi',
    },
    transformations: {
      rawTransformation: aspect
        ? `c_fill,ar_${aspect.width}:${aspect.height},w_${width}`
        : undefined,
    },
  });
  const aspectRatio = aspect ? aspect.height / aspect.width : undefined;
  return (
    <figure
      // className={clsx(className, 'block w-full overflow-hidden rounded', {
      className={clsx(
        className,
        'overflow-hidden rounded shadow dark:shadow-none',
        {
          'mx-auto w-full': mdx && width <= 800,
        }
      )}
      style={{ ...(mdx && width <= 800 ? { maxWidth: width } : {}) }}
    >
      <div
        style={{
          position: 'relative',
          height: 0,
          paddingTop: aspectRatio
            ? `${aspectRatio * 100}%`
            : `${(+height / +width) * 100}%`,
        }}
        className='img-blur'
      >
        <style jsx>{`
          .img-blur::before {
            content: '';
            position: absolute;js
            inset: 0;
            filter: blur(20px);
            z-index: 0;
            background-image: url(${urlBlurred});
            background-position: center center;
            background-size: 100%;
          }
        `}</style>
        <div className='absolute top-0 left-0'>
          <Image
            width={width}
            height={height}
            src={url}
            alt={alt}
            title={title || alt}
          />
        </div>
      </div>
    </figure>
  );
}
