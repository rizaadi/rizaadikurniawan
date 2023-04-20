import { Prisma } from '@prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';

import { prismaClient } from '../../../lib/prisma';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    if (req.method === 'GET') {
      const content = await prismaClient.contentMeta.findMany();

      content.sort((a, b) => a.slug.localeCompare(b.slug));
      const mapViewToNumber = content.map((c) => ({
        ...c,
        views: Number(c.views),
      }));

      return res.status(200).json(mapViewToNumber);
    } else {
      return res.status(405).json({ message: 'Method Not Allowed' });
    }
  } catch (error: unknown) {
    if (error instanceof Prisma.PrismaClientUnknownRequestError) {
      return res
        .status(500)
        .json({ message: error.message ?? 'Internal Server Error' });
    } else {
      return res.status(500).json({ message: 'Internal Server Error' });
    }
  }
}
