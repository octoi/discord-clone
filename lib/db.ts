import { PrismaClient } from '@prisma/client';

declare global {
  var prisma: PrismaClient | undefined;
}

export const db = globalThis.prisma || new PrismaClient();

// for next js hot reload not to make too many prisma client connections
if (process.env.NODE_ENV !== 'production') globalThis.prisma = db;
