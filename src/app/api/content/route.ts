import { NextResponse } from 'next/server';

import { handleAPIError } from '@/lib/errorHandler';
import { prismaClient } from '@/lib/prisma';

// Revalidate every 60 seconds
export const revalidate = 60;

export async function GET() {
  try {
    const content = await prismaClient.contentMeta.findMany();

    content.sort((a, b) => a.slug.localeCompare(b.slug));
    const mapViewToNumber = content.map((c) => ({
      ...c,
      views: Number(c.views),
    }));

    return NextResponse.json(mapViewToNumber, {
      headers: {
        'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=30',
      },
    });
  } catch (error: unknown) {
    return handleAPIError(error);
  }
}
