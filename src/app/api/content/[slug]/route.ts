import { Prisma } from '@prisma/client';
import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';

import { prismaClient } from '@/lib/prisma';

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

    return NextResponse.json({
      contentViews: content?.views.toString(),
    });
  } catch (err: unknown) {
    if (err instanceof Prisma.PrismaClientUnknownRequestError) {
      return NextResponse.json(
        { message: err.message ?? 'Internal Server Error' },
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
    if (err instanceof Prisma.PrismaClientUnknownRequestError) {
      return NextResponse.json(
        { message: err.message ?? 'Internal Server Error' },
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
