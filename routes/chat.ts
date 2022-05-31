import { Prisma } from '@prisma/client';
import { Router } from 'express';
import { StatusCodes } from 'http-status-codes';
import { getChat, postChat } from '../handlers/chat.js';

const router = Router();
const { OK, INTERNAL_SERVER_ERROR, NOT_FOUND } = StatusCodes;

/*
  Argument parsing is done in route functions.
  Handlers are for database interaction.
*/

router.post('/', async (req, res) => {
  try {
    const chat = req.body as Prisma.ChatCreateInput;
    await postChat(chat);
    res.sendStatus(OK);
  } catch {
    res.sendStatus(INTERNAL_SERVER_ERROR);
  }
});

router.get('/:chatId', async (req, res) => {
  try {
    const chatId = req.params.chatId;
    const chat = await getChat(chatId);
    chat ? res.status(OK).send(chat) : res.sendStatus(NOT_FOUND);
  } catch {
    res.sendStatus(INTERNAL_SERVER_ERROR);
  }
});

router.post('/:chatId/message', async (req, res) => {
  try {
    const message = req.body as Prisma.MessageCreateInput;
    await postMessage(message);
    res.sendStatus(OK);
  } catch {
    res.sendStatus(INTERNAL_SERVER_ERROR);
  }
});

export default router;
