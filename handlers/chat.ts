import { Chat, Prisma } from '@prisma/client';
import prisma from '../prisma/client.js';

export const postChat = async (chat: Prisma.ChatCreateInput) => {
  await prisma.chat.create({ data: chat });
};

export const getChat = async (chatId: string): Promise<Chat | undefined> => {
  const chat = await prisma.chat.findUnique({ where: { id: chatId } });
  return chat ?? undefined;
};

export const postMessage = async (message: Prisma.MessageCreateInput) => {
  await prisma.message.create({ data: message });
};
