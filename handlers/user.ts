import { Prisma, User } from '@prisma/client';
import prisma from '../prisma/client.js';

export const postUser = async (user: Prisma.UserCreateInput) => {
  await prisma.user.create({ data: user });
};

export const getUser = async (userId: string): Promise<User | undefined> => {
  const user = await prisma.user.findUnique({ where: { id: userId } });
  return user ?? undefined;
};
