'use client';

import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';

import MDXComponents from './MDXComponents';

interface MDXRendererProps {
  source: MDXRemoteSerializeResult;
}

export default function MDXRenderer({ source }: MDXRendererProps) {
  return <MDXRemote {...source} components={MDXComponents} />;
}
