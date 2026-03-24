'use client';

import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import { useEffect } from 'react';

import MDXComponents from './MDXComponents';

interface MDXRendererProps {
  source: MDXRemoteSerializeResult;
  onRendered?: () => void;
}

export default function MDXRenderer({ source, onRendered }: MDXRendererProps) {
  useEffect(() => {
    onRendered?.();
  }, [onRendered]);

  return <MDXRemote {...source} components={MDXComponents} />;
}
