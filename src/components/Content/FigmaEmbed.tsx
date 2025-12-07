import clsx from 'clsx';
import React from 'react';

type FigmaFrameType = {
  src: string;
  height: string;
  width: string;
  loading: 'lazy' | 'eager';
  allowFullScreen: boolean;
} & React.ComponentPropsWithoutRef<'iframe'>;

export default function FigmaEmbed({
  src,
  className,
  width = '100%',
  height = '450',
  loading = 'lazy',
  allowFullScreen = true,
}: FigmaFrameType) {
  return (
    <iframe
      className={clsx(className, 'border rounded-xl')}
      width={width}
      height={height}
      src={src}
      loading={loading}
      allowFullScreen={allowFullScreen}
    ></iframe>
  );
}
