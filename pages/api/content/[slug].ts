import { Prisma } from '@prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';
import { z } from 'zod';

import { prismaClient } from './../../../lib/prisma';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const slug = z.string().parse(req.query.slug);
  try {
    if (req.method == 'GET') {
      const content = await prismaClient.contentMeta.findFirst({
        where: {
          slug,
        },
        select: { views: true },
      });
      return res.status(200).json({
        contentViews: content?.views.toString(),
      });
    } else if (req.method === 'POST') {
      const content = await prismaClient.contentMeta.upsert({
        where: {
          slug: slug,
        },
        create: {
          slug,
        },
        update: {
          views: {
            increment: 1,
          },
        },
      });
      return res.status(200).json({
        contentViews: content.views.toString(),
      });
    }
  } catch (err: unknown) {
    if (err instanceof Prisma.PrismaClientUnknownRequestError) {
      res.status(500).json({ message: err.message ?? 'Internal Server Error' });
    } else {
      res.status(500).json({ message: 'Internal Server Error' });
    }
  }
}
