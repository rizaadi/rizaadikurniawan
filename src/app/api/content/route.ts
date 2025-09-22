import { Prisma } from '@prisma/client';
import { NextResponse } from 'next/server';

import { prismaClient } from '@/lib/prisma';

export async function GET() {
  try {
    const content = await prismaClient.contentMeta.findMany();

    content.sort((a, b) => a.slug.localeCompare(b.slug));
    const mapViewToNumber = content.map((c) => ({
      ...c,
      views: Number(c.views),
    }));

    return NextResponse.json(mapViewToNumber);
  } catch (error: unknown) {
    if (error instanceof Prisma.PrismaClientUnknownRequestError) {
      return NextResponse.json(
        { message: error.message ?? 'Internal Server Error' },
        { status: 500 },
      );
    } else {
      return NextResponse.json(
        { message: 'Internal Server Error' },
        { status: 500 },
      );
    }
  }
}
