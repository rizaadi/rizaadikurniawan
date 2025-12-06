import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';

import { handleAPIError } from '@/lib/errorHandler';
import { prismaClient } from '@/lib/prisma';

// Revalidate every 60 seconds
export const revalidate = 60;

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> },
) {
  try {
    const { slug } = await params;
    const validatedSlug = z.string().parse(slug);

    const content = await prismaClient.contentMeta.findFirst({
      where: {
        slug: validatedSlug,
      },
      select: { views: true },
    });

    return NextResponse.json(
      {
        contentViews: content?.views.toString(),
      },
      {
        headers: {
          'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=30',
        },
      },
    );
  } catch (err: unknown) {
    return handleAPIError(err);
  }
}

export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> },
) {
  try {
    const { slug } = await params;
    const validatedSlug = z.string().parse(slug);

    const content = await prismaClient.contentMeta.upsert({
      where: {
        slug: validatedSlug,
      },
      create: {
        slug: validatedSlug,
      },
      update: {
        views: {
          increment: 1,
        },
      },
    });

    return NextResponse.json({
      contentViews: content.views.toString(),
    });
  } catch (err: unknown) {
    return handleAPIError(err);
  }
}
