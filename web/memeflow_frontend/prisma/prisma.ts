// web/memeflow_frontend/lib/prisma.ts
import { PrismaClient } from '@prisma/client';

/**
 * Creates one PrismaClient in dev (next‑js hot‑reload safe) and
 * re‑uses it on every import.
 */
declare global {
  // eslint-disable-next-line no-var
  var prisma: PrismaClient | undefined;
}

export const prisma: PrismaClient =
  global.prisma ??
  new PrismaClient({
    datasources: {
      db: { url: process.env.DATABASE_URL },
    },
  });

if (process.env.NODE_ENV !== 'production') global.prisma = prisma;
