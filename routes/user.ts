import { Prisma } from '@prisma/client';
import { Router } from 'express';
import { StatusCodes } from 'http-status-codes';
import { getUser, postUser } from '../handlers/user.js';

const router = Router();
const { OK, INTERNAL_SERVER_ERROR, NOT_FOUND } = StatusCodes;

router.post('/', async (req, res) => {
  try {
    const user = req.body as Prisma.UserCreateInput;
    await postUser(user);
    res.sendStatus(OK);
  } catch {
    res.sendStatus(INTERNAL_SERVER_ERROR);
  }
});

router.get('/:userId', async (req, res) => {
  try {
    const userId = req.params.userId;
    const user = await getUser(userId);
    user ? res.status(OK).send(user) : res.sendStatus(NOT_FOUND);
  } catch {
    res.sendStatus(INTERNAL_SERVER_ERROR);
  }
});

export default router;
